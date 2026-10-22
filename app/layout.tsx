
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "../components/SiteHeader.css";



const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PROSIGHT™ | Enterprise AI Value",
  description:
    "PROSIGHT™ combines AI practitioner expertise with prescriptive frameworks to turn AI ambition into sustainable business value.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
