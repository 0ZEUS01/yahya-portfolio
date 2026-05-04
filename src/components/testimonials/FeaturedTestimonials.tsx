import { supabase } from "@/lib/supabase";
import { FaLinkedin } from "react-icons/fa";

export default async function FeaturedTestimonials() {
  const { data: featured } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_approved", true)
    .eq("is_featured", true)
    .eq("is_deleted", false);

  if (!featured || featured.length === 0) return null;

  return (
    <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-10">
      <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
        Colleague Praise & References
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featured.map((item) => (
          <div
            key={item.id}
            className="relative p-8 bg-blue-50/50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900/30"
          >
            <span className="absolute -top-4 left-6 text-6xl text-blue-500/20 font-serif">
              “
            </span>
            <p className="text-lg text-slate-700 dark:text-slate-200 mb-6 relative z-10 italic">
              {item.comment}
            </p>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                {item.name ? item.name[0] : "Y"}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-sm text-slate-900 dark:text-white truncate">
                    {item.name}
                  </p>
                  {item.linkedin_url && (
                    <a
                      href={
                        item.linkedin_url.startsWith("http")
                          ? item.linkedin_url
                          : `https://${item.linkedin_url}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a66c2] dark:text-blue-400 hover:opacity-80 transition-opacity shrink-0"
                      aria-label={`${item.name}'s LinkedIn`}
                    >
                      <FaLinkedin size={18} />
                    </a>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5 truncate">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
