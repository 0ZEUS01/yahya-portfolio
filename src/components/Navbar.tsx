import Link from 'next/link';
import { getDictionary } from '@/dictionaries/dictionary';
import LanguageSwitcher from './LanguageSwitcher';

// 1. Make the component async and accept the 'lang' prop
export default async function Navbar({ lang }: { lang: 'en' | 'fr' }) {
  // 2. Fetch the correct dictionary based on the language
  const dict = await getDictionary(lang);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-black/70 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href={`/${lang}`} className="font-bold text-xl tracking-tighter hover:text-blue-600 transition-colors">
          YZ<span className="text-blue-600">.</span>
        </Link>

        <div className="flex items-center gap-6">
          {/* Links (Now using the dictionary and the dynamic lang URL) */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <Link href={`/${lang}`} className="hover:text-slate-950 dark:hover:text-white transition-colors">{dict.navbar.home}</Link>
            <Link href={`/${lang}/projects`} className="hover:text-slate-950 dark:hover:text-white transition-colors">{dict.navbar.projects}</Link>
            <Link href={`/${lang}/hobbies`} className="hover:text-slate-950 dark:hover:text-white transition-colors">{dict.navbar.hobbies}</Link>
            <Link href={`/${lang}/contact`} className="hover:text-slate-950 dark:hover:text-white transition-colors">{dict.navbar.contact}</Link>
          </div>
          
          {/* 3. Add the Switcher here */}
          <LanguageSwitcher currentLang={lang} />
        </div>

      </div>
    </nav>
  );
}