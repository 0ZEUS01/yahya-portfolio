export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* We will later automate this to read all files in /content/projects */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
          <span className="text-xs font-bold text-blue-600 uppercase">
            Salesforce
          </span>
          <h2 className="text-xl font-bold mt-2">ARKx Assurance</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Insurance claim automation and LWC development.
          </p>
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">
              Apex
            </span>
            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">
              LWC
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}