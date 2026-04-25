import { getDictionary } from '@/dictionaries/dictionary';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';

export default async function ContactPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang as 'en' | 'fr';
  const dict = await getDictionary(lang);

  return (
    <main className="max-w-5xl mx-auto py-16 px-6 min-h-screen">
      
      {/* HEADER */}
      <div className="text-center md:text-left mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">
          {dict.contact.title}
        </h1>
        <p className="text-xl text-slate-600 dark:text-[#8892B0] max-w-2xl leading-relaxed">
          {dict.contact.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* CARD 1: Professional Network (Engineer) */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#112240] border border-slate-200/50 dark:border-[#233554] shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-[#233554] pb-4">
            💼 {dict.contact.profTitle}
          </h2>
          
          <div className="space-y-6">
            <a href="tel:+212636707608" className="flex items-center gap-4 text-lg text-slate-700 dark:text-[#CCD6F6] hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#020C1B] border border-slate-100 dark:border-[#233554] text-slate-500 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <FaPhoneAlt size={20} />
              </div>
              <span className="font-medium">{dict.contact.phone}</span>
            </a>

            <a href={`mailto:${dict.contact.email}`} className="flex items-center gap-4 text-lg text-slate-700 dark:text-[#CCD6F6] hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#020C1B] border border-slate-100 dark:border-[#233554] text-slate-500 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <FaEnvelope size={20} />
              </div>
              <span className="font-medium">{dict.contact.email}</span>
            </a>
            
            <a href="https://linkedin.com/in/yahya-zini" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-slate-700 dark:text-[#CCD6F6] hover:text-[#0A66C2] dark:hover:text-[#318CE7] transition-colors group">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#020C1B] border border-slate-100 dark:border-[#233554] text-slate-500 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-[#0A66C2] dark:group-hover:text-[#318CE7] transition-colors">
                <FaLinkedin size={20} />
              </div>
              <span className="font-medium">{dict.contact.linkedin}</span>
            </a>

            <a href="https://github.com/0ZEUS01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-slate-700 dark:text-[#CCD6F6] hover:text-slate-900 dark:hover:text-white transition-colors group">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#020C1B] border border-slate-100 dark:border-[#233554] text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-800 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                <FaGithub size={20} />
              </div>
              <span className="font-medium">{dict.contact.github}</span>
            </a>
          </div>
        </div>

        {/* CARD 2: Social & Community (Big Man) */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#112240] border border-slate-200/50 dark:border-[#233554] shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-[#233554] pb-4">
            🎮 {dict.contact.socialTitle}
          </h2>
          
          <div className="space-y-6">
            <a href="https://www.youtube.com/@BIG_MAN0_01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-slate-700 dark:text-[#CCD6F6] hover:text-[#FF0000] transition-colors group">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#020C1B] border border-slate-100 dark:border-[#233554] text-slate-500 dark:text-slate-400 group-hover:bg-red-50 dark:group-hover:bg-red-900/30 group-hover:text-[#FF0000] transition-colors">
                <FaYoutube size={20} />
              </div>
              <span className="font-medium">{dict.contact.youtube}</span>
            </a>

            <a href="https://www.tiktok.com/@big_man0_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-slate-700 dark:text-[#CCD6F6] hover:text-slate-900 dark:hover:text-white transition-colors group">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#020C1B] border border-slate-100 dark:border-[#233554] text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-800 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                <FaTiktok size={20} />
              </div>
              <span className="font-medium">{dict.contact.tiktok}</span>
            </a>

            {/* Big Man Instagram */}
            <a href="https://www.instagram.com/big_man0_01/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-slate-700 dark:text-[#CCD6F6] hover:text-[#E1306C] transition-colors group">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#020C1B] border border-slate-100 dark:border-[#233554] text-slate-500 dark:text-slate-400 group-hover:bg-pink-50 dark:group-hover:bg-pink-900/30 group-hover:text-[#E1306C] transition-colors">
                <FaInstagram size={20} />
              </div>
              <span className="font-medium">{dict.contact.instagramBigMan}</span>
            </a>

            {/* Personal Instagram */}
            <a href="https://www.instagram.com/ya1ya1z/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-slate-700 dark:text-[#CCD6F6] hover:text-[#E1306C] transition-colors group">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#020C1B] border border-slate-100 dark:border-[#233554] text-slate-500 dark:text-slate-400 group-hover:bg-pink-50 dark:group-hover:bg-pink-900/30 group-hover:text-[#E1306C] transition-colors">
                <FaInstagram size={20} />
              </div>
              <span className="font-medium">{dict.contact.instagramPersonal}</span>
            </a>
          </div>
        </div>

      </div>

    </main>
  );
}