export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">Let's Connect</h1>
      <div className="p-8 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800">
        <p className="text-lg mb-6">
          I'm always open to discussing new projects, Salesforce opportunities,
          or just chatting about technology.
        </p>
        <div className="space-y-4">
          <p className="flex items-center gap-4 text-xl">
            📧 <span className="font-medium">yahya.zini@email.com</span>
          </p>
          <p className="flex items-center gap-4 text-xl">
            💼{" "}
            <span className="font-medium underline hover:text-blue-600 cursor-pointer">
              LinkedIn Profile
            </span>
          </p>
          <p className="flex items-center gap-4 text-xl">
            ⚽{" "}
            <span className="font-medium text-slate-500 italic">
              Available for a football match in Rabat!
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
