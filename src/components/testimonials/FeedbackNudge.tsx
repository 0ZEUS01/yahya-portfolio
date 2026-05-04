"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function FeedbackNudge() {
  const [isVisible, setIsVisible] = useState(false);
  // We use a ref to store the timer so we can reset it easily
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    // Clear any existing timer to prevent multiple popups at once
    if (timerRef.current) clearTimeout(timerRef.current);

    // Start a fresh 60-second countdown
    timerRef.current = setTimeout(() => {
      const hasSubmitted = localStorage.getItem("testimonial_submitted");
      if (!hasSubmitted) {
        setIsVisible(true);
      }
    }, 60000);
  };

  useEffect(() => {
    const hasSubmitted = localStorage.getItem("testimonial_submitted");
    if (hasSubmitted) return;

    // 1. Start the initial timer on mount
    startTimer();

    // 2. Keep the Exit Intent logic
    const handleExit = (e: MouseEvent) => {
      if (e.clientY < 0) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleExit);

    // Cleanup event listeners and timers when the component unmounts
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      document.removeEventListener("mouseleave", handleExit);
    };
  }, []);

  const remindLater = () => {
    setIsVisible(false);
    // When they say "Not now", we just start the timer over again
    startTimer();
  };

  const handleReviewClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm p-6 bg-blue-700 text-white rounded-2xl shadow-2xl animate-in slide-in-from-bottom-10">
      <button
        onClick={remindLater}
        className="absolute top-2 right-2 p-2 opacity-70 hover:opacity-100"
      >
        ✕
      </button>

      <h4 className="font-bold text-lg mb-2">Enjoying the portfolio? 🚀</h4>
      <p className="text-sm mb-4">
        If you found my work interesting, I’d love a quick review or some
        advice. It helps me improve as an engineer!
      </p>

      <div className="flex gap-4 items-center">
        <Link
          href="/guestbook"
          onClick={handleReviewClick}
          className="bg-white text-blue-700 px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-100 transition-colors"
        >
          Leave Review
        </Link>
        <button
          onClick={remindLater}
          className="text-sm underline hover:text-slate-200 transition-colors"
        >
          Remind me later
        </button>
      </div>
    </div>
  );
}
