import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://kaustubhkhandale.github.io/wp-graphql-toolkit-website/",
  ),
  title: "WP GraphQL Toolkit | Build Headless WordPress Faster",
  description:
    "Build, preview, save, and export production-ready WPGraphQL queries visually.",
  authors: [
    {
      name: "Kaustubh Khandale",
      url: "https://github.com/kaustubhkhandale",
    },
  ],
  creator: "Kaustubh Khandale",
  publisher: "WP GraphQL Toolkit",
  openGraph: {
    title: "WP GraphQL Toolkit | Build Headless WordPress Faster",
    description:
      "Build, preview, save, and export production-ready WPGraphQL queries visually.",
    type: "article",
    publishedTime: "2026-06-10T07:01:39.000Z",
    authors: ["Kaustubh Khandale"],
  },
  twitter: {
    card: "summary_large_image",
    title: "WP GraphQL Toolkit | Build Headless WordPress Faster",
    description:
      "Build, preview, save, and export production-ready WPGraphQL queries visually.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-LH2GCM68H1" />
    </html>
  );
}
