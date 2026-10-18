import type { Metadata } from "next";
import { ActionHero } from "@/components/take-action/action-hero";
import { DonateSection } from "@/components/take-action/donate-section";
import { VolunteerSection } from "@/components/take-action/volunteer-section";

export const metadata: Metadata = {
  title: "Take Action | Heart of the City Development Center",
  description:
    "Donate online or with Cash App, or sign up to volunteer with Heart of the City Development Center in Saginaw.",
};

export default function TakeActionPage() {
  return (
    <main id="main-content">
      <ActionHero />
      <DonateSection />
      <VolunteerSection />
    </main>
  );
}
