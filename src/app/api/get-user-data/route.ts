import { NextResponse } from "next/server";
import { getUserData } from "@/lib/sheets";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const username = searchParams.get("username");
        const mobile = searchParams.get("mobile");

        if (!username && !mobile) {
            return NextResponse.json(
                { message: "Username or mobile number is required" },
                { status: 400 }
            );
        }

        const userData = await getUserData(username || undefined, mobile || undefined);

        if (!userData) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: "User data retrieved successfully",
            data: userData
        });
    } catch (error) {
        console.error("Error fetching user data:", error);
        return NextResponse.json(
            { message: "Failed to fetch user data" },
            { status: 500 }
        );
    }
}
