import { supabase } from "@/lib/supabase";

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
      <h3 className="text-2xl font-bold mb-6">Colleague Praise & References</h3>
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
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                {item.name[0]}
              </div>
              <div>
                <p className="font-bold text-sm">{item.name}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
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
