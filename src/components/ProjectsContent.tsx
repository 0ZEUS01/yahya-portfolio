"use client";

import { useState } from "react";
import Image from "next/image";
import MediaCarousel from "@/components/MediaCarousel";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";
import { Project } from "@/lib/markdown";

export default function ProjectsContent({
  projects,
  lang,
}: {
  projects: Project[];
  lang: string;
}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
        className={`flex flex-col ${isFeatured ? "lg:flex-row" : ""} rounded-3xl border border-slate-200/50 dark:border-[#233554] bg-white dark:bg-[#112240] overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
      >
        <div
          className={`p-8 flex flex-col justify-between ${mediaArray.length > 0 && isFeatured ? "lg:w-1/2" : "w-full"}`}
        >
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {project.metadata.type}
            </span>
            <h2 className="text-2xl font-bold mt-1 text-slate-900 dark:text-white">
              {project.metadata.title}
            </h2>

            <p className="text-slate-600 dark:text-[#8892B0] mt-4 line-clamp-3 leading-relaxed">
              {project.content}
            </p>

            <button
              onClick={() => setSelectedProject(project)}
              className="mt-4 text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 hover:underline transition-all"
            >
              <FaInfoCircle /> {lang === "en" ? "Read More" : "Voir Détails"}
            </button>
          </div>

          <div className="mt-8">
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

        {mediaArray.length > 0 && isFeatured && (
          <div className="lg:w-1/2 min-h-[350px] relative">
            <MediaCarousel
              media={mediaArray}
              alt={project.metadata.title}
              objectFit="object-contain"
              enableBlurBg={true}
              containerClassName="absolute inset-0 w-full h-full"
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <section className="grid grid-cols-1 gap-10">
        {featuredProjects.map((p) => renderProjectCard(p, true))}
      </section>

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
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-[#112240] max-w-3xl w-full rounded-3xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
            >
              <FaTimes size={24} />
            </button>

            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              {selectedProject.metadata.type}
            </span>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-slate-900 dark:text-white">
              {selectedProject.metadata.title}
            </h2>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-[#8892B0] leading-relaxed whitespace-pre-wrap text-lg">
                {selectedProject.content}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.metadata.tech?.split(",").map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-bold"
                  >
                    {t.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
