import type { Metadata } from "next";
import { NotaryHero } from "@/components/notary/notary-hero";
import { NotarySection } from "@/components/notary/notary-section";

export const metadata: Metadata = {
  title: "Notary | Heart of the City Development Center",
  description:
    "Mobile notary services from Heart of the City Development Center in Saginaw. All revenue is donated to the center.",
};

export default function NotaryPage() {
  return (
    <main id="main-content">
      <NotaryHero />
      <NotarySection />
    </main>
  );
}
