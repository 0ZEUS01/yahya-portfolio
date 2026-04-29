import { getDictionary } from "@/dictionaries/dictionary";
import { FaGraduationCap, FaCertificate, FaAward } from "react-icons/fa";

export default async function EducationPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang as "en" | "fr";
  const dict = await getDictionary(lang);

  const education = [
    {
      year: "2022 — 2025",
      degree: dict.education.emsiDegree,
      institution: "EMSI Rabat",
      details: dict.education.emsiOption,
      icon: <FaGraduationCap />
    },
    {
      year: "2019 — 2022",
      degree: dict.education.istaDegree,
      institution: "ISTA Errachidia",
      icon: <FaGraduationCap />
    },
    {
      year: "2019",
      degree: dict.education.bacDegree,
      institution: "Lycée Iqraa 2 - Errachidia",
      details: dict.education.bacOption,
      icon: <FaAward />
    }
  ];

  const certifications = [
    { name: "Salesforce Certified Platform Developer I", issuer: "Salesforce", date: "2026" },
    { name: "Salesforce Certified Agentforce Specialist", issuer: "Salesforce", date: "2026" },
    { name: "Java and Object-Oriented Programming", issuer: "University of Pennsylvania", date: "2025" },
    { name: "Python for Everybody", issuer: "University of Michigan", date: "2024" }
  ];

  return (
    <main className="max-w-4xl mx-auto py-16 px-6 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
        {dict.education.title}
      </h1>
      <p className="text-slate-600 dark:text-[#8892B0] mb-12 text-lg">
        {dict.education.subtitle}
      </p>

      {/* ACADEMIC PATH */}
      <div className="space-y-8 mb-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
        {education.map((item, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Icon Circle */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0A192F] text-blue-600 dark:text-blue-400 z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm">
              {item.icon}
            </div>
            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-slate-200/50 dark:border-[#233554] bg-white dark:bg-[#112240] shadow-sm">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{item.year}</span>
              <h3 className="text-xl font-bold mt-1 text-slate-900 dark:text-white">{item.degree}</h3>
              <p className="text-slate-700 dark:text-[#CCD6F6] font-medium">{item.institution}</p>
              {item.details && <p className="text-sm text-slate-500 dark:text-[#8892B0] mt-2 italic">{item.details}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* CERTIFICATIONS GRID */}
      <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
        <FaCertificate className="text-blue-600" /> {dict.education.certTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, idx) => (
          <div key={idx} className="p-5 rounded-xl border border-slate-200 dark:border-[#233554] bg-slate-50/50 dark:bg-[#112240] hover:border-blue-500/50 transition-colors">
            <h4 className="font-bold text-slate-900 dark:text-white leading-tight">{cert.name}</h4>
            <div className="flex justify-between items-center mt-3">
              <span className="text-sm text-slate-600 dark:text-[#8892B0]">{cert.issuer}</span>
              <span className="text-xs font-mono bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                {cert.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}