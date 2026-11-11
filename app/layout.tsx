import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "VIDHAAN | Creator & Brand Collaboration Agency",
    template: "%s | VIDHAAN",
  },
  description:
    "VIDHAAN structures creator-brand partnerships in India through creator management, brand outreach, campaign coordination and operational support.",
  applicationName: "VIDHAAN",
  openGraph: {
    type: "website",
    siteName: "VIDHAAN",
    title: "VIDHAAN | Creator & Brand Collaboration Agency",
    description: "A structured system for meaningful creator-brand partnerships.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#121212] text-[#F9F9F8] antialiased">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
  }
