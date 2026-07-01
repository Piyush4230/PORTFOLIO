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
  title: "Piyush Kumar | Aspiring Software Engineer",
  description:
    "Portfolio of Piyush Kumar, a Computer Science student at Maharaja Agrasen Institute of Technology (MAIT), showcasing projects, skills, and experience in Full Stack Development and Artificial Intelligence.",
  keywords: [
    "Piyush Kumar",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Artificial Intelligence",
    "MAIT",
  ],
  authors: [{ name: "Piyush Kumar" }],
  creator: "Piyush Kumar",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
