"use client";

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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

const JapStatistics: React.FC<JapStatisticsProps> = ({ days = 30 }) => {
  const [stats, setStats] = useState<DailyStat[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [username, setUsername] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");

  // Load username and mobile from localStorage
  useEffect(() => {
    const storedUsername = localStorage.getItem("naamjap_username");
    const storedMobile = localStorage.getItem("naamjap_mobile");

    if (storedUsername) setUsername(storedUsername);
    if (storedMobile) setMobile(storedMobile);
  }, []);

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
  const maxJap = stats.length > 0 ? Math.max(...stats.map((s) => s.jap)) : 0;

  // Format data for chart - fill in missing dates with 0
  const fillMissingDates = () => {
    if (stats.length === 0) return [];

    const filledData: any[] = [];
    const today = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split("T")[0];

      const existingStat = stats.find((s) => s.date === dateStr);

      filledData.push({
        date: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        fullDate: dateStr,
        jap: existingStat ? existingStat.jap : 0,
        malas: existingStat ? existingStat.malas : 0,
      });
    }

    return filledData;
  };

  const chartData = fillMissingDates();

  if (!username && !mobile) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
        <div className="text-center">
          <FaChartLine className="text-6xl text-orange-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Track Your Progress
          </h3>
          <p className="text-gray-600">
            Save your jap count to view daily statistics and track your
            spiritual journey! 🕉️
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your statistics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  if (stats.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-200">
        <div className="text-center">
          <FaChartLine className="text-6xl text-orange-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No Data Yet</h3>
          <p className="text-gray-600">
            Start chanting and saving your progress to see statistics! 📿
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 w-full">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">
          Daily Japa Progress (Last {days} Days)
        </h3>
      </div>

      {/* Chart */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6 flex justify-center">
  <div className="w-full max-w-full">
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={chartData}
        margin={{
          top: 20,
          right: window.innerWidth < 640 ? 10 : 30,
          left: window.innerWidth < 640 ? 0 : 10,
          bottom: 20,
        }}
      >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: "#6b7280" }}
              stroke="#d1d5db"
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              stroke="#d1d5db"
              domain={[0, maxJap > 0 ? maxJap + 5 : 20]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                padding: "8px 12px",
              }}
              labelStyle={{
                color: "#1f2937",
                fontWeight: "bold",
                marginBottom: "4px",
              }}
              formatter={(value: any, name?: string) => {
                if (name === "jap") {
                  return [`${value} Japa`, "Daily Japa"];
                }

                return [value, name ?? ""];
              }}
            />
            <Line
              type="monotone"
              dataKey="jap"
              stroke="#f97316"
              strokeWidth={2.5}
              dot={{ fill: "#f97316", r: 4, strokeWidth: 2, stroke: "#fff" }}
              activeDot={{
                r: 6,
                fill: "#ea580c",
                stroke: "#fff",
                strokeWidth: 2,
              }}
              name="Daily Japa"
            />
          </LineChart>
         
        </ResponsiveContainer>
         </div>
        <div className="text-center mt-2">
          <span className="text-sm text-orange-600 font-medium">
            ➜ Daily Japa
          </span>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center border border-orange-200">
          <div className="text-xs text-orange-700 mb-1 font-semibold uppercase tracking-wide">
            Total Japs
          </div>
          <div className="text-2xl md:text-3xl font-bold text-orange-600">
            {totalJaps.toLocaleString()}
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center border border-orange-200">
          <div className="text-xs text-orange-700 mb-1 font-semibold uppercase tracking-wide">
            Daily Avg
          </div>
          <div className="text-2xl md:text-3xl font-bold text-orange-600">
            {avgJaps.toLocaleString()}
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center border border-orange-200">
          <div className="text-xs text-orange-700 mb-1 font-semibold uppercase tracking-wide">
            Trend
          </div>
          <div className="flex items-center justify-center gap-1 mt-1">
            {trend === "up" && <FaArrowUp className="text-green-600 text-xl" />}
            {trend === "down" && (
              <FaArrowDown className="text-red-600 text-xl" />
            )}
            {trend === "neutral" && (
              <FaMinus className="text-gray-600 text-xl" />
            )}
            <span
              className={`text-sm font-bold ${
                trend === "up"
                  ? "text-green-600"
                  : trend === "down"
                    ? "text-red-600"
                    : "text-gray-600"
              }`}
            >
              {trend === "up" ? "Up" : trend === "down" ? "Down" : "Steady"}
            </span>
          </div>
        </div>
      </div>

      {/* Daily Breakdown */}
      <div>
        <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
          Recent Activity
        </h4>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {stats
            .slice()
            .reverse()
            .slice(0, 10)
            .map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3 hover:bg-orange-50 transition-colors border border-gray-100"
              >
                <div>
                  <div className="font-semibold text-gray-800 text-sm">
                    {new Date(stat.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.malas} malas completed
                  </div>
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
