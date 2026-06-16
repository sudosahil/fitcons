import type { Metadata } from "next";
import { Saira_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

// Condensed athletic display — sharp, sporty, high-adrenaline headlines
// (free commercial-OK stand-in for Sprintura)
const saira = Saira_Condensed({
  weight: ["600", "700", "800", "900"],
  variable: "--font-display-src",
  subsets: ["latin"],
  display: "swap",
});

// Neutral grotesque — body & UI
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Monospace — coded micro-labels (Garden "view-source" device)
const mono = JetBrains_Mono({
  weight: ["400", "500"],
  variable: "--font-mono-src",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://tusharmenath.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tushar Menath — Natural Physique Coaching",
    template: "%s | Tushar Menath",
  },
  description:
    "Personalized natural fitness coaching from Tushar Menath — ICN Classic & Men's Physique Champion 2025. Build muscle, lose fat, and create a physique that lasts. Apply for coaching today.",
  keywords: [
    "Tushar Menath",
    "natural bodybuilding coach",
    "online fitness coaching",
    "ICN Classic champion",
    "men's physique",
    "muscle building",
    "fat loss",
    "contest prep coach",
  ],
  openGraph: {
    title: "Tushar Menath — Natural Physique Coaching",
    description:
      "Transform your physique with ICN Classic & Men's Physique Champion 2025, Tushar Menath. I AM > I WAS.",
    url: SITE_URL,
    siteName: "Tushar Menath",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Menath — Natural Physique Coaching",
    description:
      "Build muscle, lose fat, and create a physique that lasts — naturally. Apply for coaching.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${saira.variable} ${inter.variable} ${mono.variable} h-full`}
    >
      <body className="grain min-h-full flex flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
