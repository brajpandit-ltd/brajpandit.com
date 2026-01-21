"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaHistory,
  FaCalendarDay,
  FaSave,
} from "react-icons/fa";
import { Button } from "@/components/common";
import Modal from "@/components/common/Modal";
import { toast } from "react-toastify";
import { MdOutlineVolumeOff, MdOutlineVolumeUp } from "react-icons/md";

const MALA_SIZE = 108;

const NaamJapCounter = () => {
  // const [count, setCount] = useState(0); // Removed unused state
  const [totalCount, setTotalCount] = useState(0);
  const [todayCount, setTodayCount] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0); // in seconds
  const [isActive, setIsActive] = useState(false);
  const [lastInteractionTime, setLastInteractionTime] = useState<number>(
    Date.now(),
  );

  // Save Modal State
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/radha_naam_japa_chant_1.mp3");
    audioRef.current.loop = true; // auto-repeat chant

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  // Load from LocalStorage and fetch user data
  useEffect(() => {
    const loadUserData = async () => {
      const storedTotal = localStorage.getItem("naamjap_total");
      const storedToday = localStorage.getItem("naamjap_today");
      const storedDate = localStorage.getItem("naamjap_date");
      const storedUsername = localStorage.getItem("naamjap_username");
      const storedMobile = localStorage.getItem("naamjap_mobile");

      // Load saved username and mobile if exists
      if (storedUsername) setUsername(storedUsername);
      if (storedMobile) setMobile(storedMobile);

      // Load from localStorage first (always restore counts)
      if (storedTotal) setTotalCount(parseInt(storedTotal, 10));

      // Check date for Today reset
      const currentDate = new Date().toDateString();
      const storedDateStr = localStorage.getItem("naamjap_date");

      if (storedDateStr === currentDate && storedToday) {
        // Same day - restore today's count from localStorage
        setTodayCount(parseInt(storedToday, 10));
      } else if (storedDateStr && storedDateStr !== currentDate) {
        // New day - reset today count to 0
        setTodayCount(0);
        localStorage.setItem("naamjap_date", currentDate);
      } else {
        // First time - set current date
        localStorage.setItem("naamjap_date", currentDate);
      }

      // Try to fetch user data from Google Sheets (optional sync)
      if (storedUsername || storedMobile) {
        setIsLoadingData(true);
        try {
          const params = new URLSearchParams();
          if (storedUsername) params.append("username", storedUsername);
          if (storedMobile) params.append("mobile", storedMobile);

          const response = await fetch(
            `/api/get-user-data?${params.toString()}`,
          );
          if (response.ok) {
            const result = await response.json();
            // Only sync if it's today's data and different from local
            const currentDateStr = new Date().toDateString();
            const dataDate = new Date(result.data.date).toDateString();

            if (dataDate === currentDateStr) {
              const sheetsJap = result.data.jap || 0;
              const localJap = parseInt(storedToday || "0", 10);

              // Use the higher count (in case user saved from another device)
              if (sheetsJap > localJap) {
                setTodayCount(sheetsJap);
                toast.info(`Synced from cloud: ${sheetsJap} japs! 🙏`);
              } else if (localJap > 0) {
                toast.info(`Welcome back, ${result.data.username}! 🙏`);
              }
            }
          }
        } catch (error) {
          console.error("Error loading user data:", error);
          // Silently fail - localStorage data is already loaded
        } finally {
          setIsLoadingData(false);
        }
      }
    };

    loadUserData();
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
      }, 10000); // 5 seconds
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

    // Optional mobile validation
    if (mobile.trim() && !/^[0-9]{10,15}$/.test(mobile.trim())) {
      toast.error("Please enter a valid mobile number (10-15 digits)");
      return;
    }

    setIsSaving(true);
    try {
      const response = await fetch("/api/save-jap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.trim(),
          mobile: mobile.trim() || undefined,
          jap: todayCount,
          malas: malasCompleted,
        }),
      });

      if (response.ok) {
        toast.success("Jap Saved Successfully! 🕉️");
        localStorage.setItem("naamjap_username", username.trim());
        if (mobile.trim()) {
          localStorage.setItem("naamjap_mobile", mobile.trim());
        }
        setIsSaveModalOpen(false);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to save. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setIsSaving(false);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Button
        variant="default"
        label={isPlaying ? "On" : "Off"}
        onClick={togglePlay}
        className="fixed bottom-5 right-5 z-10"
        icon={
          isPlaying ? (
            <MdOutlineVolumeUp size={20} />
          ) : (
            <MdOutlineVolumeOff size={20} />
          )
        }
      />

      <div className="flex flex-col items-center w-full max-w-md mx-auto relative">
        {/* Timer Display */}
        <div className="mb-8 bg-orange-50 text-orange-800 px-6 py-2 rounded-full font-mono text-xl font-medium border border-orange-200 shadow-sm flex items-center gap-2">
          {isActive ? (
            <FaPause className="text-xs opacity-50" />
          ) : (
            <FaPlay className="text-xs animate-pulse" />
          )}
          {formatTime(elapsedTime)}
        </div>

        {/* Main Counter Ring */}
        <div
          className="relative w-60 h-60 md:w-70 md:h-70 rounded-full border-8 border-orange-300 bg-white shadow-[0_0_40px_rgba(255,165,0,0.15)] flex items-center justify-center cursor-pointer select-none transition-transform active:scale-95 touch-manipulation tap-highlight-transparent"
          onClick={handleIncrement}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          {/* Progress Path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="6"
              strokeDasharray={`${(beadPosition / 360) * 295} 295`}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
          </svg>

          {/* Progress Bead */}
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full pointer-events-none transition-transform duration-300 ease-out"
            // style={{ transform: `rotate(${beadPosition}deg)` }}
            style={{
              transform: `rotate(${beadPosition}deg)`,
              transformOrigin: "center",
              zIndex: 1,
            }}
          >
            {/* <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full shadow-md border-2 border-white z-10"></div> */}
            <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full shadow-md border-2 border-white z-10"></div>
          </div>

          {/* Inner Decor */}
          <div className="absolute inset-4 rounded-full border border-dashed border-orange-200 pointer-events-none"></div>

          <div className="text-center z-10 pointer-events-none">
            <span className="block text-gray-500 text-sm font-medium uppercase tracking-widest mb-1">
              Radha Naam
            </span>
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
            <div className="text-2xl font-bold text-gray-900 leading-none">
              {malasCompleted}
            </div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
              Malas
            </div>
          </div>

          {/* Today */}
          <div className="bg-orange-600 text-white p-4 rounded-2xl shadow-lg shadow-orange-200 text-center flex flex-col items-center justify-center h-32 md:-mt-4 relative z-10 transform scale-105 border-2 border-white">
            <FaCalendarDay className="text-xl mb-1 opacity-80" />
            <div className="text-3xl font-bold leading-none">{todayCount}</div>
            <div className="text-xs text-orange-100 mt-1 uppercase tracking-wide">
              Today
            </div>
          </div>

          {/* Total */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center h-28">
            <FaHistory className="text-xl mb-1 text-gray-400" />
            <div className="text-2xl font-bold text-gray-900 leading-none">
              {totalCount}
            </div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
              Lifetime
            </div>
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
          onClick={() =>
            document
              .getElementById("streak-challenge")
              ?.scrollIntoView({ behavior: "smooth" })
          }
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
              Enter your details to save your today's Jap count (
              <span className="font-bold text-orange-600">{todayCount}</span>{" "}
              chants,{" "}
              <span className="font-bold text-orange-600">
                {malasCompleted}
              </span>{" "}
              malas).
            </p>

            {isLoadingData && (
              <div className="text-center py-2 text-sm text-orange-600">
                Loading your data... 🕉️
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. Rohit Krishna"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-medium"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Mobile Number{" "}
                  <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="e.g. 9876543210"
                  maxLength={15}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-medium"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Helps retrieve your data when you return
                </p>
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
                * No login required. Data is saved securely to Google Sheets.
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default NaamJapCounter;
