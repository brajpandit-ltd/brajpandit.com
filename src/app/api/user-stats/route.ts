import { NextResponse } from "next/server";
import { getUserStats } from "@/lib/sheets";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const username = searchParams.get("username");
        const mobile = searchParams.get("mobile");
        const days = parseInt(searchParams.get("days") || "30", 10);

        if (!username && !mobile) {
            return NextResponse.json(
                { message: "Username or mobile number is required" },
                { status: 400 }
            );
        }

        const stats = await getUserStats(username || undefined, mobile || undefined, days);

        // Group by date and sum japs for each day
        const dailyStats = stats.reduce((acc, entry) => {
            const date = entry.date;
            if (!acc[date]) {
                acc[date] = {
                    date,
                    jap: 0,
                    malas: 0,
                };
            }
            acc[date].jap += entry.jap;
            acc[date].malas += entry.malas;
            return acc;
        }, {} as Record<string, { date: string; jap: number; malas: number }>);

        // Convert to array and sort by date
        const sortedStats = Object.values(dailyStats).sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        return NextResponse.json({
            message: "Statistics retrieved successfully",
            data: sortedStats,
            totalEntries: stats.length
        });
    } catch (error) {
        console.error("Error fetching user stats:", error);
        return NextResponse.json(
            { message: "Failed to fetch statistics" },
            { status: 500 }
        );
    }
}
