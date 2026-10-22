import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* A snapshot of the team, so the invitation has faces behind it. */
function TeamSnapshot() {
  return (
    <figure className="relative w-full max-w-xs -rotate-2 bg-white p-3 pb-4 shadow-[0_18px_40px_-14px_color-mix(in_oklch,var(--foreground)_55%,transparent)] sm:max-w-sm">
      <HugeiconsIcon
        icon={FavouriteIcon}
        fill="currentColor"
        aria-hidden="true"
        className="absolute -top-4 -right-3 z-10 size-9 rotate-12 text-chart-1 [&_path]:stroke-white [&_path]:stroke-[3] [&_path]:[paint-order:stroke]"
      />
      <HugeiconsIcon
        icon={FavouriteIcon}
        fill="currentColor"
        aria-hidden="true"
        className="absolute -bottom-3 -left-3 z-10 size-7 -rotate-12 text-chart-5 [&_path]:stroke-white [&_path]:stroke-[3] [&_path]:[paint-order:stroke]"
      />
      <div className="relative aspect-4/3 overflow-hidden bg-secondary">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/632de321be958318e9f257a4/b5003cce-9e79-4d66-8b0a-52eb047b723b/IMG_20220917_202524035_HDR.jpg"
          alt="Four Heart of the City team members in matching shirts, smiling together"
          fill
          sizes="(min-width: 1024px) 24rem, 90vw"
          className="object-cover object-[center_15%]"
        />
      </div>
      <figcaption className="mt-3 text-center text-xl font-extrabold tracking-[-0.01em]">
        We&apos;d love to meet you.
      </figcaption>
    </figure>
  );
}

export function AboutVisit() {
  return (
    <section aria-labelledby="visit-title" className="overflow-hidden bg-secondary">
      <div className="site-container grid gap-12 py-16 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:py-24">
        <div className="lg:col-span-7">
          <h2 id="visit-title" className="section-title">
            <span className="block">Come see the center</span>
            <span className="block">for yourself.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-snug text-muted-foreground xl:text-xl xl:leading-snug">
            Have a question about the program, or want to stop by? We&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "home-button")}>
              Contact us
            </Link>
            <a
              href="tel:+19897787899"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "home-button bg-background",
              )}
            >
              <HugeiconsIcon icon={Call02Icon} aria-hidden="true" />
              (989) 778-7899
            </a>
          </div>
        </div>
        <div className="flex justify-center px-3 lg:col-span-5 lg:justify-end lg:px-0">
          <TeamSnapshot />
        </div>
      </div>
    </section>
  );
}
