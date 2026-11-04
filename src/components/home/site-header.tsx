import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { MobileNavigation } from "@/components/home/mobile-navigation";
import { navigationLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

/* Two pillar hearts stuck on the logo's corners; they hop when the logo is hovered. */
const logoHearts = [
  {
    color: "text-chart-2",
    place:
      "-top-1.5 -right-2 size-6 rotate-12 group-hover:-translate-y-1 group-hover:rotate-0 sm:size-7",
  },
  {
    color: "text-chart-1",
    place:
      "-bottom-1 -left-1.5 size-5 -rotate-12 group-hover:translate-y-0.5 group-hover:rotate-0 sm:size-6",
  },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 text-primary-foreground">
      <div className="site-container flex lg:max-w-none h-24 items-center justify-between gap-6 lg:h-28">
        <Link
          href="/"
          aria-label="Heart of the City home"
          className="group relative flex size-16 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_-8px_black] transition-transform duration-200 ease-out hover:-rotate-6 focus-visible:-rotate-6 sm:size-18 lg:size-20"
        >
          <Image
            src="/images/hotc-emblem-transparent.png"
            alt="Heart of the City Development Center"
            width={986}
            height={897}
            className="w-[86%]"
            preload
          />
          {logoHearts.map((heart) => (
            <HugeiconsIcon
              key={heart.color}
              icon={FavouriteIcon}
              fill="currentColor"
              aria-hidden="true"
              className={cn(
                "absolute transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none [&_path]:stroke-white [&_path]:stroke-[3] [&_path]:[paint-order:stroke]",
                heart.color,
                heart.place,
              )}
            />
          ))}
        </Link>
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.href.startsWith("/") ? undefined : "_blank"}
                  rel={link.href.startsWith("/") ? undefined : "noreferrer"}
                  className="inline-flex min-h-11 items-center px-2.5 text-lg font-medium whitespace-nowrap underline-offset-[6px] hover:underline xl:px-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/take-action"
            className={cn(
              buttonVariants({ size: "lg" }),
              "home-button group hidden -rotate-2 bg-background text-foreground shadow-[0_10px_24px_-8px_black] transition-transform duration-200 ease-out hover:rotate-0 hover:bg-background focus-visible:rotate-0 sm:inline-flex",
            )}
          >
            <HugeiconsIcon
              icon={FavouriteIcon}
              fill="currentColor"
              aria-hidden="true"
              className="size-5 -rotate-12 text-chart-2 transition-transform duration-200 ease-out group-hover:scale-125 group-hover:rotate-0 group-focus-visible:scale-125"
            />
            Take action
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
