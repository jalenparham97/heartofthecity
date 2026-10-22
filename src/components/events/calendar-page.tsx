import type { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

/* A tear-off calendar page: a purple header strip with binder rings, pinned with a pillar heart. */
export function CalendarPage({
  label,
  heart,
  className,
  children,
}: {
  label: string;
  heart: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("relative bg-white text-center", className)}>
      <div className="relative bg-primary px-4 pt-3.5 pb-2.5 text-lg leading-none font-extrabold text-primary-foreground">
        <span
          aria-hidden="true"
          className="absolute -top-1.5 left-5 h-4 w-2 rounded-full bg-foreground/80"
        />
        <span
          aria-hidden="true"
          className="absolute -top-1.5 right-5 h-4 w-2 rounded-full bg-foreground/80"
        />
        {label}
      </div>
      {children}
      <HugeiconsIcon
        icon={FavouriteIcon}
        fill="currentColor"
        aria-hidden="true"
        className={cn(
          "absolute -right-4 -bottom-4 size-10 rotate-12 [&_path]:stroke-white [&_path]:stroke-[3] [&_path]:[paint-order:stroke]",
          heart,
        )}
      />
    </div>
  );
}
