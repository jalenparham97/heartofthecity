import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { products } from "@/lib/store";
import { cn } from "@/lib/utils";

const strings = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4", "bg-chart-5"];

/* A paper price tag on a pillar-colored string; it swings when the product is hovered. */
function HangTag({ price, string }: { price: string; string: string }) {
  return (
    <span className="absolute -top-2 right-3 z-10 origin-top rotate-6 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-3 group-focus-visible:-rotate-3 motion-reduce:transition-none">
      <span aria-hidden="true" className={cn("mx-auto block h-5 w-0.5", string)} />
      <span className="relative block bg-white px-3.5 pt-4 pb-2 text-xl font-extrabold tracking-[-0.02em] text-foreground shadow-[0_8px_18px_-8px_color-mix(in_oklch,var(--foreground)_60%,transparent)]">
        <span
          aria-hidden="true"
          className={cn("absolute top-1.5 left-1/2 size-2 -translate-x-1/2 rounded-full", string)}
        />
        {price}
      </span>
    </span>
  );
}

export function MerchGrid() {
  return (
    <section
      id="merch"
      aria-labelledby="merch-title"
      className="site-container scroll-mt-6 py-20 lg:py-28"
    >
      <h2 id="merch-title" className="section-title">
        Merch
      </h2>
      <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        {products.map((product, index) => (
          <li key={product.href}>
            <a
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className="group block focus-visible:outline-none"
            >
              <span className="relative block pt-5">
                <HangTag price={product.price} string={strings[index % strings.length]} />
                <span className="relative block aspect-square overflow-hidden bg-secondary ring-primary/30 ring-offset-4 group-focus-visible:ring-4">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 46vw"
                    className="object-cover"
                  />
                </span>
              </span>
              <span className="mt-4 flex items-start justify-between gap-2">
                <span className="text-lg leading-tight font-extrabold sm:text-xl">
                  {product.name}
                </span>
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-primary transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
              <span className="mt-1 block text-base leading-snug text-muted-foreground">
                {product.detail}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
