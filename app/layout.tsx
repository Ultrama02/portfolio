import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maximiliano-borgoglio.vercel.app/"),
  title: "Maximiliano Borgoglio — Full Stack Engineer",
  description:
    "Full Stack Engineer specialized in Next.js, FastAPI, and Google Cloud. 5+ years stabilizing and building production systems.",
  openGraph: {
    title: "Maximiliano Borgoglio — Full Stack Engineer",
    description:
      "Full Stack Engineer specialized in Next.js, FastAPI, and Google Cloud. 5+ years stabilizing and building production systems.",
    url: "https://maximiliano-borgoglio.vercel.app/", 
    siteName: "Maximiliano Borgoglio — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maximiliano Borgoglio — Full Stack Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximiliano Borgoglio — Full Stack Engineer",
    description:
      "Full Stack Engineer specialized in Next.js, FastAPI, and Google Cloud.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
