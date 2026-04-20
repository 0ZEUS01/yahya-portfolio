import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-black/70 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="font-bold text-xl tracking-tighter hover:text-blue-600 transition-colors"
        >
          YZ<span className="text-blue-600">.</span>
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <Link
            href="/"
            className="hover:text-slate-950 dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-slate-950 dark:hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/hobbies"
            className="hover:text-slate-950 dark:hover:text-white transition-colors"
          >
            Hobbies
          </Link>
          <Link
            href="/contact"
            className="hover:text-slate-950 dark:hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
