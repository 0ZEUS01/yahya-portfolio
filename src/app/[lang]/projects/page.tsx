import { getProjectsData } from '@/lib/markdown';

export default async function ProjectsPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang as 'en' | 'fr';
  const projects = getProjectsData(lang);

  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
        {lang === 'en' ? 'Projects' : 'Projets'}
      </h1>
      
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div key={project.slug} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow bg-white dark:bg-slate-900">
            <span className="text-xs font-bold text-blue-600 uppercase">{project.metadata.type}</span>
            <h2 className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">{project.metadata.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 mb-4 whitespace-pre-wrap">
              {project.content}
            </p>
            <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-sm font-medium text-slate-700 dark:text-slate-300">
              ⚙️ {project.metadata.tech}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}