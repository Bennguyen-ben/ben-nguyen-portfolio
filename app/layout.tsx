import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ben Nguyen | Digital Marketing & Content Portfolio",
  description:
    "Portfolio of Ben Nguyen, a Deakin University Bachelor of Business student focused on digital marketing, social media strategy, content creation and brand marketing.",
  keywords: [
    "Ben Nguyen",
    "digital marketing",
    "social media strategy",
    "content creation",
    "brand marketing",
    "Deakin University",
    "Melbourne",
    "portfolio",
  ],
  authors: [{ name: "Ben Nguyen" }],
  creator: "Ben Nguyen",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://bennguyen.com.au",
    siteName: "Ben Nguyen Portfolio",
    title: "Ben Nguyen | Digital Marketing & Content Portfolio",
    description:
      "Portfolio of Ben Nguyen — digital marketing, social media strategy, content creation and brand marketing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ben Nguyen — Digital Marketing & Content",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Nguyen | Digital Marketing & Content Portfolio",
    description:
      "Portfolio of Ben Nguyen — digital marketing, social media strategy, content creation and brand marketing.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
