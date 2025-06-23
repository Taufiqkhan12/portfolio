import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taufiq Khan – Full-Stack Developer",
  description:
    "I'm Taufiq Khan, a full-stack web developer building modern, fast, and scalable web applications using MERN stack, Next.js, and TypeScript.",
  authors: [{ name: "Taufiq Khan", url: "https://yourdomain.com" }],
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "MERN Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
  ],
  creator: "Taufiq Khan",
  publisher: "Taufiq Khan",
  robots: "index, follow",
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
