import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* The logo's five pillar colors as one hand-drawn squiggle, drawn in segment by segment on load. */
const squiggleColors = [
  "stroke-chart-1",
  "stroke-chart-2",
  "stroke-chart-3",
  "stroke-chart-4",
  "stroke-chart-5",
];

function PillarSquiggle() {
  return (
    <svg
      viewBox="0 0 500 24"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="dark absolute top-full left-0 mt-[0.08em] h-[0.32em] w-full overflow-visible"
    >
      {squiggleColors.map((color, index) => (
        <path
          key={color}
          d={`M ${index * 100 + 6},12 q 22,-11 44,0 t 44,0`}
          pathLength={1}
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className={cn("squiggle-draw [stroke-width:0.1em]", color)}
          style={{ animationDelay: `${300 + index * 140}ms` }}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="ink-band relative isolate overflow-hidden text-primary-foreground"
    >
      <div className="relative aspect-4/5 sm:aspect-4/3 lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src="https://images.unsplash.com/photo-1554050943-69bab31f5e24"
          alt="A red heart painted on a stone bin beside a bench on a leaf-covered city park path"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[72%_center] lg:object-center"
        />
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div className="site-container relative lg:max-w-none -mt-28 pb-14 sm:-mt-36 lg:mt-0 lg:flex lg:min-h-svh lg:items-end lg:justify-between lg:gap-12 lg:pt-36 lg:pb-16">
        <h1 id="hero-title" className="hero-title display-type whitespace-nowrap">
          Heart <br className="max-lg:hidden" />
          of <br className="lg:hidden" />
          the <br className="max-lg:hidden" />
          {/* A red heart stands in for the dot on the i in City. */}
          <span aria-hidden="true">
            C
            <span className="relative">
              ı
              <HugeiconsIcon
                icon={FavouriteIcon}
                fill="currentColor"
                className="absolute top-[0.21em] left-1/2 size-[0.22em] -translate-x-1/2 -rotate-12 text-chart-2"
              />
            </span>
            ty
          </span>
          <span className="sr-only">City</span>{" "}
          {/* The gap is sized off the title so it clears the y's descender at every width. */}
          <span className="mt-[0.22em] block">
            <span className="block w-fit origin-left -rotate-2 pb-[0.45em] text-[clamp(1.75rem,0.25em,3.5rem)] font-extrabold tracking-[-0.02em]">
              <span className="relative block">
                Development Center
                <PillarSquiggle />
              </span>
            </span>
          </span>
        </h1>

        <div className="mt-8 border-t border-primary-foreground/30 pt-8 lg:mt-0 lg:max-w-md lg:shrink-0 lg:pt-6 xl:max-w-lg">
          <p className="hero-copy text-xl leading-snug font-medium xl:text-2xl xl:leading-snug">
            A day program in Saginaw where adults with intellectual and developmental disabilities
            keep learning, growing, and belonging.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#services" className={cn(buttonVariants({ size: "lg" }), "home-button")}>
              Explore our programs
            </a>
            <a
              href="#get-involved"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "home-button border-primary-foreground/60 hover:bg-primary-foreground hover:text-primary",
              )}
            >
              Support our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
