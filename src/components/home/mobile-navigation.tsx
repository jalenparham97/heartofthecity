"use client";

import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, FavouriteIcon, Menu01Icon } from "@hugeicons/core-free-icons";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { liveSite, navigationLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

/* One pillar-colored heart per link, matching the footer. */
const linkHearts = [
  "text-chart-1 -rotate-12",
  "text-chart-2 rotate-6",
  "text-chart-3 -rotate-6",
  "text-chart-4 rotate-12",
  "text-chart-5 -rotate-12",
];

function LogoSticker() {
  return (
    <span className="relative block w-fit -rotate-3 bg-white p-2 shadow-[0_12px_28px_-10px_black]">
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-2 bg-primary/70 shadow-sm"
      />
      <Image
        src="/images/hotc-emblem.png"
        alt="Heart of the City Development Center"
        width={986}
        height={897}
        className="h-16 w-auto"
      />
    </span>
  );
}

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon-lg"
            className="size-12 border-primary-foreground/60 hover:bg-primary-foreground hover:text-primary lg:hidden"
          />
        }
      >
        <HugeiconsIcon icon={Menu01Icon} className="size-6" aria-hidden="true" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="dark w-full max-w-sm border-0 bg-background text-foreground sm:max-w-sm"
      >
        <SheetHeader className="pt-10 pb-6">
          <LogoSticker />
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile navigation" className="px-8">
          <ul className="flex flex-col">
            {navigationLinks.map((link, index) => (
              <li key={link.label} className="border-b">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-16 items-center gap-4 text-3xl font-bold tracking-tight"
                >
                  <HugeiconsIcon
                    icon={FavouriteIcon}
                    fill="currentColor"
                    aria-hidden="true"
                    className={cn(
                      "size-6 shrink-0 transition-transform duration-200 ease-out group-hover:scale-125 group-focus-visible:scale-125",
                      linkHearts[index % linkHearts.length],
                    )}
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SheetFooter className="gap-3">
          <a
            href={`${liveSite}/take-action`}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "home-button group w-full -rotate-1 bg-white text-primary-foreground shadow-[0_10px_24px_-8px_black] transition-transform duration-200 ease-out hover:rotate-0 hover:bg-white focus-visible:rotate-0",
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
          <a
            href="tel:+19897787899"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "home-button w-full",
            )}
          >
            <HugeiconsIcon icon={Call02Icon} aria-hidden="true" />
            (989) 778-7899
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
