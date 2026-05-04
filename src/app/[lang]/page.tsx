import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/dictionaries/dictionary";

export default async function Home(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "fr";
  const dict = await getDictionary(lang);

  return (
    <main className="max-w-5xl mx-auto py-12 md:py-24 px-6 min-h-screen flex flex-col justify-center">
      
      {/* HERO SECTION */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-24">
        
        {/* RIGHT COLUMN (Image) - Moved to TOP for Mobile, pushed to RIGHT for Desktop */}
        <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group lg:order-last mb-6 lg:mb-0 flex-shrink-0">
          {/* Decorative Background Blobs for depth */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

          <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-2xl transition-transform duration-500 lg:group-hover:-rotate-2">
            <Image
              src="/profile.jpg"
              alt="Yahya Zini"
              fill
              className="object-cover transition-transform duration-700 lg:group-hover:scale-110 grayscale-[20%] lg:group-hover:grayscale-0"
              priority
            />
            {/* Thematic Overlay - Always visible on mobile, hover-only on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 lg:p-8">
              <p className="text-white font-bold text-xl drop-shadow-md">Yahya Zini</p>
              <p className="text-blue-400 font-mono text-sm uppercase tracking-widest drop-shadow-md">
                {lang === "en" ? "State Software Engineer" : "Ingénieur d'État"}
              </p>
            </div>
          </div>
        </div>

        {/* LEFT COLUMN (Text) - Appears second on Mobile, pushed to LEFT for Desktop */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-bold text-sm border border-blue-200 dark:border-blue-800 animate-fade-in w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {dict.landing.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white leading-[1.1]">
            {dict.landing.heroTitle}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-[#8892B0] mb-8 lg:mb-10 leading-relaxed max-w-2xl italic font-medium border-l-4 lg:border-l-4 border-blue-500 pl-4 lg:pl-4 border-t-0 text-left w-full">
            {lang === "en"
              ? '"Engineering is not just about solving problems; it\'s about creating possibilities."'
              : "\"L'ingénierie ne consiste pas seulement à résoudre des problèmes ; il s'agit de créer des possibilités.\""}
          </p>

          <p className="text-base sm:text-lg text-slate-500 dark:text-[#8892B0]/80 mb-8 lg:mb-10 max-w-xl text-left lg:text-left w-full">
            {dict.landing.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <Link
              href={`/${lang}/projects`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all text-center shadow-lg hover:shadow-blue-600/25 hover:-translate-y-1"
            >
              {dict.landing.btnProjects}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-200 dark:bg-[#112240] hover:bg-slate-300 dark:hover:bg-[#233554] text-slate-900 dark:text-white font-bold transition-all text-center border border-slate-300 dark:border-[#233554]"
            >
              {dict.landing.btnAbout}
            </Link>
          </div>
        </div>

      </div>

      {/* STRATEGIC SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <Link
          href={`/${lang}/projects`}
          className="group p-8 rounded-3xl bg-white dark:bg-[#112240] border border-slate-200/50 dark:border-[#233554] hover:border-blue-500/50 transition-all hover:shadow-xl dark:hover:shadow-blue-900/10"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
            💻
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            {dict.landing.card1Title}
          </h3>
          <p className="text-slate-600 dark:text-[#8892B0] leading-relaxed">
            {dict.landing.card1Sub}
          </p>
        </Link>

        <Link
          href={`/${lang}/hobbies`}
          className="group p-8 rounded-3xl bg-white dark:bg-[#112240] border border-slate-200/50 dark:border-[#233554] hover:border-blue-500/50 transition-all hover:shadow-xl dark:hover:shadow-blue-900/10"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
            🎮
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            {dict.landing.card2Title}
          </h3>
          <p className="text-slate-600 dark:text-[#8892B0] leading-relaxed">
            {dict.landing.card2Sub}
          </p>
        </Link>

        <Link
          href={`/${lang}/education`}
          className="group p-8 rounded-3xl bg-white dark:bg-[#112240] border border-slate-200/50 dark:border-[#233554] hover:border-blue-500/50 transition-all hover:shadow-xl dark:hover:shadow-blue-900/10"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
            🎓
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            {dict.landing.card3Title}
          </h3>
          <p className="text-slate-600 dark:text-[#8892B0] leading-relaxed">
            {dict.landing.card3Sub}
          </p>
        </Link>
      </div>
    </main>
  );
}