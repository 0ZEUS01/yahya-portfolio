import { supabase } from "@/lib/supabase";
import TestimonialForm from "@/components/testimonials/TestimonialForm";
import { FaLinkedin } from "react-icons/fa";

export default async function GuestbookPage() {
  const { data: reviews } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_approved", true)
    .eq("is_deleted", false)
    .order("created_at", { ascending: false });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center text-slate-900 dark:text-white">
        Guestbook
      </h1>
      <p className="text-center text-slate-500 mb-12 text-lg">
        Words from the community and colleagues.
      </p>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-20">
        {reviews?.map((review) => (
          <div
            key={review.id}
            className="break-inside-avoid p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-yellow-500 font-bold">
                {"★".repeat(review.rating)}
              </span>
              <span className="text-xs text-slate-400">
                {new Date(review.created_at).toLocaleDateString()}
              </span>
            </div>

            <p className="text-slate-700 dark:text-slate-300 mb-6 italic leading-relaxed">
              &ldquo;{review.comment}&rdquo;
            </p>

            <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
              {/* Added Avatar Circle */}
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0 uppercase">
                {review.name ? review.name[0] : "Y"}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-slate-900 dark:text-white truncate">
                    {review.name}
                  </p>
                  {review.linkedin_url && (
                    <a
                      href={
                        review.linkedin_url.startsWith("http")
                          ? review.linkedin_url
                          : `https://${review.linkedin_url}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a66c2] dark:text-blue-400 hover:opacity-80 transition-opacity shrink-0"
                    >
                      <FaLinkedin size={16} />
                    </a>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5 truncate">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 dark:bg-slate-950 p-10 rounded-3xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
          Leave your mark
        </h2>
        <TestimonialForm />
      </div>
    </div>
  );
}
