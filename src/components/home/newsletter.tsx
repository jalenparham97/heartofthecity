import { IconHeartFilled } from "@tabler/icons-react";
import { NewsletterForm } from "@/components/home/newsletter-form";
import { cn } from "@/lib/utils";

/* Five hearts in the logo's pillar colors, piled like stickers. They hop when someone starts signing up. */
const hearts = [
  { color: "text-chart-1", place: "top-1 left-0 size-12 -rotate-12", delay: "delay-150" },
  { color: "text-chart-5", place: "top-0 left-9 size-10 rotate-6", delay: "delay-300" },
  { color: "text-chart-2", place: "top-2 right-0 size-14 rotate-12", delay: "delay-75" },
  { color: "text-chart-3", place: "right-1 bottom-1 size-12 -rotate-6", delay: "delay-200" },
  { color: "text-chart-4", place: "bottom-0 left-1 size-18 -rotate-6", delay: "delay-0" },
];

function HeartPile() {
  return (
    <span aria-hidden="true" className="relative block size-28 shrink-0">
      {hearts.map((heart) => (
        <IconHeartFilled
          key={heart.color}
          className={cn(
            "absolute stroke-secondary stroke-2 transition-transform duration-300 ease-out [paint-order:stroke] group-focus-within/newsletter:-translate-y-2",
            heart.color,
            heart.place,
            heart.delay,
          )}
        />
      ))}
    </span>
  );
}

export function Newsletter() {
  return (
    <section aria-labelledby="newsletter-title" className="group/newsletter bg-secondary">
      <div className="site-container grid gap-8 pt-14 pb-5 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:py-16">
        <div className="flex items-center gap-5 lg:col-span-6">
          <HeartPile />
          <div>
            <h2
              id="newsletter-title"
              className="text-3xl leading-tight font-extrabold tracking-[-0.02em]"
            >
              Be the first to know.
            </h2>
            <p className="mt-2 max-w-sm text-lg leading-snug text-balance text-muted-foreground">
              Initiatives and events from the center, straight to your inbox.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
