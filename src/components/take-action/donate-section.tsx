import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  CreditCardIcon,
  FavouriteIcon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons";
import { donateOnlineUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const options = [
  {
    title: "Donate online",
    note: "Give any amount by card through our secure Square page.",
    href: donateOnlineUrl,
    icon: CreditCardIcon,
    color: "text-chart-3",
    hover:
      "hover:border-chart-3 hover:bg-chart-3/8 focus-visible:border-chart-3 focus-visible:bg-chart-3/8",
  },
  {
    title: "Express option: Cash App",
    note: "Send a gift to $heartofthecity9809.",
    href: "https://cash.app/$heartofthecity9809",
    icon: SmartPhone01Icon,
    color: "text-chart-1",
    hover:
      "hover:border-chart-1 hover:bg-chart-1/8 focus-visible:border-chart-1 focus-visible:bg-chart-1/8",
  },
];

function DonateOption({ option }: { option: (typeof options)[number] }) {
  return (
    <a
      href={option.href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative flex gap-4 border-2 border-foreground/10 p-5 transition-colors duration-200 ease-out focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none sm:p-6",
        option.hover,
      )}
    >
      <HugeiconsIcon
        icon={option.icon}
        strokeWidth={1.75}
        aria-hidden="true"
        className={cn("size-9 shrink-0", option.color)}
      />
      <span className="min-w-0 pr-6">
        <span className="block text-xl font-extrabold">{option.title}</span>
        <span className="mt-1 block text-lg leading-snug text-muted-foreground [overflow-wrap:anywhere]">
          {option.note}
        </span>
      </span>
      <HugeiconsIcon
        icon={ArrowUpRight01Icon}
        aria-hidden="true"
        className={cn(
          "absolute top-5 right-5 size-5 text-primary transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          option.color,
        )}
      />
      <HugeiconsIcon
        icon={FavouriteIcon}
        fill="currentColor"
        aria-hidden="true"
        className={cn(
          "absolute -right-3 -bottom-3 size-8 scale-0 -rotate-12 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-100 group-focus-visible:scale-100 motion-reduce:transition-none [&_path]:stroke-white [&_path]:stroke-[3] [&_path]:[paint-order:stroke]",
          option.color,
        )}
      />
    </a>
  );
}

export function DonateSection() {
  return (
    <section
      id="donate"
      aria-labelledby="donate-title"
      className="site-container scroll-mt-6 py-20 lg:py-28"
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-x-8">
        <div className="lg:col-span-7">
          <h2 id="donate-title" className="section-title">
            Donate
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed xl:text-2xl xl:leading-relaxed">
            Donations help us grow our facility and welcome more individuals with intellectual and
            developmental disabilities, so they can keep exploring and developing every day.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {options.map((option) => (
              <DonateOption key={option.title} option={option} />
            ))}
          </div>
        </div>
        <figure className="relative mx-auto w-full max-w-sm rotate-2 bg-white p-3 pb-4 shadow-[0_18px_40px_-14px_color-mix(in_oklch,var(--foreground)_55%,transparent)] lg:col-span-4 lg:col-start-9">
          <span
            aria-hidden="true"
            className="absolute -top-4 left-1/2 h-8 w-24 -translate-x-1/2 -rotate-2 bg-secondary shadow-sm"
          />
          <div className="relative aspect-4/5 overflow-hidden bg-secondary">
            <Image
              src="/images/celebration.jpg"
              alt="Two supporters wearing Heart of the City shirts"
              fill
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="mt-3 text-center text-xl font-extrabold tracking-[-0.01em]">
            Thank you for giving.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
