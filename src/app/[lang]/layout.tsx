import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css"; 
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yahya Zini | State Software Engineer",
  description: "Software Engineer portfolio of Yahya Zini.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>; // FIX: Changed to string
}>) {
  const resolvedParams = await params;
  // Safely tell TypeScript we know this is either 'en' or 'fr'
  const lang = resolvedParams.lang as 'en' | 'fr';

  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <Navbar lang={lang} />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}