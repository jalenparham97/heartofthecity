import type { Metadata } from "next";
import { AboutDifference } from "@/components/about/about-difference";
import { AboutFounder } from "@/components/about/about-founder";
import { AboutHero } from "@/components/about/about-hero";
import { AboutMission } from "@/components/about/about-mission";
import { AboutVisit } from "@/components/about/about-visit";

export const metadata: Metadata = {
  title: "About | Heart of the City Development Center",
  description:
    "Our mission, what sets our day program apart, and the story of our president, Cherie Long.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutHero />
      <AboutMission />
      <AboutDifference />
      <AboutFounder />
      <AboutVisit />
    </main>
  );
}
