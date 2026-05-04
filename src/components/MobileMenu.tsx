"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavbarDict } from "@/lib/markdown"; 

export default function MobileMenu({ lang, dict }: { lang: string; dict: NavbarDict }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: dict.home, path: "" },
    { name: dict.about, path: "/about" },
    { name: dict.education, path: "/education" },
    { name: dict.projects, path: "/projects" },
    { name: dict.hobbies, path: "/hobbies" },
    { name: dict.contact, path: "/contact" },
    { name: dict.navGuestbook, path: "/guestbook" },
  ];

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 text-slate-600 dark:text-slate-400 text-xl focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#E6E4DC] dark:bg-[#020C1B] border-b border-slate-300/50 dark:border-[#112240] flex flex-col p-6 gap-4 z-[100] shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={`/${lang}${link.path}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}