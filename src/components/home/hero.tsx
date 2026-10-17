import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="ink-band relative isolate overflow-hidden text-primary-foreground"
    >
      <div className="relative aspect-4/5 sm:aspect-4/3 lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src="https://images.unsplash.com/photo-1554050943-69bab31f5e24"
          alt="A red heart painted on a stone bin beside a bench on a leaf-covered city park path"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[72%_center] lg:object-center"
        />
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div className="site-container relative lg:max-w-none -mt-28 pb-14 sm:-mt-36 lg:mt-0 lg:flex lg:min-h-svh lg:items-end lg:justify-between lg:gap-12 lg:pt-36 lg:pb-16">
        <h1 id="hero-title" className="hero-title display-type whitespace-nowrap">
          Heart <br className="max-lg:hidden" />
          of <br className="lg:hidden" />
          the <br className="max-lg:hidden" />
          City
          <span className="sr-only"> Development Center</span>
        </h1>

        <div className="mt-8 border-t border-primary-foreground/30 pt-8 lg:mt-0 lg:max-w-md lg:shrink-0 lg:pt-6 xl:max-w-lg">
          <p className="hero-copy text-xl leading-snug font-medium xl:text-2xl xl:leading-snug">
            A day program in Saginaw where adults with intellectual and developmental disabilities
            keep learning, growing, and belonging.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#program" className={cn(buttonVariants({ size: "lg" }), "home-button")}>
              Explore the program
            </a>
            <a
              href="#get-involved"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "home-button border-primary-foreground/60 hover:bg-primary-foreground hover:text-primary",
              )}
            >
              Support our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
