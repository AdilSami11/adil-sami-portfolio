import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adil Sami | Full-Stack Developer",
  description:
    "Adil Sami is a Software Engineering student and Full-Stack Developer focused on building modern, responsive web applications using React, Next.js, Node.js and MongoDB.",
  keywords: [
    "Adil Sami",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Software Engineering Student",
    "MERN Stack Developer",
  ],
  authors: [{ name: "Adil Sami" }],
  creator: "Adil Sami",
  openGraph: {
    title: "Adil Sami | Full-Stack Developer",
    description:
      "Explore my projects, technical skills and journey as a Full-Stack Developer.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
