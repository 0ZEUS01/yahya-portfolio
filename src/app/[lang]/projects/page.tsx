import { getProjectsData } from "@/lib/markdown";
import ProjectsContent from "@/components/ProjectsContent";

export default async function ProjectsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang as "en" | "fr";
  
  const projects = getProjectsData(lang);

  return (
    <main className="max-w-5xl mx-auto py-16 px-6 min-h-screen">
      <header className="mb-16 border-b border-slate-200/50 dark:border-[#233554] pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {lang === "en" ? "Projects Portfolio" : "Portfolio de Projets"}
        </h1>
        <p className="text-xl text-slate-600 dark:text-[#8892B0] mt-4">
          {lang === "en" 
            ? "A showcase of engineering solutions and Salesforce implementations." 
            : "Une vitrine de solutions d'ingénierie et d'implémentations Salesforce."}
        </p>
      </header>

      <ProjectsContent projects={projects} lang={lang} />
    </main>
  );
}