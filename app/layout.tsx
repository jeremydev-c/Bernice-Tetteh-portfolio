import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Bernice Ayorkor Tetteh - Senior Fisheries Manager & Marine Data Analyst",
    template: "%s | Bernice Ayorkor Tetteh",
  },
  description: "Senior Fisheries Manager specializing in marine data analysis, VMS, AIS, and fisheries compliance. Expert in Power BI, Excel, AI, and marine data visualization.",
  keywords: [
    "fisheries manager",
    "marine data analyst",
    "VMS",
    "AIS",
    "fisheries compliance",
    "Power BI",
    "data visualization",
    "marine data",
    "Bernice Tetteh",
  ],
  authors: [{ name: "Bernice Ayorkor Tetteh" }],
  creator: "Bernice Ayorkor Tetteh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#14b8a6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <LoadingScreen />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
