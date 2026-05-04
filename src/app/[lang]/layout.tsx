import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import FeedbackNudge from "@/components/testimonials/FeedbackNudge";

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
  params: Promise<{ lang: string }>;
}>) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as "en" | "fr";

  return (
    <html lang={lang}>
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dpwzye1tt/image/upload/v1777908432/gemini-svg_2_t39bor.svg"
          media="(prefers-color-scheme: light)"
          type="image/svg+xml"
        />

        <link
          rel="icon"
          href="https://res.cloudinary.com/dpwzye1tt/image/upload/v1777908435/gemini-svg_3_v75kgk.svg"
          media="(prefers-color-scheme: dark)"
          type="image/svg+xml"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col transition-colors duration-300`}
      >
        <Navbar lang={lang} />
        <div className="flex-1">{children}</div>
        <FeedbackNudge />
      </body>
    </html>
  );
}
