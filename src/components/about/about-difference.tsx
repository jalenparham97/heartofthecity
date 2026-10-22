import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* The day program serves ages 16 to 55, so age 26 sits about a quarter of the way along. */
const hearts = [
  { color: "text-chart-1", place: "left-[40%]" },
  { color: "text-chart-2", place: "left-[55%]" },
  { color: "text-chart-3", place: "left-[70%]" },
  { color: "text-chart-4", place: "left-[85%]" },
  { color: "text-chart-5", place: "left-full" },
];

function AgeLine() {
  return (
    <div className="mt-14 lg:mt-20">
      <div aria-hidden="true">
        <div className="relative flex h-12 items-end justify-between text-lg font-bold tabular-nums text-primary-foreground/75">
          <span>16</span>
          <span className="absolute bottom-0 left-[25.6%] -translate-x-1/2 -rotate-3 bg-white px-3 py-0.5 text-2xl font-extrabold text-primary shadow-[0_10px_24px_-8px_black]">
            26
          </span>
          <span>55</span>
        </div>
        <div className="relative mt-4 flex h-3">
          <span className="w-[25.6%] bg-primary-foreground/30" />
          <span className="flex-1 bg-white" />
          {hearts.map((heart) => (
            <HugeiconsIcon
              key={heart.color}
              icon={FavouriteIcon}
              fill="currentColor"
              className={cn(
                "absolute top-1/2 size-6 -translate-x-1/2 sm:size-8 -translate-y-1/2 [&_path]:stroke-white [&_path]:stroke-[3] [&_path]:[paint-order:stroke]",
                heart.color,
                heart.place,
              )}
            />
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-4 text-lg leading-snug sm:grid-cols-[25.6%_1fr] sm:gap-0">
        <p className="text-primary-foreground/80 sm:pr-6">Many services end at 26.</p>
        <p className="flex gap-2.5 font-bold">
          <HugeiconsIcon
            icon={FavouriteIcon}
            fill="currentColor"
            aria-hidden="true"
            className="mt-0.5 size-5 shrink-0 text-chart-2"
          />
          Our day program keeps going, up to age 55.
        </p>
      </div>
    </div>
  );
}

export function AboutDifference() {
  return (
    <section aria-labelledby="difference-title" className="bg-primary text-primary-foreground">
      <div className="site-container py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-8">
          <h2 id="difference-title" className="section-title lg:col-span-6">
            <span className="block">Learning doesn&apos;t</span>
            <span className="block">stop at 26.</span>
          </h2>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-1">
            <p className="text-lg leading-relaxed text-primary-foreground/85 xl:text-xl xl:leading-relaxed">
              We intend to offer the highest quality care and day program services in Saginaw
              County. What sets us apart is our commitment to educational and daily life skill
              services beyond the age of 26.
            </p>
            <Link
              href="/#services"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "home-button mt-8",
              )}
            >
              Explore our programs
            </Link>
          </div>
        </div>
        <AgeLine />
      </div>
    </section>
  );
}
