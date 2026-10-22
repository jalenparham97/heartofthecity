import { HugeiconsIcon } from "@hugeicons/react";
import { Download01Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { sponsorshipFormUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

/* Ruled lines that sketch the paper form; widths vary so it reads as handwriting room, not a table. */
const formLines = ["w-full", "w-4/5", "w-full", "w-3/5", "w-full", "w-2/3"];

/* The paper sponsorship form as a taped sheet. Clicking it opens the PDF. */
export function PaperForm({ className }: { className?: string }) {
  return (
    <a
      href={sponsorshipFormUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative mx-auto block w-full max-w-64 rotate-3 bg-white p-6 transition-transform duration-300 ease-out hover:rotate-1 focus-visible:rotate-1 sm:max-w-xs sm:p-7",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -top-4 left-1/2 h-8 w-24 -translate-x-1/2 -rotate-3 bg-secondary shadow-sm dark:bg-primary/70"
      />
      <span className="block text-2xl leading-tight font-extrabold tracking-[-0.02em]">
        Sponsorship form
      </span>
      <span aria-hidden="true" className="mt-6 flex flex-col gap-5">
        {formLines.map((width, index) => (
          <span key={index} className={cn("block h-0.5 bg-current opacity-15", width)} />
        ))}
      </span>
      <span className="mt-8 flex items-center gap-2 text-lg font-bold">
        <HugeiconsIcon
          icon={Download01Icon}
          strokeWidth={2}
          aria-hidden="true"
          className="size-5 transition-transform duration-200 ease-out group-hover:translate-y-0.5"
        />
        Download the PDF
      </span>
      <HugeiconsIcon
        icon={FavouriteIcon}
        fill="currentColor"
        aria-hidden="true"
        className="absolute -right-4 -bottom-4 size-12 -rotate-12 text-chart-2 [&_path]:stroke-white [&_path]:stroke-[3] [&_path]:[paint-order:stroke]"
      />
    </a>
  );
}

/* Phones get a plain button in place of the paper sheet. */
export function DownloadFormButton({ className }: { className?: string }) {
  return (
    <a
      href={sponsorshipFormUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "home-button", className)}
    >
      <HugeiconsIcon icon={Download01Icon} strokeWidth={2} aria-hidden="true" />
      Download the sponsorship form
    </a>
  );
}
