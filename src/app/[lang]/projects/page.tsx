import { getProjectsData } from "@/lib/markdown";
import Image from "next/image";

export default async function ProjectsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "fr";
  const projects = getProjectsData(lang);

  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
        {lang === "en" ? "Projects" : "Projets"}
      </h1>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="p-6 rounded-2xl border border-slate-200/50 dark:border-[#233554] hover:shadow-lg transition-all bg-white dark:bg-[#112240] group"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {project.metadata.type}
                </span>
                <h2 className="text-2xl font-bold mt-1 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.metadata.title}
                </h2>
              </div>

              {project.metadata.logo && (
                <div className="relative w-14 h-14 flex-shrink-0 bg-white rounded-xl border border-slate-200 dark:border-[#233554] shadow-sm ml-4 overflow-hidden">
                  <Image
                    src={project.metadata.logo}
                    alt={`${project.metadata.title} logo`}
                    width={56}
                    height={56}
                    className="object-contain p-2 w-full h-full"
                  />
                </div>
              )}
            </div>

            <p className="text-slate-600 dark:text-[#8892B0] mb-6 whitespace-pre-wrap leading-relaxed">
              {project.content}
            </p>

            <div className="inline-block px-3 py-1.5 bg-slate-50 dark:bg-[#020C1B] border border-slate-200 dark:border-[#233554] rounded-lg text-sm font-medium text-slate-700 dark:text-[#CCD6F6]">
              ⚙️ {project.metadata.tech}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
