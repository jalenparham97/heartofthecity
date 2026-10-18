import type { Metadata } from "next";
import { DaySupport } from "@/components/store/day-support";
import { MerchGrid } from "@/components/store/merch-grid";
import { StoreHero } from "@/components/store/store-hero";

export const metadata: Metadata = {
  title: "Store | Heart of the City Development Center",
  description:
    "Heart of the City shirts, hoodies, tumblers and earrings, plus Adult Day Support payments.",
};

export default function StorePage() {
  return (
    <main id="main-content">
      <StoreHero />
      <MerchGrid />
      <DaySupport />
    </main>
  );
}
