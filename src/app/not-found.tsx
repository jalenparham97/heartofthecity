import type { Metadata } from "next";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, FavouriteIcon, Home09Icon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page not found | Heart of the City Development Center",
};

/* The main places people look for, each with a pillar heart like the footer. */
const destinations = [
  { label: "About us", href: "/about", heart: "text-chart-1 -rotate-12" },
  { label: "Events", href: "/events", heart: "text-chart-3 rotate-6" },
  { label: "Take action", href: "/take-action", heart: "text-chart-2 -rotate-6" },
  { label: "Contact us", href: "/contact", heart: "text-chart-5 rotate-12" },
];

/* 404 set in the display type, with a beating heart standing in for the zero. */
function HeartNumber() {
  return (
    <p
      aria-hidden="true"
      className="display-type flex items-center text-[7.5rem] leading-none sm:text-[11rem] lg:text-[13rem] xl:text-[15rem]"
    >
      4
      <HugeiconsIcon
        icon={FavouriteIcon}
        fill="currentColor"
        className="heart-beat mx-[0.02em] size-[0.82em] -rotate-6 text-chart-2"
      />
      4
    </p>
  );
}

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="dark flex min-h-svh items-center bg-background text-foreground"
    >
      <div className="site-container grid gap-14 pt-36 pb-20 sm:pt-44 lg:grid-cols-12 lg:items-end lg:gap-x-8 lg:pb-28">
        <div className="lg:col-span-7">
          <HeartNumber />
          <h1 className="mt-6 text-4xl leading-none font-extrabold tracking-[-0.03em] sm:text-5xl xl:text-6xl">
            This page wandered off.
          </h1>
          <p className="mt-5 max-w-lg text-xl leading-snug text-foreground/85 xl:text-2xl xl:leading-snug">
            The link may be old, or the page may have moved. Let&apos;s get you back to the center.
          </p>
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "home-button group mt-9 -rotate-2 bg-white text-primary-foreground shadow-[0_10px_24px_-8px_black] transition-transform duration-200 ease-out hover:rotate-0 hover:bg-white focus-visible:rotate-0",
            )}
          >
            <HugeiconsIcon icon={Home09Icon} aria-hidden="true" />
            Back to home
          </Link>
        </div>

        <nav aria-labelledby="not-found-links" className="lg:col-span-4 lg:col-start-9">
          <h2 id="not-found-links" className="text-xl font-bold text-foreground/85">
            Or try one of these
          </h2>
          <ul className="mt-3 flex flex-col">
            {destinations.map((destination) => (
              <li key={destination.href} className="border-b border-foreground/15">
                <Link
                  href={destination.href}
                  className="group flex min-h-16 items-center gap-4 text-2xl font-bold tracking-tight sm:text-3xl"
                >
                  <HugeiconsIcon
                    icon={FavouriteIcon}
                    fill="currentColor"
                    aria-hidden="true"
                    className={cn(
                      "size-6 shrink-0 transition-transform duration-200 ease-out group-hover:scale-125 group-focus-visible:scale-125",
                      destination.heart,
                    )}
                  />
                  {destination.label}
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    aria-hidden="true"
                    className="ml-auto size-6 opacity-60 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
