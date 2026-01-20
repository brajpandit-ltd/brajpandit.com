import { google } from "googleapis";

// Initialize Google Sheets API
const getGoogleSheetsClient = () => {
  // Parse the private key properly - handle both \n and \\n
  let privateKey = process.env.GOOGLE_PRIVATE_KEY || "";

  // Remove quotes if present
  privateKey = privateKey.replace(/^["']|["']$/g, "");

  // Replace escaped newlines with actual newlines
  privateKey = privateKey.replace(/\\n/g, "\n");

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
};

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = "JapCounter"; // Default sheet name

export interface JapEntry {
  username: string;
  mobile?: string;
  jap: number;
  malas: number;
  date: string;
  lastUpdated: string;
}

/**
 * Save or update jap count entry in Google Sheets
 * If user exists for today, update their row. Otherwise, create new row.
 */
export async function saveOrUpdateJapEntry(entry: JapEntry): Promise<void> {
  try {
    const sheets = getGoogleSheetsClient();

    // First, get all existing data
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A:F`,
    });

    const rows = response.data.values || [];
    let userRowIndex = -1;
    let existingJap = 0;

    // Find if user already has an entry for today
    const currentDate = new Date().toISOString().split("T")[0];

    for (let i = 1; i < rows.length; i++) {
      // Skip header row
      const row = rows[i];
      const rowUsername = row[0];
      const rowMobile = row[1];
      const rowDate = row[4];

      // Match by username (and mobile if provided)
      const usernameMatch = rowUsername === entry.username;
      const mobileMatch =
        !entry.mobile || !rowMobile || rowMobile === entry.mobile;
      const dateMatch = rowDate === currentDate;

      if (usernameMatch && mobileMatch && dateMatch) {
        userRowIndex = i;
        existingJap = parseInt(row[2], 10) || 0;
        break;
      }
    }

    if (userRowIndex !== -1) {
      // Update existing row - ADD to existing count
      const updatedJap = existingJap + entry.jap;
      const updatedMalas = Math.floor(updatedJap / 108);

      const rowNumber = userRowIndex + 1; // Convert to 1-indexed
      await sheets.spreadsheets.values.update({
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A${rowNumber}:F${rowNumber}`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              entry.username,
              entry.mobile || "",
              updatedJap,
              updatedMalas,
              currentDate,
              entry.lastUpdated,
            ],
          ],
        },
      });
    } else {
      // Create new row
      await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A:F`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              entry.username,
              entry.mobile || "",
              entry.jap,
              entry.malas,
              currentDate,
              entry.lastUpdated,
            ],
          ],
        },
      });
    }
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    throw new Error("Failed to save data to Google Sheets");
  }
}

/**
 * Get user's latest data from Google Sheets
 */
export async function getUserData(
  username?: string,
  mobile?: string
): Promise<JapEntry | null> {
  try {
    const sheets = getGoogleSheetsClient();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A:F`,
    });

    const rows = response.data.values;
    if (!rows || rows.length <= 1) {
      // No data or only header row
      return null;
    }

    // Filter rows by username or mobile (skip header row)
    const userRows = rows.slice(1).filter((row) => {
      const rowUsername = row[0];
      const rowMobile = row[1];

      if (mobile && rowMobile === mobile) return true;
      if (username && rowUsername === username) return true;
      return false;
    });

    if (userRows.length === 0) {
      return null;
    }

    // Get the most recent entry (last row)
    const latestRow = userRows[userRows.length - 1];

    return {
      username: latestRow[0],
      mobile: latestRow[1] || undefined,
      jap: parseInt(latestRow[2], 10) || 0,
      malas: parseInt(latestRow[3], 10) || 0,
      date: latestRow[4],
      lastUpdated: latestRow[5],
    };
  } catch (error) {
    console.error("Error fetching user data from Google Sheets:", error);
    throw new Error("Failed to fetch user data");
  }
}

/**
 * Get user's daily statistics from Google Sheets
 */
export async function getUserStats(
  username?: string,
  mobile?: string,
  days: number = 30
): Promise<JapEntry[]> {
  try {
    const sheets = getGoogleSheetsClient();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A:F`,
    });

    const rows = response.data.values;
    if (!rows || rows.length <= 1) {
      return [];
    }

    // Filter rows by username or mobile (skip header row)
    const userRows = rows.slice(1).filter((row) => {
      const rowUsername = row[0];
      const rowMobile = row[1];

      if (mobile && rowMobile === mobile) return true;
      if (username && rowUsername === username) return true;
      return false;
    });

    // Convert to JapEntry objects
    const entries: JapEntry[] = userRows.map((row) => ({
      username: row[0],
      mobile: row[1] || undefined,
      jap: parseInt(row[2], 10) || 0,
      malas: parseInt(row[3], 10) || 0,
      date: row[4],
      lastUpdated: row[5],
    }));

    // Get entries from the last N days
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    const recentEntries = entries.filter((entry) => {
      const entryDate = new Date(entry.date);
      return entryDate >= cutoffDate;
    });

    return recentEntries;
  } catch (error) {
    console.error("Error fetching user stats from Google Sheets:", error);
    throw new Error("Failed to fetch user statistics");
  }
}

/**
 * Initialize the Google Sheet with headers if needed
 */
export async function initializeSheet(): Promise<void> {
  try {
    const sheets = getGoogleSheetsClient();

    // Check if sheet exists and has headers
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A1:F1`,
    });

    if (!response.data.values || response.data.values.length === 0) {
      // Add headers
      await sheets.spreadsheets.values.update({
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A1:F1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            ["Username", "Mobile", "Jap", "Malas", "Date", "LastUpdated"],
          ],
        },
      });
    }
  } catch (error) {
    console.error("Error initializing Google Sheet:", error);
    // Don't throw error here, as the sheet might already be initialized
  }
}
