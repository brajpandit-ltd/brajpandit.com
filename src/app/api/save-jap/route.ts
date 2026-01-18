import { NextResponse } from "next/server";
import { appendJapEntry, initializeSheet } from "@/lib/sheets";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { username, mobile, jap, malas } = body;

        // Validation
        if (!username || typeof jap !== "number") {
            return NextResponse.json(
                { message: "Invalid data provided. Username and jap count are required." },
                { status: 400 }
            );
        }

        // Optional mobile validation
        if (mobile && typeof mobile !== "string") {
            return NextResponse.json(
                { message: "Invalid mobile number format" },
                { status: 400 }
            );
        }

        // Initialize sheet with headers if needed
        await initializeSheet();

        // Prepare entry data
        const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        const entry = {
            username: username.trim(),
            mobile: mobile?.trim(),
            jap,
            malas: malas || 0,
            date: currentDate,
            lastUpdated: new Date().toISOString(),
        };

        // Append to Google Sheets
        await appendJapEntry(entry);

        return NextResponse.json({
            message: "Jap saved successfully! 🕉️",
            data: entry
        });
    } catch (error) {
        console.error("Error saving jap:", error);
        return NextResponse.json(
            { message: "Failed to save data. Please try again." },
            { status: 500 }
        );
    }
}

