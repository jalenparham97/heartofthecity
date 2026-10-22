import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const recognitions = [
  { year: "2024", honor: "Heart of the City Award", from: "City of Saginaw" },
  { year: "2023", honor: "Newman Civic Award", from: "Saginaw Valley State University" },
  { year: "2023", honor: "Social Services Award", from: "Delta College" },
];

function Honors() {
  return (
    <div className="relative grid gap-8 bg-primary px-5 py-8 text-primary-foreground sm:p-10 lg:grid-cols-4 lg:gap-x-8 xl:p-12">
      <h3 className="text-2xl leading-tight font-extrabold tracking-[-0.01em] text-balance">
        Honored by her community
      </h3>
      <dl className="grid gap-6 sm:grid-cols-3 sm:gap-x-8 lg:col-span-3">
        {recognitions.map((recognition) => (
          <div
            key={recognition.honor}
            className="flex flex-col border-t border-primary-foreground/30 pt-4"
          >
            <dt className="order-2 mt-1 text-xl leading-snug font-bold">{recognition.honor}</dt>
            <dd className="order-1 text-base font-bold tabular-nums text-primary-foreground/75">
              {recognition.year}
            </dd>
            <dd className="order-3 mt-1 text-lg leading-snug text-primary-foreground/80">
              {recognition.from}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Founder() {
  return (
    <section aria-labelledby="founder-title" className="relative isolate overflow-hidden">
      <div className="relative aspect-4/5 bg-secondary sm:aspect-4/3 lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-[46%]">
        <Image
          src="/images/cherie-long.jpg"
          alt="Cherie Long standing beside the Heart of the City Development Center banner"
          fill
          sizes="(max-width: 1023px) 100vw, 46vw"
          className="object-cover object-[18%_top]"
        />
      </div>

      <div className="site-container relative">
        <div className="grid lg:grid-cols-12 lg:gap-x-8">
          <div className="max-w-2xl py-14 lg:col-span-6 lg:col-start-7 lg:max-w-none lg:pt-28 lg:pb-20">
            <h2 id="founder-title" className="section-title">
              Led by a mother who knows this road.
            </h2>
            <p className="mt-5 text-xl font-bold">
              Cherie Long<span className="font-normal text-muted-foreground">, President</span>
            </p>
            <div className="mt-8 space-y-5 text-lg leading-relaxed xl:text-xl xl:leading-relaxed">
              <p>
                Cherie is raising a daughter who was born developmentally delayed. This center
                reflects her deep-rooted passion for families like hers.
              </p>
              <p className="text-muted-foreground">
                She brings more than 23 years in healthcare, serves on the executive board of
                Saginaw County Community Mental Health, and is known across the city for advocating
                for people who can&apos;t yet advocate for themselves.
              </p>
            </div>
            <Link
              href="/about#cherie-long"
              className={cn(buttonVariants({ size: "lg" }), "home-button mt-8")}
            >
              Read Cherie&apos;s story
              <HugeiconsIcon icon={ArrowRight01Icon} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <Honors />
      </div>
    </section>
  );
}
