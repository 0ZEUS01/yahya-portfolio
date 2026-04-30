"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FeedbackNudge() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Check if they already submitted a review (Permanent check)
    const hasSubmitted = localStorage.getItem("testimonial_submitted");
    const isDismissed = sessionStorage.getItem("feedback_nudge_dismissed");

    if (!hasSubmitted && !isDismissed) {
      // 2. Wait 1 minute (60,000ms) before showing the nudge
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 60000);

      // 3. Optional: Add "Exit Intent" logic (Before they close the tab)
      const handleExit = (e: MouseEvent) => {
        if (e.clientY < 0 && !isVisible) {
          setIsVisible(true);
        }
      };

      document.addEventListener("mouseleave", handleExit);
      return () => {
        clearTimeout(timer);
        document.removeEventListener("mouseleave", handleExit);
      };
    }
  }, [isVisible]);

  const dismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("feedback_nudge_dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm p-6 bg-blue-700 text-white rounded-2xl shadow-2xl animate-in slide-in-from-bottom-10">
      <button
        onClick={dismiss}
        className="absolute top-2 right-2 p-2 opacity-70 hover:opacity-100"
      >
        ✕
      </button>

      <h4 className="font-bold text-lg mb-2">Wait! Before you go... 🚀</h4>
      <p className="text-sm mb-4">
        If you found my work interesting, I’d love a quick review or some
        advice. It helps me improve as an engineer!
      </p>

      <div className="flex gap-4">
        <Link
          href="/guestbook"
          onClick={() => {
            // We'll set this once they actually submit in the form,
            // but for now, we dismiss the nudge.
            dismiss();
          }}
          className="bg-white text-blue-700 px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-100"
        >
          Leave Review
        </Link>
        <button onClick={dismiss} className="text-sm underline">
          No thanks
        </button>
      </div>
    </div>
  );
}
