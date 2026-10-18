import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* A notary seal pressed onto a round white sticker, with the center's heart where the state crest would go. */
function NotarySeal() {
  return (
    <div className="relative mx-auto size-64 -rotate-8 rounded-full bg-white text-primary-foreground shadow-[0_24px_48px_-16px_black] transition-transform duration-300 ease-out hover:-rotate-2 sm:size-80 xl:size-96">
      <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute inset-0 size-full">
        <defs>
          <path id="seal-top" d="M 32,100 A 68,68 0 0,1 168,100" />
          <path id="seal-bottom" d="M 20,100 A 80,80 0 0,0 180,100" />
        </defs>
        <circle cx="100" cy="100" r="93" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="100" cy="100" r="87" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle
          cx="100"
          cy="100"
          r="58"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 4"
        />
        <text className="fill-current text-[15px] font-extrabold tracking-[0.2em]">
          <textPath href="#seal-top" startOffset="50%" textAnchor="middle">
            MOBILE NOTARY
          </textPath>
        </text>
        <text className="fill-current text-[13px] font-extrabold tracking-[0.18em]">
          <textPath href="#seal-bottom" startOffset="50%" textAnchor="middle">
            HEART OF THE CITY
          </textPath>
        </text>
        <circle cx="25" cy="100" r="3" fill="currentColor" />
        <circle cx="175" cy="100" r="3" fill="currentColor" />
      </svg>
      <HugeiconsIcon
        icon={FavouriteIcon}
        fill="currentColor"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 text-chart-2 sm:size-24 xl:size-28"
      />
    </div>
  );
}

export function NotaryHero() {
  return (
    <section
      aria-labelledby="notary-title"
      className="dark overflow-hidden bg-background text-foreground"
    >
      <div className="site-container grid gap-16 pt-36 pb-20 sm:pt-44 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:pb-28">
        <div className="lg:col-span-7">
          <h1
            id="notary-title"
            className="display-type text-[4rem] sm:text-[6rem] lg:text-[5.5rem] xl:text-[7.5rem]"
          >
            <span className="block">We come</span>
            <span className="block">to you.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-snug text-foreground/85 xl:text-2xl xl:leading-snug">
            Heart of the City offers mobile notary services. All revenue is donated to the center.
          </p>
          <a
            href="#notary-form"
            className={cn(
              buttonVariants({ size: "lg" }),
              "home-button group mt-9 -rotate-2 bg-white text-primary-foreground shadow-[0_10px_24px_-8px_black] transition-transform duration-200 ease-out hover:rotate-0 hover:bg-white focus-visible:rotate-0",
            )}
          >
            <HugeiconsIcon
              icon={FavouriteIcon}
              fill="currentColor"
              aria-hidden="true"
              className="-rotate-12 text-chart-3 transition-transform duration-200 ease-out group-hover:scale-125 group-hover:rotate-0"
            />
            Request a quote
            <HugeiconsIcon icon={ArrowDown01Icon} aria-hidden="true" />
          </a>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <NotarySeal />
        </div>
      </div>
    </section>
  );
}
