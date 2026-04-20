import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Yahya Zini | State Software Engineer", // Professional Title
  description: "Software Engineer portfolio of Yahya Zini (Big Man).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#0a0a0a]">
        {/* 1. Add the Navbar here so it appears on all pages */}
        <Navbar /> 

        {/* 2. Wrap children in a div or main to handle layout spacing */}
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}