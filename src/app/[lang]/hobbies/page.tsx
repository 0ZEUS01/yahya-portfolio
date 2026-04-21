export default function HobbiesPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">The Big Man Stream</h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
        Sharing gaming moments and building a community.
      </p>

      <div className="aspect-video w-full rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700">
        <p>Your Twitch/YouTube Embed or Stream Gallery goes here!</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <a href="#" className="p-4 bg-red-600 text-white rounded-xl font-bold">
          YouTube
        </a>
        <a
          href="#"
          className="p-4 bg-purple-600 text-white rounded-xl font-bold"
        >
          Kick
        </a>
        <a
          href="#"
          className="p-4 bg-slate-800 text-white rounded-xl font-bold"
        >
          TikTok
        </a>
      </div>
    </main>
  );
}
