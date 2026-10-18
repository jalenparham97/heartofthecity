import type { Metadata } from "next";
import { EventList } from "@/components/events/event-list";
import { EventsHero } from "@/components/events/events-hero";
import { Newsletter } from "@/components/home/newsletter";
import { getEventSchedule } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | Heart of the City Development Center",
  description:
    "Workshops, support groups and gatherings at Heart of the City Development Center in Saginaw.",
};

export default async function EventsPage() {
  const { upcomingEvents, pastEvents } = await getEventSchedule();

  return (
    <main id="main-content">
      <EventsHero nextEvent={upcomingEvents[0]} />
      <div className="site-container divide-y-2 divide-foreground/10">
        {upcomingEvents.length > 0 && (
          <EventList
            id="upcoming-title"
            title="Coming up"
            intro="Mark your calendar. We'd love to see you there."
            events={upcomingEvents}
          />
        )}
        {pastEvents.length > 0 && (
          <EventList
            id="past-title"
            title="Past events"
            intro="A look back at what we've hosted at the center."
            events={pastEvents}
          />
        )}
      </div>
      <Newsletter />
    </main>
  );
}
