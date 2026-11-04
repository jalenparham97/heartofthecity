import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

/* The three things the mission says the center's environment promotes. */
const values = [
  { label: "Self-respect", heart: "text-chart-1 -rotate-12" },
  { label: "Independence", heart: "text-chart-2 rotate-6" },
  { label: "A better quality of life", heart: "text-chart-3 -rotate-6" },
];

export function AboutMission() {
  return (
    <section aria-labelledby="mission-title" className="site-container py-20 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-8">
        <h2 id="mission-title" className="section-title lg:col-span-4">
          Our mission
        </h2>
        <div className="lg:col-span-8">
          <p className="max-w-3xl text-2xl leading-snug font-bold text-balance xl:text-[1.75rem] xl:leading-snug">
            At Heart of the City Development Center, we believe everyone deserves a place to belong.
            Through inclusive education, advocacy, life-skills development, and family-centered
            support, we empower children and adults of all abilities to reach their full potential.
          </p>
          <p className="mt-10 text-lg font-bold">Every day, we work toward:</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {values.map((value) => (
              <li
                key={value.label}
                className="flex min-h-12 items-center gap-2.5 border-2 border-foreground/15 px-4 text-lg font-bold"
              >
                <HugeiconsIcon
                  icon={FavouriteIcon}
                  fill="currentColor"
                  aria-hidden="true"
                  className={cn("size-5 shrink-0", value.heart)}
                />
                {value.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
