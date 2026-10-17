import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next, Geist_Mono } from "next/font/google";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible_Next({
  variable: "--font-atkinson",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heart of the City Development Center | Saginaw, MI",
  description:
    "A place to learn, grow, and belong. Heart of the City Development Center supports adults with intellectual and developmental disabilities in Saginaw County, Michigan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${atkinson.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
