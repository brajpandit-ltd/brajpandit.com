"use client";

import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { FaChartLine, FaArrowUp, FaArrowDown, FaMinus } from "react-icons/fa";

interface DailyStat {
    date: string;
    jap: number;
    malas: number;
}

interface JapStatisticsProps {
    username?: string;
    mobile?: string;
    days?: number;
}

const JapStatistics: React.FC<JapStatisticsProps> = ({ username, mobile, days = 7 }) => {
    const [stats, setStats] = useState<DailyStat[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            if (!username && !mobile) {
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                const params = new URLSearchParams();
                if (username) params.append("username", username);
                if (mobile) params.append("mobile", mobile);
                params.append("days", days.toString());

                const response = await fetch(`/api/user-stats?${params.toString()}`);

                if (response.ok) {
                    const result = await response.json();
                    setStats(result.data || []);
                } else {
                    const errorData = await response.json();
                    setError(errorData.message || "Failed to load statistics");
                }
            } catch (err) {
                console.error("Error fetching statistics:", err);
                setError("Failed to load statistics");
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
    }, [username, mobile, days]);

    // Calculate trend
    const getTrend = () => {
        if (stats.length < 2) return "neutral";
        const lastTwo = stats.slice(-2);
        if (lastTwo[1].jap > lastTwo[0].jap) return "up";
        if (lastTwo[1].jap < lastTwo[0].jap) return "down";
        return "neutral";
    };

    const trend = getTrend();
    const totalJaps = stats.reduce((sum, stat) => sum + stat.jap, 0);
    const avgJaps = stats.length > 0 ? Math.round(totalJaps / stats.length) : 0;

    // Format data for chart
    const chartData = stats.map(stat => ({
        date: new Date(stat.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        jap: stat.jap,
        malas: stat.malas,
    }));

    if (!username && !mobile) {
        return (
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg border border-orange-100">
                <div className="text-center">
                    <FaChartLine className="text-5xl text-orange-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Track Your Progress</h3>
                    <p className="text-gray-600 text-sm">
                        Save your jap count to view daily statistics and track your spiritual journey! 🕉️
                    </p>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg border border-orange-100">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading your statistics...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg border border-orange-100">
                <div className="text-center">
                    <p className="text-red-600">{error}</p>
                </div>
            </div>
        );
    }

    if (stats.length === 0) {
        return (
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg border border-orange-100">
                <div className="text-center">
                    <FaChartLine className="text-5xl text-orange-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">No Data Yet</h3>
                    <p className="text-gray-600 text-sm">
                        Start chanting and saving your progress to see statistics! 📿
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-6 md:p-8 shadow-lg border border-orange-100">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FaChartLine className="text-orange-500" />
                        Your Progress
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Last {days} days</p>
                </div>

                {/* Trend Indicator */}
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${trend === "up" ? "bg-green-100 text-green-700" :
                        trend === "down" ? "bg-red-100 text-red-700" :
                            "bg-gray-100 text-gray-700"
                    }`}>
                    {trend === "up" && <FaArrowUp />}
                    {trend === "down" && <FaArrowDown />}
                    {trend === "neutral" && <FaMinus />}
                    <span className="font-semibold text-sm">
                        {trend === "up" ? "Trending Up" : trend === "down" ? "Trending Down" : "Steady"}
                    </span>
                </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-orange-100">
                    <div className="text-sm text-gray-600 mb-1">Total Japs</div>
                    <div className="text-3xl font-bold text-orange-600">{totalJaps.toLocaleString()}</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-orange-100">
                    <div className="text-sm text-gray-600 mb-1">Daily Average</div>
                    <div className="text-3xl font-bold text-orange-600">{avgJaps.toLocaleString()}</div>
                </div>
            </div>

            {/* Chart */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-orange-100">
                <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={chartData}>
                        <defs>
                            <linearGradient id="colorJap" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis
                            dataKey="date"
                            tick={{ fontSize: 12, fill: '#6b7280' }}
                            stroke="#d1d5db"
                        />
                        <YAxis
                            tick={{ fontSize: 12, fill: '#6b7280' }}
                            stroke="#d1d5db"
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'white',
                                border: '1px solid #fed7aa',
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}
                            labelStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="jap"
                            stroke="#f97316"
                            strokeWidth={3}
                            fill="url(#colorJap)"
                            name="Jap Count"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Daily Breakdown */}
            <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Daily Breakdown</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                    {stats.slice().reverse().map((stat, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:border-orange-200 transition-colors"
                        >
                            <div>
                                <div className="font-medium text-gray-800">
                                    {new Date(stat.date).toLocaleDateString('en-US', {
                                        weekday: 'short',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </div>
                                <div className="text-xs text-gray-500">{stat.malas} malas</div>
                            </div>
                            <div className="text-xl font-bold text-orange-600">
                                {stat.jap.toLocaleString()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JapStatistics;
