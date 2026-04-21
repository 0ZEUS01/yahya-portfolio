"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();

  // Determine the target language
  const targetLang = currentLang === 'en' ? 'fr' : 'en';

  // Replace the current language folder in the URL with the new one
  // Example: /en/projects -> /fr/projects
  const redirectTarget = pathname.replace(`/${currentLang}`, `/${targetLang}`);

  return (
    <Link
      href={redirectTarget}
      className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors font-bold text-sm uppercase"
      aria-label="Switch Language"
    >
      {targetLang}
    </Link>
  );
}