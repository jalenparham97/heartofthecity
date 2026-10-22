import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import { CalendarPage } from "@/components/events/calendar-page";
import { formatEventDate, type SiteEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

function EventEntry({ event, index }: { event: SiteEvent; index: number }) {
  const date = formatEventDate(event.date);
  const isEven = index % 2 === 0;

  return (
    <li className="grid gap-10 border-t-2 border-foreground/10 py-14 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[8rem_1fr] sm:gap-x-10 lg:grid-cols-12 lg:gap-x-8 lg:py-20">
      <CalendarPage
        label={date.shortMonth}
        heart={event.heart}
        className={cn(
          "w-28 self-start text-foreground shadow-[0_14px_30px_-14px_color-mix(in_oklch,var(--foreground)_55%,transparent)] sm:w-32 lg:col-span-2",
          isEven ? "-rotate-3" : "rotate-2",
        )}
      >
        <time dateTime={event.date} className="block px-3 pt-2 pb-3">
          <span className="display-type block text-[3.5rem] sm:text-[4rem]">{date.day}</span>
          <span className="mt-1 block text-base font-bold text-muted-foreground">{date.year}</span>
        </time>
      </CalendarPage>

      <div className="lg:col-span-6">
        <h3 className="text-3xl leading-tight font-extrabold tracking-[-0.02em] sm:text-4xl">
          {event.title}
        </h3>
        <ul className="mt-4 flex flex-col gap-1.5 text-lg font-bold">
          <li className="flex items-center gap-2.5">
            <HugeiconsIcon
              icon={Clock01Icon}
              strokeWidth={2}
              aria-hidden="true"
              className={cn("size-5 shrink-0", event.heart)}
            />
            {date.weekday}, {event.time}
          </li>
          <li className="flex items-center gap-2.5">
            <HugeiconsIcon
              icon={Location01Icon}
              strokeWidth={2}
              aria-hidden="true"
              className={cn("size-5 shrink-0", event.heart)}
            />
            {event.location}
          </li>
        </ul>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed">{event.summary}</p>
        <p className="mt-3 text-lg text-muted-foreground">{event.partners}</p>
      </div>

      <a
        href={event.flyer.src}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "relative block w-full max-w-64 bg-white p-2.5 pb-3 shadow-[0_18px_40px_-14px_color-mix(in_oklch,var(--foreground)_55%,transparent)] transition-transform duration-300 ease-out hover:rotate-0 focus-visible:rotate-0 sm:col-start-2 lg:col-span-3 lg:col-start-10 lg:max-w-none",
          isEven ? "rotate-2" : "-rotate-2",
        )}
      >
        <span
          aria-hidden="true"
          className="absolute -top-3.5 left-1/2 h-7 w-20 -translate-x-1/2 -rotate-2 bg-secondary shadow-sm"
        />
        <span className="relative block aspect-4/5 overflow-hidden bg-secondary">
          <Image
            src={event.flyer.src}
            alt={event.flyer.alt}
            fill
            sizes="(min-width: 1024px) 20vw, 16rem"
            className="object-cover object-top"
          />
        </span>
        <span className="sr-only">(opens the full flyer in a new tab)</span>
      </a>
    </li>
  );
}

export function EventList({
  id,
  title,
  intro,
  events,
}: {
  id: string;
  title: string;
  intro: string;
  events: SiteEvent[];
}) {
  return (
    <section aria-labelledby={id} className="py-20 lg:py-28">
      <h2 id={id} className="section-title">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-xl leading-relaxed text-muted-foreground">{intro}</p>
      <ol className="mt-14 lg:mt-16">
        {events.map((event, index) => (
          <EventEntry key={`${event.date}-${event.title}`} event={event} index={index} />
        ))}
      </ol>
    </section>
  );
}
