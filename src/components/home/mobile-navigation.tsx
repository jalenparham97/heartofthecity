"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, Menu01Icon } from "@hugeicons/core-free-icons";
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
      <SheetContent side="right" className="w-full max-w-sm sm:max-w-sm">
        <SheetHeader className="pb-2">
          <SheetTitle className="text-base tracking-normal normal-case text-muted-foreground">
            Menu
          </SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile navigation" className="px-8">
          <ul className="flex flex-col">
            {navigationLinks.map((link) => (
              <li key={link.label} className="border-b">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-16 items-center text-3xl font-bold tracking-tight"
                >
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
            className={cn(buttonVariants({ size: "lg" }), "home-button w-full")}
          >
            Take action
          </a>
          <a
            href="tel:+19897787899"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "home-button w-full")}
          >
            <HugeiconsIcon icon={Call02Icon} aria-hidden="true" />
            (989) 778-7899
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
