import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pillars = [
  {
    word: "Learn.",
    summary: "Learning that continues after secondary school.",
    description:
      "Enrollees keep exploring new subjects and ideas in a space built for them, long after graduation.",
  },
  {
    word: "Grow.",
    summary: "Daily living skills that build independence.",
    description:
      "Practice with the everyday skills that lead to confidence, self-respect, and a fuller life.",
  },
  {
    word: "Engage.",
    summary: "Social skills, friendships, and community.",
    description:
      "Time together builds the social skills that help people succeed in every part of life and give back to their city.",
  },
];

export function Program() {
  return (
    <section aria-labelledby="program-title" className="bg-primary text-primary-foreground">
      <div className="site-container py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-baseline-last lg:gap-x-8">
          <h2 id="program-title" className="section-title lg:col-span-8">
            <span className="block">Every day is built</span>
            <span className="block">on three things.</span>
          </h2>
          <p className="max-w-md text-lg leading-snug text-primary-foreground/85 lg:col-span-4 xl:text-xl xl:leading-snug">
            Our educational and socially engaging day program helps each person live life to the
            fullest.
          </p>
        </div>

        <ul className="mt-12 grid lg:mt-20 lg:grid-cols-3 lg:gap-x-8">
          {pillars.map((pillar) => (
            <li
              key={pillar.word}
              className="border-t border-primary-foreground/25 py-8 first:border-t-0 first:pt-0 lg:border-t-0 lg:py-0"
            >
              <h3 className="program-word display-type">{pillar.word}</h3>
              <div className="mt-5 border-primary-foreground lg:mt-8 lg:border-t-2 lg:pt-6">
                <p className="text-xl leading-snug font-bold">{pillar.summary}</p>
                <p className="mt-2 max-w-md text-lg leading-relaxed text-primary-foreground/85">
                  {pillar.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-6 bg-background px-5 py-7 text-foreground sm:p-10 lg:mt-20 xl:flex-row xl:items-center xl:justify-between xl:gap-10">
          <div>
            <p className="text-2xl leading-snug font-extrabold tracking-[-0.01em] text-balance lg:text-3xl">
              Looking for a place for yourself or someone you love?
            </p>
            <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
              Call or send us a message and we&apos;ll walk you through the day program.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "home-button")}>
              Talk with our team
            </Link>
            <a
              href="tel:+19897787899"
              className={cn("dark", buttonVariants({ size: "lg" }), "home-button")}
            >
              <HugeiconsIcon icon={Call02Icon} aria-hidden="true" />
              (989) 778-7899
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
