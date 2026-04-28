import { getProjectsData } from "@/lib/markdown";
import Image from "next/image";
import MediaCarousel from "@/components/MediaCarousel"; // 🚨 Reusing our awesome component!
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default async function ProjectsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "fr";
  const projects = getProjectsData(lang);

  return (
    <main className="max-w-5xl mx-auto py-16 px-6 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-slate-900 dark:text-white tracking-tight border-b border-slate-200/50 dark:border-[#233554] pb-6">
        {lang === "en" ? "Featured Projects" : "Projets Phares"}
      </h1>

      <div className="grid grid-cols-1 gap-10">
        {projects.map((project) => {
          const techArray = project.metadata.tech
            ? project.metadata.tech.split(",").map((t) => t.trim())
            : [];
          const mediaArray = project.metadata.media
            ? project.metadata.media.split(",").map((m) => m.trim())
            : [];

          return (
            <div
              key={project.slug}
              className="flex flex-col lg:flex-row gap-0 rounded-3xl border border-slate-200/50 dark:border-[#233554] shadow-sm hover:shadow-xl transition-all bg-white dark:bg-[#112240] overflow-hidden group"
            >
              {/* LEFT SIDE: Content & Info */}
              <div
                className={`p-8 flex flex-col justify-between ${mediaArray.length > 0 ? "lg:w-1/2" : "w-full"}`}
              >
                <div>
                  {/* Header Row: Title & Logo */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
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

                  <p className="text-slate-600 dark:text-[#8892B0] mb-8 whitespace-pre-wrap leading-relaxed">
                    {project.content}
                  </p>
                </div>

                {/* Footer: Tech Stack & Links */}
                <div>
                  {/* Styled Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {techArray.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 dark:bg-[#020C1B] border border-slate-200 dark:border-[#233554] rounded-full text-xs font-semibold text-slate-700 dark:text-[#CCD6F6]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links (Only render if they exist in markdown) */}
                  <div className="flex gap-4">
                    {project.metadata.github && (
                      <a
                        href={project.metadata.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-[#CCD6F6] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <FaGithub size={18} /> Code
                      </a>
                    )}
                    {project.metadata.demo && (
                      <a
                        href={project.metadata.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-[#CCD6F6] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <FaExternalLinkAlt size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Media Gallery */}
              {mediaArray.length > 0 && (
                <div className="lg:w-1/2 min-h-[400px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-slate-200/50 dark:border-[#233554] relative">
                  <MediaCarousel
                    media={mediaArray}
                    alt={project.metadata.title}
                    containerClassName="absolute inset-0 w-full h-full"
                    objectFit="object-contain"
                    enableBlurBg={true}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
