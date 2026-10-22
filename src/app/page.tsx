import { Community } from "@/components/home/community";
import { Founder } from "@/components/home/founder";
import { GetInvolved } from "@/components/home/get-involved";
import { HeartQuote } from "@/components/home/heart-quote";
import { Hero } from "@/components/home/hero";
import { Mission } from "@/components/home/mission";
import { Newsletter } from "@/components/home/newsletter";
import { Program } from "@/components/home/program";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Program />
      <Mission />
      <HeartQuote />
      <Founder />
      <Community />
      <GetInvolved />
      <Newsletter />
    </main>
  );
}
