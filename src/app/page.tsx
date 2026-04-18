import { getBioData } from "@/lib/markdown";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image"; // Importing Next's optimized Image component

export default function Home() {
  const { metadata, content } = getBioData();

  return (
    // Max width container for better reading
    <main className="max-w-4xl mx-auto py-24 px-6 md:px-12 bg-white dark:bg-black min-h-screen text-slate-800 dark:text-slate-200">
      {/* PROFESSIONAL HEADER LAYOUT */}
      <header className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-2">
            {metadata.name}
          </h1>
          <p className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            {metadata.title}
          </p>
          {/* Use your hometown Errachidia as well! */}
          <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center md:justify-start gap-2">
            📍 {metadata.location}
          </p>
        </div>

        {metadata.profileImage && (
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <Image
              src={metadata.profileImage}
              alt={metadata.name}
              fill
              // This tells the browser:
              // "On mobile, it's full width. On desktop, it's about 384px wide."
              sizes="(max-width: 768px) 100vw, 384px"
              className="rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl rotate-3 hover:rotate-0"
              priority
            />
          </div>
        )}
      </header>

      {/* RENDER THE MARKDOWN CONTENT */}
      {/* We use 'prose' (from Tailwind Typography) for automatic, beautiful styling */}
      <article
        className="prose prose-lg lg:prose-xl max-w-none prose-slate dark:prose-invert 
        prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400"
      >
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
