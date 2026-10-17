import { Community } from "@/components/home/community";
import { Founder } from "@/components/home/founder";
import { GetInvolved } from "@/components/home/get-involved";
import { HeartQuote } from "@/components/home/heart-quote";
import { Hero } from "@/components/home/hero";
import { Mission } from "@/components/home/mission";
import { Newsletter } from "@/components/home/newsletter";
import { Program } from "@/components/home/program";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Mission />
        <Program />
        <HeartQuote />
        <Founder />
        <Community />
        <GetInvolved />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
