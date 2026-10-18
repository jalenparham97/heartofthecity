import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { VolunteerForm } from "@/components/take-action/volunteer-form";
import { cn } from "@/lib/utils";

/* What volunteering adds, in the site's own words. */
const gifts = [
  { label: "Help out at the center", heart: "text-chart-1 -rotate-12" },
  { label: "Build real friendships with our enrollees", heart: "text-chart-2 rotate-6" },
  { label: "Add to the quality of their lives", heart: "text-chart-3 -rotate-6" },
];

export function VolunteerSection() {
  return (
    <section
      id="volunteer"
      aria-labelledby="volunteer-title"
      className="scroll-mt-6 bg-secondary text-foreground"
    >
      <div className="site-container grid gap-12 py-20 lg:grid-cols-12 lg:gap-x-8 lg:py-28">
        <div className="lg:col-span-5">
          <h2 id="volunteer-title" className="section-title">
            Volunteer
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground xl:text-2xl xl:leading-relaxed">
            Volunteers are an essential part of what makes Heart of the City work.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {gifts.map((gift) => (
              <li
                key={gift.label}
                className="flex items-start gap-3 text-xl leading-snug font-bold"
              >
                <HugeiconsIcon
                  icon={FavouriteIcon}
                  fill="currentColor"
                  aria-hidden="true"
                  className={cn("mt-0.5 size-6 shrink-0", gift.heart)}
                />
                {gift.label}
              </li>
            ))}
          </ul>
          <figure className="relative mt-12 hidden w-full max-w-72 -rotate-3 bg-white p-3 pb-4 shadow-[0_18px_40px_-14px_color-mix(in_oklch,var(--foreground)_45%,transparent)] lg:block">
            <span
              aria-hidden="true"
              className="absolute -top-4 left-1/2 h-8 w-24 -translate-x-1/2 rotate-2 bg-primary/25 shadow-sm"
            />
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <Image
                src="/images/connection.jpg"
                alt="Two women in Heart of the City shirts posing together at the center"
                fill
                sizes="18rem"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 text-center text-xl font-extrabold tracking-[-0.01em]">
              Come share your time.
            </figcaption>
          </figure>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 lg:border-l lg:border-foreground/15 lg:pl-10 xl:col-span-6 xl:col-start-7 xl:pl-12">
          <h3 className="text-3xl leading-none font-extrabold tracking-[-0.03em] sm:text-4xl">
            Sign up to volunteer
          </h3>
          <p className="mt-2 text-lg leading-snug text-muted-foreground">
            Thank you for your interest. Tell us a little about yourself and we&apos;ll be in touch.
          </p>
          <div className="mt-6">
            <VolunteerForm />
          </div>
        </div>
      </div>
    </section>
  );
}
