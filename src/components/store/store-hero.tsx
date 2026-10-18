import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { products } from "@/lib/store";
import { cn } from "@/lib/utils";

/* Three pieces of merch taped up like snapshots: the hoodie, the tee being worn, the mug. */
const snapshots = [
  { product: products[3], place: "top-0 left-0 w-[52%] -rotate-4", tape: "-rotate-3" },
  { product: products[1], place: "top-10 right-0 z-10 w-[50%] rotate-3", tape: "rotate-2" },
  { product: products[10], place: "bottom-0 left-[22%] z-20 w-[44%] -rotate-2", tape: "-rotate-2" },
];

export function StoreHero() {
  return (
    <section
      aria-labelledby="store-title"
      className="dark overflow-hidden bg-background text-foreground"
    >
      <div className="site-container grid gap-16 pt-36 pb-20 sm:pt-44 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:pb-28">
        <div className="lg:col-span-6">
          <h1
            id="store-title"
            className="display-type text-[4rem] sm:text-[6rem] lg:text-[5.5rem] xl:text-[7.5rem]"
          >
            <span className="block">Shop</span>
            <span className="block">with heart.</span>
          </h1>
          <p className="mt-6 max-w-lg text-xl leading-snug text-foreground/85 xl:text-2xl xl:leading-snug">
            Shirts, hoodies, tumblers, earrings and more from Heart of the City Development Center.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#merch"
              className={cn(
                buttonVariants({ size: "lg" }),
                "home-button group -rotate-2 bg-white text-primary-foreground shadow-[0_10px_24px_-8px_black] transition-transform duration-200 ease-out hover:rotate-0 hover:bg-white focus-visible:rotate-0",
              )}
            >
              <HugeiconsIcon
                icon={FavouriteIcon}
                fill="currentColor"
                aria-hidden="true"
                className="-rotate-12 text-chart-2 transition-transform duration-200 ease-out group-hover:scale-125 group-hover:rotate-0"
              />
              Shop merch
              <HugeiconsIcon icon={ArrowDown01Icon} aria-hidden="true" />
            </a>
            <a
              href="#day-support"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "home-button")}
            >
              Pay for day support
              <HugeiconsIcon icon={ArrowDown01Icon} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md lg:col-span-5 lg:col-start-8 lg:max-w-none">
          {snapshots.map(({ product, place, tape }) => (
            <figure
              key={product.name}
              className={cn(
                "absolute bg-white p-2.5 pb-3 shadow-[0_18px_40px_-12px_black] sm:p-3",
                place,
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute -top-3.5 left-1/2 z-10 h-7 w-20 -translate-x-1/2 bg-primary/70 shadow-sm",
                  tape,
                )}
              />
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  preload
                  sizes="(min-width: 1024px) 18vw, 45vw"
                  className="object-cover"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
