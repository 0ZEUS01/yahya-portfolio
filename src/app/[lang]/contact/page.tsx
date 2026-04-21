import { getDictionary } from '@/dictionaries/dictionary';

export default async function ContactPage(props: { params: Promise<{ lang: 'en' | 'fr' }> }) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">{dict.contact.title}</h1>
      <div className="p-8 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800">
        <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
          {dict.contact.description}
        </p>
        <div className="space-y-4">
          <p className="flex items-center gap-4 text-xl text-slate-800 dark:text-slate-200">
            📧 <span className="font-medium">{dict.contact.email}</span>
          </p>
          <p className="flex items-center gap-4 text-xl text-slate-800 dark:text-slate-200">
            💼 <span className="font-medium underline hover:text-blue-600 cursor-pointer">{dict.contact.linkedin}</span>
          </p>
          <p className="flex items-center gap-4 text-xl text-slate-800 dark:text-slate-200">
            ⚽ <span className="font-medium text-slate-500 italic">{dict.contact.football}</span>
          </p>
        </div>
      </div>
    </main>
  );
}