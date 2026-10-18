import type { Metadata } from "next";
import { SponsorHero } from "@/components/sponsor/sponsor-hero";
import { SponsorSection } from "@/components/sponsor/sponsor-section";

export const metadata: Metadata = {
  title: "Sponsor | Heart of the City Development Center",
  description:
    "Sponsor Heart of the City Development Center in Saginaw with a cash gift or an in-kind donation.",
};

export default function SponsorPage() {
  return (
    <main id="main-content">
      <SponsorHero />
      <SponsorSection />
    </main>
  );
}
