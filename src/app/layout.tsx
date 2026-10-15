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
    default: "Nazneen Rizvi | Full-Stack Web Developer",
    template: "%s | Nazneen Rizvi",
  },
  

  description:
    "Full-stack web developer building React and Next.js applications, Node.js and Express APIs, and e-commerce storefronts. Explore my projects and get in touch.",

  keywords: [
    "Nazneen Rizvi",
    "Full-Stack Web Developer",
    "E-commerce Developer",
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
    title: "Nazneen Rizvi | Full-Stack Web Developer",
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
    title: "Nazneen Rizvi | Full-Stack Web Developer",
    description:
      "Full-stack projects using React, Next.js, TypeScript, Node.js, Express and Tailwind CSS.",
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
