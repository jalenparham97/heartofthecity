import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  Call02Icon,
  Facebook01Icon,
  InstagramIcon,
  LocationFavourite01Icon,
  Mail01Icon,
  MailboxIcon,
} from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=804+S.+Hamilton+Street+Saginaw+MI+48602";

const ways = [
  {
    title: "Call",
    icon: Call02Icon,
    color: "text-chart-1",
    lines: [],
    link: { label: "(989) 778-7899", href: "tel:+19897787899" },
  },
  {
    title: "Email",
    icon: Mail01Icon,
    color: "text-chart-3",
    lines: [],
    link: {
      label: "heartofthecity9809@gmail.com",
      href: "mailto:heartofthecity9809@gmail.com",
    },
  },
  {
    title: "Visit",
    icon: LocationFavourite01Icon,
    color: "text-chart-2",
    lines: ["804 S. Hamilton Street", "Saginaw, MI 48602"],
    link: { label: "Get directions", href: directionsUrl, isExternal: true },
  },
  {
    title: "Mail",
    icon: MailboxIcon,
    color: "text-chart-5",
    lines: ["P.O. Box 76", "Bridgeport, MI 48722"],
  },
];

export function ContactWays() {
  return (
    <div>
      <h2 className="text-3xl leading-tight font-extrabold tracking-[-0.02em]">
        Reach us directly
      </h2>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
        {ways.map((way) => (
          <li key={way.title} className="flex gap-4">
            <HugeiconsIcon
              icon={way.icon}
              strokeWidth={1.5}
              aria-hidden="true"
              className={cn("size-10 shrink-0", way.color)}
            />
            <div className="text-lg leading-snug">
              <h3 className="text-xl font-bold">{way.title}</h3>
              {way.lines.length > 0 && (
                <address className="mt-1 not-italic">
                  {way.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              )}
              {way.link && (
                <a
                  href={way.link.href}
                  target={way.link.isExternal ? "_blank" : undefined}
                  rel={way.link.isExternal ? "noreferrer" : undefined}
                  className="mt-1 inline-flex min-h-11 items-center gap-1.5 font-medium break-all text-primary underline underline-offset-4 hover:no-underline"
                >
                  {way.link.label}
                  {way.link.isExternal && (
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      className="size-4"
                      aria-hidden="true"
                    />
                  )}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex gap-3">
        <a
          href="https://www.facebook.com/heartofthecitydevelopmentcenter"
          target="_blank"
          rel="noreferrer"
          aria-label="Heart of the City on Facebook"
          className={buttonVariants({ variant: "secondary", size: "icon-lg" })}
        >
          <HugeiconsIcon icon={Facebook01Icon} className="size-5" aria-hidden="true" />
        </a>
        <a
          href="https://www.instagram.com/heartofthecity989/"
          target="_blank"
          rel="noreferrer"
          aria-label="Heart of the City on Instagram"
          className={buttonVariants({ variant: "secondary", size: "icon-lg" })}
        >
          <HugeiconsIcon icon={InstagramIcon} className="size-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
