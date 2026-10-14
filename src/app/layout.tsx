import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")),

  title: {
    default: "Nazneen Rizvi | Front-End Developer",
    template: "%s | Nazneen Rizvi",
  },
  

  description:
    "Front-End Developer specializing in Next.js, React, TypeScript and Tailwind CSS. Explore my portfolio, projects and contact me for freelance or full-time opportunities.",

  keywords: [
    "Nazneen Rizvi",
    "Frontend Developer",
    "Front-End Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Portfolio",
    "Web Developer",
  ],

  authors: [{ name: "Nazneen Rizvi" }],

  creator: "Nazneen Rizvi",

  openGraph: {
    title: "Nazneen Rizvi | Front-End Developer",
    description:
      "Explore my portfolio, projects and skills built with Next.js, React and TypeScript.",
    url: "/",
    siteName: "Nazneen Rizvi Portfolio",
    locale: "en_US",
    type: "website",
    images: [
  {
    url: "/projects/og-image.svg",
    width: 1200,
    height: 630,
    alt: "Nazneen Rizvi Portfolio",
  },
],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nazneen Rizvi | Front-End Developer",
    description:
      "Portfolio built using Next.js, React, TypeScript and Tailwind CSS.",
  },

  robots: {
    index: true,
    follow: true,
  },

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
       
      </body>
    </html>
  );
}
