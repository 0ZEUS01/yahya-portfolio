import { getBioData } from '@/lib/markdown';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

// Accept the params from Next.js (Promise in Next 16+)
export default async function AboutPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang as 'en' | 'fr';

  const { metadata, content } = getBioData(lang);

  return (
    <main className="max-w-4xl mx-auto py-16 px-6 min-h-screen">
      <header className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 pb-12 border-b border-slate-200 dark:border-slate-800">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-slate-950 dark:text-white">
            {metadata.name}
          </h1>
          <p className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            {metadata.title}
          </p>
          <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center md:justify-start gap-2">
            📍 {metadata.location}
          </p>
        </div>

        {metadata.profileImage && (
          <div className="order-1 md:order-2 relative w-48 h-48 md:w-56 md:h-56">
            <Image
              src={metadata.profileImage}
              alt={`${metadata.name}'s profile picture`}
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl rotate-3 hover:rotate-0"
              priority
            />
          </div>
        )}
      </header>

      <article className="prose prose-lg lg:prose-xl max-w-none prose-slate dark:prose-invert 
        prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}