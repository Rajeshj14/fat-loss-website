import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import MobileActionBar from "@/component/fat-mobile-action-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swakaaya Fat Loss",
  description: "Get the Body You Deserve Science-Backed Weight Loss in Gurgaon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${outfit.variable} antialiased`}
      >
        {children}
        <MobileActionBar/>
      </body>
    </html>)
}
