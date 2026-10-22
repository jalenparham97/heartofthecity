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
    lines: ["(989) 778-7899"],
    href: "tel:+19897787899",
  },
  {
    title: "Email",
    icon: Mail01Icon,
    color: "text-chart-3",
    lines: ["heartofthecity989@gmail.com"],
    href: "mailto:heartofthecity989@gmail.com",
  },
  {
    title: "Visit",
    icon: LocationFavourite01Icon,
    color: "text-chart-2",
    lines: ["804 S. Hamilton Street", "Saginaw, MI 48602"],
    href: directionsUrl,
    isExternal: true,
  },
  {
    title: "Mail",
    icon: MailboxIcon,
    color: "text-chart-5",
    lines: ["P.O. Box 76", "Bridgeport, MI 48722"],
  },
];

/* Tiles echo the topic chips; the tappable ones turn into white stickers on hover. */
const tileStyle = "relative flex gap-3 border-2 border-foreground/15 p-3.5 sm:p-4";
const tappableStyle =
  "transition-[transform,background-color,color,border-color] duration-200 ease-out hover:-rotate-1 hover:border-white hover:bg-white hover:text-primary hover:shadow-[0_10px_24px_-10px_color-mix(in_oklch,var(--foreground)_45%,transparent)] focus-visible:-rotate-1 focus-visible:border-white focus-visible:bg-white focus-visible:text-primary focus-visible:shadow-[0_10px_24px_-10px_color-mix(in_oklch,var(--foreground)_45%,transparent)] focus-visible:outline-none";

function WayContent({ way }: { way: (typeof ways)[number] }) {
  return (
    <>
      <HugeiconsIcon
        icon={way.icon}
        strokeWidth={1.75}
        aria-hidden="true"
        className={cn("size-7 shrink-0", way.color)}
      />
      <span className="min-w-0 text-base leading-snug">
        <span className="block text-lg font-bold">{way.title}</span>
        {way.lines.map((line) => (
          <span key={line} className="block [overflow-wrap:anywhere]">
            {line}
          </span>
        ))}
      </span>
      {way.isExternal && (
        <HugeiconsIcon
          icon={ArrowUpRight01Icon}
          aria-hidden="true"
          className="absolute top-3 right-3 size-4 opacity-70"
        />
      )}
    </>
  );
}

export function ContactWays() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-3xl leading-none font-extrabold tracking-[-0.03em] sm:text-4xl">
          Reach us directly
        </h2>
        <div className="flex shrink-0 gap-2">
          <a
            href="https://www.facebook.com/heartofthecitydevelopmentcenter"
            target="_blank"
            rel="noreferrer"
            aria-label="Heart of the City on Facebook"
            className={buttonVariants({ size: "icon-lg" })}
          >
            <HugeiconsIcon icon={Facebook01Icon} className="size-5" aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/heartofthecity989/"
            target="_blank"
            rel="noreferrer"
            aria-label="Heart of the City on Instagram"
            className={buttonVariants({ size: "icon-lg" })}
          >
            <HugeiconsIcon icon={InstagramIcon} className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1">
        {ways.map((way) => (
          <li key={way.title}>
            {way.href ? (
              <a
                href={way.href}
                target={way.isExternal ? "_blank" : undefined}
                rel={way.isExternal ? "noreferrer" : undefined}
                className={cn(tileStyle, tappableStyle)}
              >
                <WayContent way={way} />
              </a>
            ) : (
              <address className={cn(tileStyle, "not-italic")}>
                <WayContent way={way} />
              </address>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
