import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

const ways = [
  {
    label: "Donate",
    note: "Give online or with Cash App",
    href: "#donate",
    heart: "text-chart-2",
    tilt: "-rotate-2",
  },
  {
    label: "Volunteer",
    note: "Share your time with our enrollees",
    href: "#volunteer",
    heart: "text-chart-1",
    tilt: "rotate-2 sm:translate-x-10",
  },
];

/* Two big stickers: the page's two ways to help, one tap from the top. */
function WaySticker({ way }: { way: (typeof ways)[number] }) {
  return (
    <a
      href={way.href}
      className={cn(
        "group flex items-center gap-4 bg-white px-5 py-4 text-primary-foreground shadow-[0_18px_40px_-14px_black] transition-transform duration-300 ease-out hover:rotate-0 focus-visible:rotate-0 sm:gap-5 sm:px-7 sm:py-5",
        way.tilt,
      )}
    >
      <HugeiconsIcon
        icon={FavouriteIcon}
        fill="currentColor"
        aria-hidden="true"
        className={cn(
          "size-9 shrink-0 -rotate-12 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-0 sm:size-11",
          way.heart,
        )}
      />
      <span className="flex-1">
        <span className="block text-3xl leading-none font-extrabold tracking-[-0.02em] sm:text-4xl">
          {way.label}
        </span>
        <span className="mt-1.5 block text-base font-medium text-primary-foreground/70 sm:text-lg">
          {way.note}
        </span>
      </span>
      <HugeiconsIcon
        icon={ArrowDown01Icon}
        aria-hidden="true"
        className="size-6 shrink-0 transition-transform duration-300 ease-out group-hover:translate-y-1"
      />
    </a>
  );
}

export function ActionHero() {
  return (
    <section
      aria-labelledby="action-title"
      className="dark overflow-hidden bg-background text-foreground"
    >
      <div className="site-container grid gap-14 pt-36 pb-20 sm:pt-44 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:pb-28">
        <div className="lg:col-span-6">
          <h1
            id="action-title"
            className="display-type text-[4.5rem] sm:text-[7rem] xl:text-[8.5rem]"
          >
            <span className="block">Take</span>
            <span className="block">action.</span>
          </h1>
          <p className="mt-6 max-w-lg text-xl leading-snug text-foreground/85 xl:text-2xl xl:leading-snug">
            We exist only with the support of our community. Give a gift, give your time, or both.
          </p>
        </div>
        <nav aria-label="Ways to help" className="lg:col-span-6 lg:col-start-7">
          <ul className="flex max-w-lg flex-col gap-6 sm:gap-8 lg:ml-auto">
            {ways.map((way) => (
              <li key={way.label}>
                <WaySticker way={way} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
