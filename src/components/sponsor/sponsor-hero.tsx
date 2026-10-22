import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { DownloadFormButton, PaperForm } from "@/components/sponsor/paper-form";
import { cn } from "@/lib/utils";

export function SponsorHero() {
  return (
    <section
      aria-labelledby="sponsor-title"
      className="dark overflow-hidden bg-background text-foreground"
    >
      <div className="site-container grid gap-16 pt-36 pb-20 sm:pt-44 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:pb-28">
        <div className="lg:col-span-7">
          <h1
            id="sponsor-title"
            className="display-type text-[4rem] sm:text-[6rem] lg:text-[5.5rem] xl:text-[7.5rem]"
          >
            <span className="block">Become a</span>
            <span className="block">sponsor.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-snug text-foreground/85 xl:text-2xl xl:leading-snug">
            Sponsorships help us grow our facility and welcome more individuals with intellectual
            and developmental disabilities. Give a cash gift or an in-kind donation.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#sponsor-form"
              className={cn(
                buttonVariants({ size: "lg" }),
                "home-button group -rotate-2 bg-white text-primary-foreground shadow-[0_10px_24px_-8px_black] transition-transform duration-200 ease-out hover:rotate-0 hover:bg-white focus-visible:rotate-0",
              )}
            >
              <HugeiconsIcon
                icon={FavouriteIcon}
                fill="currentColor"
                aria-hidden="true"
                className="-rotate-12 text-chart-1 transition-transform duration-200 ease-out group-hover:scale-125 group-hover:rotate-0"
              />
              Sponsor online
              <HugeiconsIcon icon={ArrowDown01Icon} aria-hidden="true" />
            </a>
            <DownloadFormButton className="sm:hidden" />
          </div>
        </div>
        <div className="hidden sm:block lg:col-span-4 lg:col-start-9">
          <PaperForm className="text-primary-foreground shadow-[0_24px_48px_-16px_black] lg:mr-0" />
        </div>
      </div>
    </section>
  );
}
