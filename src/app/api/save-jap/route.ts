import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { username, jap, malas } = body;

        if (!username || typeof jap !== "number") {
            return NextResponse.json(
                { message: "Invalid data provided" },
                { status: 400 }
            );
        }

        const filePath = path.join(process.cwd(), "src", "data", "blogCount.json");

        // Read existing data
        let data: Record<string, any> = {};
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, "utf-8");
            try {
                data = JSON.parse(fileContent);
            } catch (e) {
                // If file is empty or corrupted, start with empty object
                data = {};
            }
        }

        // Update data
        data[username] = {
            jap,
            malas,
            lastUpdated: new Date().toISOString(),
        };

        // Write back
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

        return NextResponse.json({ message: "Saved successfully", data: data[username] });
    } catch (error) {
        console.error("Error saving jap:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
