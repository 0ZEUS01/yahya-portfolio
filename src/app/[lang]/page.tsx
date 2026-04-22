import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '@/dictionaries/dictionary';

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang as 'en' | 'fr';
  const dict = await getDictionary(lang);

  return (
    <main className="max-w-5xl mx-auto py-12 md:py-24 px-6 min-h-screen flex flex-col justify-center">
      
      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
        
        {/* Left: Text & Call to Actions */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm border border-blue-200 dark:border-blue-800">
            👋 {dict.landing.badge}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white leading-tight">
            {dict.landing.heroTitle}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-[#8892B0] mb-8 leading-relaxed max-w-2xl">
            {dict.landing.heroSub}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href={`/${lang}/projects`} 
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all text-center shadow-lg hover:shadow-blue-600/25 hover:-translate-y-1"
            >
              {dict.landing.btnProjects}
            </Link>
            <Link 
              href={`/${lang}/about`} 
              className="px-8 py-4 rounded-xl bg-slate-200 dark:bg-[#112240] hover:bg-slate-300 dark:hover:bg-[#233554] text-slate-900 dark:text-white font-bold transition-all text-center border border-slate-300 dark:border-[#233554]"
            >
              {dict.landing.btnAbout}
            </Link>
          </div>
        </div>

        {/* Right: The "Funny/Friendly" Image */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 group perspective-1000">
          <div className="absolute inset-0 bg-blue-500 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20 dark:opacity-40"></div>
          <Image
            src="/profile.jpg" // You can change this to a funnier picture in your public folder!
            alt="Yahya Zini"
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="rounded-3xl object-cover shadow-2xl -rotate-3 group-hover:rotate-0 transition-all duration-500 border-4 border-white dark:border-[#020C1B]"
            priority
          />
        </div>
      </div>

      {/* QUICK SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href={`/${lang}/projects`} className="p-6 rounded-2xl bg-white dark:bg-[#112240] border border-slate-200/50 dark:border-[#233554] hover:-translate-y-2 transition-transform group">
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">💻</div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{dict.landing.card1Title}</h3>
          <p className="text-slate-600 dark:text-[#8892B0]">{dict.landing.card1Sub}</p>
        </Link>
        
        <Link href={`/${lang}/hobbies`} className="p-6 rounded-2xl bg-white dark:bg-[#112240] border border-slate-200/50 dark:border-[#233554] hover:-translate-y-2 transition-transform group">
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">🎮</div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{dict.landing.card2Title}</h3>
          <p className="text-slate-600 dark:text-[#8892B0]">{dict.landing.card2Sub}</p>
        </Link>

        <Link href={`/${lang}/contact`} className="p-6 rounded-2xl bg-white dark:bg-[#112240] border border-slate-200/50 dark:border-[#233554] hover:-translate-y-2 transition-transform group">
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">📍</div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{dict.landing.card3Title}</h3>
          <p className="text-slate-600 dark:text-[#8892B0]">{dict.landing.card3Sub}</p>
        </Link>
      </div>

    </main>
  );
}