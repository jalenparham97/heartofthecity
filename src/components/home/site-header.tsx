import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { MobileNavigation } from "@/components/home/mobile-navigation";
import { liveSite, navigationLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 text-primary-foreground">
      <div className="site-container flex lg:max-w-none h-24 items-center justify-between gap-6 lg:h-28">
        <Link
          href="/"
          aria-label="Heart of the City home"
          className="shrink-0 bg-background p-1.5 shadow-sm"
        >
          <Image
            src="/images/hotc-emblem.png"
            alt="Heart of the City Development Center"
            width={986}
            height={897}
            className="h-12 w-auto sm:h-14 lg:h-16"
            preload
          />
        </Link>
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center px-4 text-lg font-medium underline-offset-[6px] hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`${liveSite}/take-action`}
            target="_blank"
            rel="noreferrer"
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
          </a>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
