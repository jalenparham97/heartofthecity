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
          <p className="max-w-3xl text-2xl leading-snug font-medium text-balance xl:text-[1.75rem] xl:leading-snug">
            We provide a space for individuals with intellectual and developmental disabilities to
            keep exploring and developing every day. We help each person live life to the fullest,
            in an educational and socially engaging atmosphere that creates a better tomorrow.
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
