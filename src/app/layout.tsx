import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/ui/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdellah Jouider — Full Stack Developer & Product Builder",
  description:
    "I build tools that find your next clients. Full Stack Developer based in Casablanca, specializing in React, Node.js, Laravel and automation.",
  keywords: ["full stack developer", "Casablanca", "React", "Node.js", "Laravel", "automation", "prospecting"],
  openGraph: {
    title: "Abdellah Jouider — Full Stack Developer & Product Builder",
    description: "I build tools that find your next clients.",
    url: "https://jouider.dev",
    siteName: "Abdellah Jouider",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased" style={{ fontFamily: "var(--font-geist-sans, system-ui, sans-serif)" }}>
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
