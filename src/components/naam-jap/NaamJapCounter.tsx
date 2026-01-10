"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaPlay, FaPause, FaHistory, FaCalendarDay, FaInfinity, FaSave } from "react-icons/fa";
import { Button } from "@/components/common";
import Modal from "@/components/common/Modal";
import { toast } from "react-toastify";

const MALA_SIZE = 108;

const NaamJapCounter = () => {
    // const [count, setCount] = useState(0); // Removed unused state
    const [totalCount, setTotalCount] = useState(0);
    const [todayCount, setTodayCount] = useState(0);
    const [startTime, setStartTime] = useState<number | null>(null);
    const [elapsedTime, setElapsedTime] = useState(0); // in seconds
    const [isActive, setIsActive] = useState(false);
    const [lastInteractionTime, setLastInteractionTime] = useState<number>(Date.now());

    // Save Modal State
    const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Load from LocalStorage
    useEffect(() => {
        const storedTotal = localStorage.getItem("naamjap_total");
        const storedToday = localStorage.getItem("naamjap_today");
        const storedDate = localStorage.getItem("naamjap_date");
        const storedTime = localStorage.getItem("naamjap_time");

        // Load saved username if exists
        const storedUsername = localStorage.getItem("naamjap_username");
        if (storedUsername) setUsername(storedUsername);

        if (storedTotal) setTotalCount(parseInt(storedTotal, 10));

        // Check date for Today reset
        const currentDate = new Date().toDateString();
        if (storedDate === currentDate && storedToday) {
            setTodayCount(parseInt(storedToday, 10));
        } else {
            // New day or first time
            setTodayCount(0);
            localStorage.setItem("naamjap_date", currentDate);
        }

        // Restore timer if wanted? User said "Resume on next jap". simpler to just start at 0 or stored time? 
        // "Pause when user stops interaction for 10 seconds". This suggests the timer is "active chanting time".
        // I will not persist the timer state across page loads heavily, maybe just zero it out or keep it if within session. 
        // Let's keep it simple: Timer is for the current session/visual.

    }, []);

    // Save to LocalStorage
    useEffect(() => {
        localStorage.setItem("naamjap_total", totalCount.toString());
        localStorage.setItem("naamjap_today", todayCount.toString());
        localStorage.setItem("naamjap_date", new Date().toDateString());
    }, [totalCount, todayCount]);

    // Timer Logic
    useEffect(() => {
        if (isActive) {
            timerRef.current = setInterval(() => {
                setElapsedTime((prev) => prev + 1);
            }, 1000);
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isActive]);

    // Idle Logic
    useEffect(() => {
        if (isActive) {
            // Clear existing idle timer
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

            // Set new idle timer for 10s
            idleTimerRef.current = setTimeout(() => {
                setIsActive(false);
            }, 10000); // 10 seconds
        }
        return () => {
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
        };
    }, [lastInteractionTime, isActive]);


    const handleIncrement = () => {
        const now = Date.now();
        // Debounce check (light, 50ms)
        if (now - lastInteractionTime < 50) return;

        setLastInteractionTime(now);

        // Start timer if not active
        if (!isActive) setIsActive(true);

        // Vibration
        if (typeof navigator !== "undefined" && navigator.vibrate) {
            navigator.vibrate(50); // Soft vibration
        }

        // Update counts
        setTodayCount((prev) => prev + 1);
        setTotalCount((prev) => prev + 1);
    };

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    // derived stats
    const malasCompleted = Math.floor(todayCount / MALA_SIZE);
    const beadPosition = Math.floor((todayCount % MALA_SIZE) * (360 / MALA_SIZE));

    // Handle Save
    const handleSaveJap = async () => {
        if (!username.trim()) {
            toast.error("Please enter a username");
            return;
        }

        setIsSaving(true);
        try {
            const response = await fetch("/api/save-jap", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username.trim(),
                    jap: todayCount,
                    malas: malasCompleted
                }),
            });

            if (response.ok) {
                toast.success("Jap Saved Successfully! 🕉️");
                localStorage.setItem("naamjap_username", username.trim());
                setIsSaveModalOpen(false);
            } else {
                toast.error("Failed to save. Please try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-md mx-auto relative">

            {/* Timer Display */}
            <div className="mb-8 bg-orange-50 text-orange-800 px-6 py-2 rounded-full font-mono text-xl font-medium border border-orange-200 shadow-sm flex items-center gap-2">
                {isActive ? <FaPlay className="text-xs animate-pulse" /> : <FaPause className="text-xs opacity-50" />}
                {formatTime(elapsedTime)}
            </div>

            {/* Main Counter Ring */}
            <div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-8 border-orange-100 bg-white shadow-[0_0_40px_rgba(255,165,0,0.15)] flex items-center justify-center cursor-pointer select-none transition-transform active:scale-95 touch-manipulation tap-highlight-transparent"
                onClick={handleIncrement}
                style={{ WebkitTapHighlightColor: "transparent" }}
            >
                {/* Progress Bead */}
                <div
                    className="absolute top-0 left-0 w-full h-full rounded-full pointer-events-none transition-transform duration-300 ease-out"
                    style={{ transform: `rotate(${beadPosition}deg)` }}
                >
                    <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full shadow-md border-2 border-white z-10"></div>
                </div>

                {/* Inner Decor */}
                <div className="absolute inset-4 rounded-full border border-dashed border-orange-200 pointer-events-none"></div>

                <div className="text-center z-10 pointer-events-none">
                    <span className="block text-gray-500 text-sm font-medium uppercase tracking-widest mb-1">Radha Naam</span>
                    <span className="block text-7xl md:text-8xl font-bold text-gray-800 tabular-nums leading-none tracking-tight">
                        {todayCount % MALA_SIZE}
                    </span>
                    <span className="block text-orange-500 text-sm font-bold mt-2">
                        / 108
                    </span>
                </div>
            </div>

            <p className="mt-6 text-gray-400 text-sm animate-pulse">
                {isActive ? "Keep Chanting..." : "Tap circle to chant"}
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 w-full mt-12 mb-8">
                {/* Malas */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center h-28">
                    <div className="text-2xl mb-1">📿</div>
                    <div className="text-2xl font-bold text-gray-900 leading-none">{malasCompleted}</div>
                    <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Malas</div>
                </div>

                {/* Today */}
                <div className="bg-orange-600 text-white p-4 rounded-2xl shadow-lg shadow-orange-200 text-center flex flex-col items-center justify-center h-32 md:-mt-4 relative z-10 transform scale-105 border-2 border-white">
                    <FaCalendarDay className="text-xl mb-1 opacity-80" />
                    <div className="text-3xl font-bold leading-none">{todayCount}</div>
                    <div className="text-xs text-orange-100 mt-1 uppercase tracking-wide">Today</div>
                </div>

                {/* Total */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center h-28">
                    <FaHistory className="text-xl mb-1 text-gray-400" />
                    <div className="text-2xl font-bold text-gray-900 leading-none">{totalCount}</div>
                    <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Lifetime</div>
                </div>
            </div>

            {/* Save Button */}
            <Button
                variant="secondary"
                label="Save My Jap"
                icon={<FaSave />}
                onClick={() => setIsSaveModalOpen(true)}
                className="w-full bg-orange-50 text-orange-700 hover:bg-orange-100 border-none shadow-sm mb-3"
            />

            <Button
                variant="primary"
                label="🔥 Join Now Streak Challenge"
                onClick={() => document.getElementById('streak-challenge')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full shadow-lg shadow-orange-200 animate-bounce-slow"
            />

            {/* Save Modal */}
            <Modal
                isOpen={isSaveModalOpen}
                onClose={() => setIsSaveModalOpen(false)}
                title="Save Your Spiritual Progress"
            >
                <div>
                    <p className="text-gray-600 text-sm mb-4">
                        Enter your name to save your today's Jap count
                        (<span className="font-bold text-orange-600">{todayCount}</span> chants, <span className="font-bold text-orange-600">{malasCompleted}</span> malas).
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Your Name</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="e.g. Rohit Krishna"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-medium"
                                autoFocus
                            />
                        </div>

                        <div className="flex gap-3 pt-2">
                            <Button
                                variant="default"
                                label="Cancel"
                                onClick={() => setIsSaveModalOpen(false)}
                                className="flex-1 bg-gray-100 text-gray-600 hover:bg-gray-200 border-none"
                            />
                            <Button
                                variant="primary"
                                label={isSaving ? "Saving..." : "Confirm Save"}
                                onClick={handleSaveJap}
                                loading={isSaving}
                                disabled={isSaving || !username.trim()}
                                className="flex-1"
                            />
                        </div>

                        <p className="text-xs text-center text-gray-400 mt-2">
                            * No login required. Data is saved securely along with your name.
                        </p>
                    </div>
                </div>
            </Modal>

        </div>
    );
};

export default NaamJapCounter;
