import { cacheLife } from "next/cache";

/* Add new events here. Dates are YYYY-MM-DD; the page sorts them into upcoming and past by itself. */
export const events = [
  {
    title: "Free Intro to Computers Workshop",
    date: "2024-09-21",
    time: "10:00 AM – 12:00 PM",
    location: "804 S. Hamilton Street, Saginaw",
    summary:
      "A free S.T.E.A.M. learning workshop for all ages, with 25 spots. Registration opened on site at 9:30 AM.",
    partners: "With the Saginaw Community Foundation and Executive Business Solutions.",
    heart: "text-chart-3",
  },
  {
    title: "Parent and Caregiver Support Group",
    date: "2024-08-24",
    time: "2:00 PM – 4:00 PM",
    location: "804 S. Hamilton Street, Saginaw",
    summary:
      "A safe space for parents and caregivers to share their concerns and find support, guidance and resources. The in-person session included an activity for loved ones, so families could come together.",
    partners: "With the Y, Mama Bears and Disability Network.",
    heart: "text-chart-2",
  },
];

export type SiteEvent = (typeof events)[number];

export function formatEventDate(date: string) {
  const day = new Date(`${date}T12:00:00Z`);
  const format = (options: Intl.DateTimeFormatOptions) =>
    day.toLocaleDateString("en-US", { timeZone: "UTC", ...options });
  return {
    month: format({ month: "long" }),
    shortMonth: format({ month: "short" }),
    day: format({ day: "numeric" }),
    weekday: format({ weekday: "long" }),
    year: format({ year: "numeric" }),
  };
}

export async function getEventSchedule() {
  "use cache";
  // Re-sorts upcoming and past once a day.
  cacheLife("days");

  const today = new Date().toLocaleDateString("en-CA", { timeZone: "America/Detroit" });
  return {
    upcomingEvents: events
      .filter((event) => event.date >= today)
      .toSorted((first, second) => first.date.localeCompare(second.date)),
    pastEvents: events
      .filter((event) => event.date < today)
      .toSorted((first, second) => second.date.localeCompare(first.date)),
  };
}
