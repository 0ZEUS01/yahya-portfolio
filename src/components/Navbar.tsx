import Link from 'next/link';
import { getDictionary } from '@/dictionaries/dictionary';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

export default async function Navbar({ lang }: { lang: 'en' | 'fr' }) {
  const dict = await getDictionary(lang);
  const navbarDict = dict.navbar;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-300/50 dark:border-[#112240] bg-[#E6E4DC]/90 dark:bg-[#020C1B]/90 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href={`/${lang}`} className="font-bold text-xl tracking-tighter hover:text-blue-600 transition-colors">
          YZ<span className="text-blue-600">.</span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <Link href={`/${lang}`} className="hover:text-slate-950 dark:hover:text-white transition-colors">{dict.navbar.home}</Link>
            <Link href={`/${lang}/about`} className="hover:text-slate-950 dark:hover:text-white transition-colors">{dict.navbar.about}</Link>
            <Link href={`/${lang}/education`} className="hover:text-slate-950 dark:hover:text-white transition-colors">{dict.navbar.education}</Link>
            <Link href={`/${lang}/projects`} className="hover:text-slate-950 dark:hover:text-white transition-colors">{dict.navbar.projects}</Link>
            <Link href={`/${lang}/hobbies`} className="hover:text-slate-950 dark:hover:text-white transition-colors">{dict.navbar.hobbies}</Link>
            <Link href={`/${lang}/contact`} className="hover:text-slate-950 dark:hover:text-white transition-colors">{dict.navbar.contact}</Link>
          </div>
          
          {/* 3. Add the Switcher here */}
          <LanguageSwitcher currentLang={lang} />
          <MobileMenu lang={lang} dict={navbarDict} />
        </div>

      </div>
    </nav>
  );
}