import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { DownloadFormButton, PaperForm } from "@/components/sponsor/paper-form";
import { cn } from "@/lib/utils";

export function SponsorCallout() {
  return (
    <section
      id="sponsor"
      aria-labelledby="sponsor-callout-title"
      className="site-container scroll-mt-6 py-20 lg:py-28"
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-x-8">
        <div className="lg:col-span-7">
          <h2 id="sponsor-callout-title" className="section-title">
            Sponsor
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed xl:text-2xl xl:leading-relaxed">
            Businesses and organizations can sponsor Heart of the City with a cash gift or an
            in-kind donation. Fill out the form online, or download the paper version.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/sponsor" className={cn(buttonVariants({ size: "lg" }), "home-button")}>
              Become a sponsor
              <HugeiconsIcon icon={ArrowRight01Icon} aria-hidden="true" />
            </Link>
            <DownloadFormButton className="sm:hidden" />
          </div>
        </div>
        <div className="hidden sm:block lg:col-span-4 lg:col-start-9">
          <PaperForm className="-rotate-2 text-foreground shadow-[0_18px_40px_-14px_color-mix(in_oklch,var(--foreground)_55%,transparent)] hover:rotate-0 focus-visible:rotate-0" />
        </div>
      </div>
    </section>
  );
}
