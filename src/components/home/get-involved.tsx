import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ways = [
  {
    title: "Volunteer your time",
    description:
      "Bring your talents to our community and spend time with our enrollees. Every hour helps someone learn, grow, and engage.",
    action: { label: "See volunteer opportunities", href: "/take-action#volunteer" },
    photo: {
      src: "/images/connection.jpg",
      alt: "Two women in Heart of the City shirts smiling beside the center's banner",
      position: "object-top",
    },
    tilt: "-rotate-1 sm:-rotate-2",
    tape: "-rotate-3",
  },
  {
    title: "Become a sponsor",
    description:
      "Help us build more opportunities for individuals and families across Saginaw County, from day programming to community events.",
    action: { label: "Learn about sponsorship", href: "/sponsor" },
    photo: {
      src: "/images/celebration.jpg",
      alt: "Two supporters wearing Heart of the City shirts",
      position: "object-top",
    },
    tilt: "rotate-1 sm:rotate-[1.5deg]",
    tape: "rotate-2",
  },
  {
    title: "Shop the store",
    description:
      "Mugs, keychains, and shirts with our logo. All proceeds go toward the growth of our program.",
    action: { label: "Visit the store", href: "/store" },
    photo: {
      src: "/images/community.jpg",
      alt: "A Heart of the City mug, keychains, and koozie from the center's store",
      position: "object-center",
    },
    tilt: "-rotate-1",
    tape: "-rotate-2",
  },
];

export function GetInvolved() {
  return (
    <section
      id="get-involved"
      aria-labelledby="get-involved-title"
      className="scroll-mt-6 overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="site-container py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-baseline-last lg:gap-x-8">
          <h2 id="get-involved-title" className="section-title lg:col-span-8">
            <span className="block">There&apos;s room for you</span>
            <span className="block">here, too.</span>
          </h2>
          <p className="max-w-md text-lg leading-snug text-primary-foreground/85 lg:col-span-4 xl:text-xl xl:leading-snug">
            A little of your time or support creates more chances for our enrollees to learn, grow,
            and engage.
          </p>
        </div>

        <ul className="mt-14 grid gap-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8 xl:gap-12">
          {ways.map((way) => (
            <li
              key={way.title}
              className={cn(
                "relative flex flex-col bg-background p-3 pb-7 text-foreground md:last:col-span-2 md:last:w-[calc(50%-1.5rem)] md:last:justify-self-center lg:last:col-span-1 lg:last:w-auto lg:last:justify-self-auto shadow-[0_18px_40px_-12px_color-mix(in_oklch,var(--foreground)_55%,transparent)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-0 focus-within:-translate-y-1 focus-within:rotate-0 sm:p-4 sm:pb-8",
                way.tilt,
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 bg-secondary/75 shadow-sm",
                  way.tape,
                )}
              />
              <div className="relative aspect-5/4 overflow-hidden bg-secondary">
                <Image
                  src={way.photo.src}
                  alt={way.photo.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className={cn("object-cover", way.photo.position)}
                />
              </div>
              <div className="flex flex-1 flex-col px-2 pt-6 sm:px-3">
                <h3 className="text-2xl font-extrabold tracking-[-0.01em]">{way.title}</h3>
                <p className="mt-2 text-lg leading-snug text-muted-foreground">{way.description}</p>
                <div className="mt-auto pt-6">
                  <Link
                    href={way.action.href}
                    target={way.action.href.startsWith("/") ? undefined : "_blank"}
                    rel={way.action.href.startsWith("/") ? undefined : "noreferrer"}
                    className={cn(buttonVariants({ size: "lg" }), "home-button")}
                  >
                    {way.action.label}
                    <HugeiconsIcon
                      icon={way.action.href.startsWith("/") ? ArrowRight01Icon : ArrowUpRight01Icon}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-16 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
          With sincere gratitude to the Saginaw Community Foundation for their contribution to our
          mission.
        </p>
      </div>
    </section>
  );
}
