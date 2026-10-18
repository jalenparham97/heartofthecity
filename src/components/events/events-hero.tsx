import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { CalendarPage } from "@/components/events/calendar-page";
import { formatEventDate, type SiteEvent } from "@/lib/events";

function NextEventSticker({ nextEvent }: { nextEvent?: SiteEvent }) {
  if (!nextEvent) {
    return (
      <CalendarPage label="Next up" heart="text-chart-2" className="text-primary-foreground">
        <div className="px-6 pt-8 pb-9 sm:px-8">
          <p className="text-4xl leading-none font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-4xl xl:text-5xl">
            New dates coming soon.
          </p>
          <a
            href="#newsletter-title"
            className="mt-5 inline-flex items-center gap-1.5 text-lg font-bold underline decoration-2 underline-offset-4 hover:decoration-chart-4"
          >
            Get them in your inbox
            <HugeiconsIcon icon={ArrowDown01Icon} aria-hidden="true" className="size-5" />
          </a>
        </div>
      </CalendarPage>
    );
  }

  const date = formatEventDate(nextEvent.date);
  return (
    <CalendarPage label={date.month} heart={nextEvent.heart} className="text-primary-foreground">
      <div className="px-6 pt-5 pb-8 sm:px-8">
        <p className="display-type text-[6.5rem] sm:text-[8rem]">{date.day}</p>
        <p className="text-lg font-bold">{date.weekday}</p>
        <p className="mt-4 text-2xl leading-tight font-extrabold tracking-[-0.02em]">
          {nextEvent.title}
        </p>
        <p className="mt-1 text-lg">{nextEvent.time}</p>
      </div>
    </CalendarPage>
  );
}

export function EventsHero({ nextEvent }: { nextEvent?: SiteEvent }) {
  return (
    <section
      aria-labelledby="events-title"
      className="dark overflow-hidden bg-background text-foreground"
    >
      <div className="site-container grid gap-14 pt-36 pb-20 sm:pt-44 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:pb-28">
        <div className="lg:col-span-7">
          <h1
            id="events-title"
            className="display-type text-[3.5rem] sm:text-[6rem] lg:text-[5rem] xl:text-[6.5rem] 2xl:text-[7.5rem]"
          >
            <span className="block">What&apos;s on</span>
            <span className="block">the calendar.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-snug text-foreground/85 xl:text-2xl xl:leading-snug">
            Workshops, support groups and gatherings at the center on S. Hamilton Street in Saginaw.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm rotate-2 shadow-[0_24px_48px_-16px_black] lg:col-span-4 lg:col-start-9 lg:max-w-none">
          <NextEventSticker nextEvent={nextEvent} />
        </div>
      </div>
    </section>
  );
}
