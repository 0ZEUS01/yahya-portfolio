"use client";

import { useState } from "react";
import { submitTestimonial } from "@/app/actions/testimonials";

export default function TestimonialForm() {
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<{ success?: string; error?: string }>(
    {},
  );

  async function clientAction(formData: FormData) {
    formData.append("rating", rating.toString());
    const result = await submitTestimonial(formData);
    if (result.success) {
      localStorage.setItem("testimonial_submitted", "true");
    }
    setStatus(result);
  }

  return (
    <form
      action={clientAction}
      className="max-w-xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl space-y-4 border border-slate-200 dark:border-slate-800"
    >
      <h3 className="text-2xl font-bold">Leave a Recommendation</h3>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Full Name"
          required
          className="p-2 rounded border dark:bg-slate-800"
        />
        <input
          name="role"
          placeholder="Role (e.g. Senior Dev)"
          className="p-2 rounded border dark:bg-slate-800"
        />
      </div>

      <input
        name="linkedin_url"
        placeholder="LinkedIn Profile URL (Optional)"
        type="url"
        className="w-full p-2 rounded border dark:bg-slate-800"
      />

      <div>
        <label className="block mb-1">Rating</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-2xl ${rating >= star ? "text-yellow-400" : "text-gray-300"}`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <textarea
        name="comment"
        placeholder="Your feedback..."
        required
        className="w-full p-2 h-32 rounded border dark:bg-slate-800"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
      >
        Submit for Approval
      </button>

      {status.success && (
        <p className="text-green-500 font-medium">{status.success}</p>
      )}
      {status.error && (
        <p className="text-red-500 font-medium">{status.error}</p>
      )}
    </form>
  );
}
