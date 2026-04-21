import { getDictionary } from '@/dictionaries/dictionary';

export default async function HobbiesPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  
  const lang = params.lang as 'en' | 'fr';
  
  const dict = await getDictionary(lang);

  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">
          {dict.hobbies.title}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          {dict.hobbies.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 rounded-3xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30">
          <span className="text-3xl">⚽</span>
          <h2 className="text-2xl font-bold mt-4 mb-2 text-slate-900 dark:text-white">
            {dict.hobbies.footballTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {dict.hobbies.footballDesc}
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30">
          <span className="text-3xl">🎮</span>
          <h2 className="text-2xl font-bold mt-4 mb-2 text-slate-900 dark:text-white">
            {dict.hobbies.gamingTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {dict.hobbies.gamingDesc}
          </p>
        </div>
      </div>

      <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-10 text-white shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 text-center">
          {dict.hobbies.socials}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#" className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors">
            <span className="text-2xl mb-2">📺</span>
            <span className="font-semibold text-sm">YouTube</span>
          </a>
          <a href="#" className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors">
            <span className="text-2xl mb-2">💜</span>
            <span className="font-semibold text-sm">Kick</span>
          </a>
          <a href="#" className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors">
            <span className="text-2xl mb-2">📸</span>
            <span className="font-semibold text-sm">Instagram</span>
          </a>
          <a href="#" className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors">
            <span className="text-2xl mb-2">🎵</span>
            <span className="font-semibold text-sm">TikTok</span>
          </a>
        </div>
      </div>
      
    </main>
  );
}