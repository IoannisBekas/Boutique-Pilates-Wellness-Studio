import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { siteMetadata, studio } from "@/content/studio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: studio.name,
    template: `%s | ${studio.shortName}`,
  },
  description: siteMetadata.description,
  applicationName: studio.name,
  category: "health",
  keywords: [...siteMetadata.keywords],
  openGraph: {
    title: studio.name,
    description: siteMetadata.description,
    type: "website",
    locale: "en_US",
    siteName: studio.name,
  },
  twitter: {
    card: "summary_large_image",
    title: studio.name,
    description: siteMetadata.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-brand-beige text-brand-brown font-sans`}>
        {children}
      </body>
    </html>
  );
}
