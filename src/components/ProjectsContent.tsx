"use client";

import { useState, useEffect } from "react";
import MediaCarousel from "@/components/MediaCarousel";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";
import { Project } from "@/lib/markdown";
import { marked } from "marked";

export default function ProjectsContent({
  projects,
  lang,
}: {
  projects: Project[];
  lang: string;
}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [htmlContent, setHtmlContent] = useState("");

  // 🚨 FIXED: Handled the marked.parse Promise properly to remove IDE errors
  useEffect(() => {
    const parseMarkdown = async () => {
      if (selectedProject) {
        // marked.parse can be async, so we await it safely
        const parsed = await marked.parse(selectedProject.content || "");
        setHtmlContent(parsed);
        document.body.style.overflow = "hidden";
      } else {
        setHtmlContent("");
        document.body.style.overflow = "unset";
      }
    };

    parseMarkdown();
  }, [selectedProject]);

  const featuredProjects = projects.filter((p) => p.metadata.featured === true);
  const otherProjects = projects.filter((p) => p.metadata.featured !== true);

  const renderProjectCard = (project: Project, isFeatured: boolean) => {
    const techArray =
      project.metadata.tech?.split(",").map((t: string) => t.trim()) || [];
    const mediaArray =
      project.metadata.media?.split(",").map((m: string) => m.trim()) || [];

    return (
      <div
        key={project.slug}
        className={`flex flex-col ${isFeatured ? "lg:flex-row-reverse" : ""} rounded-3xl border border-slate-200/50 dark:border-[#233554] bg-white dark:bg-[#112240] overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full`}
      >
        {/* MEDIA SECTION */}
        {mediaArray.length > 0 && (
          <div
            className={`${isFeatured ? "lg:w-1/2 min-h-[350px]" : "w-full h-64"} relative shrink-0`}
          >
            <MediaCarousel
              media={mediaArray}
              alt={project.metadata.title}
              objectFit="object-contain"
              enableBlurBg={true}
              containerClassName="absolute inset-0 w-full h-full"
            />
          </div>
        )}

        {/* CONTENT SECTION */}
        <div
          className={`relative p-6 md:p-8 flex flex-col flex-grow ${isFeatured ? "lg:w-1/2 justify-center" : ""}`}
        >
          {project.metadata.logo && (
            <div className="absolute top-6 right-8 w-12 h-12 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white p-1 shadow-xl z-10">
              <Image
                src={project.metadata.logo}
                alt="Company Logo"
                width={48}
                height={48}
                className="object-contain w-full h-full"
              />
            </div>
          )}

          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {project.metadata.type}
            </span>
            <h2 className="text-2xl font-bold mt-1 pr-14 text-slate-900 dark:text-white">
              {project.metadata.title}
            </h2>

            <p className="text-slate-600 dark:text-[#8892B0] mt-4 line-clamp-3 leading-relaxed">
              {project.metadata.shortDescription || project.content}
            </p>

            <button
              onClick={() => setSelectedProject(project)}
              className="mt-4 text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 hover:underline transition-all"
            >
              <FaInfoCircle /> {lang === "en" ? "Read More" : "Voir Détails"}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-[#233554] mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {techArray.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 dark:bg-[#020C1B] border border-slate-200 dark:border-[#233554] rounded-full text-xs font-semibold text-slate-700 dark:text-[#CCD6F6]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.metadata.github && (
                <a
                  href={project.metadata.github}
                  target="_blank"
                  className="text-slate-700 dark:text-[#CCD6F6] hover:text-blue-600 flex items-center gap-2 text-sm font-bold"
                >
                  <FaGithub size={18} /> Code
                </a>
              )}
              {project.metadata.demo && (
                <a
                  href={project.metadata.demo}
                  target="_blank"
                  className="text-slate-700 dark:text-[#CCD6F6] hover:text-blue-600 flex items-center gap-2 text-sm font-bold"
                >
                  <FaExternalLinkAlt size={16} /> Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* FEATURED PROJECTS */}
      <section className="grid grid-cols-1 gap-10">
        {featuredProjects.map((p) => renderProjectCard(p, true))}
      </section>

      {/* OTHER PROJECTS */}
      {otherProjects.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white opacity-80 border-b border-slate-800 pb-4">
            {lang === "en" ? "Other Projects" : "Autres Projets"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((p) => renderProjectCard(p, false))}
          </div>
        </section>
      )}

      {/* DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div
            className="absolute inset-0"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="bg-white dark:bg-[#112240] max-w-6xl w-full rounded-3xl shadow-2xl max-h-[90vh] flex flex-col lg:flex-row overflow-hidden relative animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-slate-900/50 hover:bg-slate-900 text-white rounded-full transition-colors"
            >
              <FaTimes size={18} />
            </button>

            {/* LEFT: Media Carousel */}
            {(() => {
              const modalMediaArray =
                selectedProject.metadata.media
                  ?.split(",")
                  .map((m) => m.trim()) || [];
              return modalMediaArray.length > 0 ? (
                <div className="w-full lg:w-1/2 bg-slate-100 dark:bg-[#020C1B] min-h-[350px] lg:min-h-full relative shrink-0">
                  <MediaCarousel
                    media={modalMediaArray}
                    alt={selectedProject.metadata.title}
                    objectFit="object-contain"
                    enableBlurBg={true}
                    containerClassName="absolute inset-0 w-full h-full p-4 md:p-8"
                  />
                </div>
              ) : null;
            })()}

            {/* RIGHT: Styled Content */}
            <div
              className={`w-full ${selectedProject.metadata.media ? "lg:w-1/2" : "w-full"} p-8 lg:p-12 overflow-y-auto custom-scrollbar`}
            >
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {selectedProject.metadata.type}
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-8 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">
                {selectedProject.metadata.title}
              </h2>

              {/* RENDERED MARKDOWN CONTENT */}
              <article
                className="prose prose-slate dark:prose-invert max-w-none 
                  prose-h3:text-xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-slate-900 dark:prose-h3:text-white
                  prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-6
                  prose-li:text-slate-600 dark:prose-li:text-slate-400 prose-li:mb-1"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* TECH STACK FOOTER */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                  Technical Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.metadata.tech?.split(",").map((t, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-xl text-sm font-bold border border-blue-100 dark:border-blue-900/30"
                    >
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
