import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${atkinson.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
