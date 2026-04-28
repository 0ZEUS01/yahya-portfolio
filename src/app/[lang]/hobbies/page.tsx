import { getDictionary } from "@/dictionaries/dictionary";
import MediaCarousel from "@/components/MediaCarousel";

export default async function HobbiesPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "fr";
  const dict = await getDictionary(lang);

  return (
    <main className="max-w-5xl mx-auto py-16 px-6 min-h-screen">
      {/* HEADER SECTION */}
      <div className="text-center md:text-left mb-16 border-b border-slate-200/50 dark:border-[#233554] pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight">
          {dict.hobbies.title}
        </h1>
        <p className="text-xl text-slate-600 dark:text-[#8892B0] max-w-2xl">
          {dict.hobbies.subtitle}
        </p>
      </div>

      {/* SECTION 1: COMMUNITY & ACHIEVEMENTS */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
          <span className="text-blue-600 dark:text-blue-400">🌍</span>{" "}
          {dict.hobbies.commTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* North Africa Dreamin */}
          <div className="flex flex-col rounded-3xl bg-white dark:bg-[#112240] border border-slate-200/50 dark:border-[#233554] shadow-sm hover:shadow-md transition-all group overflow-hidden">
            <MediaCarousel
              media={["/nad-1.jpg", "/nad-2.jpg"]}
              alt="Hackathon Winner"
              objectFit="object-contain"
              enableBlurBg={true}
            />
            <div className="p-8 flex-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">
                Hackathon
              </span>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {dict.hobbies.nadTitle}
              </h3>
              <p className="text-slate-600 dark:text-[#8892B0] leading-relaxed">
                {dict.hobbies.nadDesc}
              </p>
            </div>
          </div>

          {/* GITEX Africa */}
          <div className="flex flex-col rounded-3xl bg-white dark:bg-[#112240] border border-slate-200/50 dark:border-[#233554] shadow-sm hover:shadow-md transition-all group overflow-hidden">
            <MediaCarousel
              media={[
                "/gitex-1.jpg",
                "/gitex-2.jpg",
                "https://res.cloudinary.com/dpwzye1tt/video/upload/gitex-3_ym9sll.mp4",
              ]}
              alt="GITEX Africa"
              imagePosition="object-top"
              objectFit="object-contain"
              enableBlurBg={true}
            />
            <div className="p-8 flex-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">
                Conference
              </span>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {dict.hobbies.gitexTitle}
              </h3>
              <p className="text-slate-600 dark:text-[#8892B0] leading-relaxed">
                {dict.hobbies.gitexDesc}
              </p>
            </div>
          </div>

          {/* Salesforce Developer Community */}
          <div className="flex flex-col rounded-3xl bg-white dark:bg-[#112240] border border-slate-200/50 dark:border-[#233554] shadow-sm hover:shadow-md transition-all group overflow-hidden">
            <MediaCarousel
              media={["/sf-community-1.jpg", "/sf-community-2.jpg"]}
              alt="Salesforce Community"
              objectFit="object-contain"
              enableBlurBg={true}
            />
            <div className="p-8 flex-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">
                Networking
              </span>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {dict.hobbies.sfTitle}
              </h3>
              <p className="text-slate-600 dark:text-[#8892B0] leading-relaxed">
                {dict.hobbies.sfDesc}
              </p>
            </div>
          </div>

          {/* ENACTUS EMSI */}
          <div className="flex flex-col rounded-3xl bg-white dark:bg-[#112240] border border-slate-200/50 dark:border-[#233554] shadow-sm hover:shadow-md transition-all group overflow-hidden">
            <MediaCarousel
              media={["/enactus-2.jpg"]}
              alt="ENACTUS Team"
              objectFit="object-contain"
              enableBlurBg={true}
            />
            <div className="p-8 flex-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">
                Leadership
              </span>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {dict.hobbies.enactusTitle}
              </h3>
              <p className="text-slate-600 dark:text-[#8892B0] leading-relaxed">
                {dict.hobbies.enactusDesc}
              </p>
            </div>
          </div>

          {/* AMPC Competition */}
          <div className="flex flex-col rounded-3xl bg-white dark:bg-[#112240] border border-slate-200/50 dark:border-[#233554] shadow-sm hover:shadow-md transition-all group overflow-hidden">
            <MediaCarousel
              media={["/ampc-1.jpg", "/ampc-2.jpg", "/ampc-3.jpg"]}
              alt="AMPC Competition Meknes"
              imagePosition="object-top"
              objectFit="object-contain"
              enableBlurBg={true}
            />
            <div className="p-8 flex-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">
                Programming
              </span>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                {dict.hobbies.ampcTitle}
              </h3>
              <p className="text-slate-600 dark:text-[#8892B0] leading-relaxed">
                {dict.hobbies.ampcDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PERSONAL INTERESTS */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
          <span className="text-blue-600 dark:text-blue-400">⚡</span>{" "}
          {dict.hobbies.personalTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-[#233554]">
            <span className="text-3xl block mb-3">🎮</span>
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
              {dict.hobbies.gamingTitle}
            </h3>
            <p className="text-sm text-slate-600 dark:text-[#8892B0]">
              {dict.hobbies.gamingDesc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-[#233554]">
            <span className="text-3xl block mb-3">🏀</span>
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
              {dict.hobbies.sportsTitle}
            </h3>
            <p className="text-sm text-slate-600 dark:text-[#8892B0]">
              {dict.hobbies.sportsDesc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-[#233554]">
            <span className="text-3xl block mb-3">🔧</span>
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
              {dict.hobbies.practicalTitle}
            </h3>
            <p className="text-sm text-slate-600 dark:text-[#8892B0]">
              {dict.hobbies.practicalDesc}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
