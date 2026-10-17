import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  Facebook01Icon,
  FavouriteIcon,
  InstagramIcon,
} from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { liveSite } from "@/lib/site";
import { cn } from "@/lib/utils";

const footerLinks = [
  { label: "About", href: `${liveSite}/about`, heart: "text-chart-1 -rotate-12" },
  { label: "Take action", href: `${liveSite}/take-action`, heart: "text-chart-2 rotate-6" },
  { label: "Events", href: `${liveSite}/events`, heart: "text-chart-3 -rotate-6" },
  { label: "Sponsor", href: `${liveSite}/sponsor`, heart: "text-chart-4 rotate-12" },
  { label: "Store", href: `${liveSite}/store`, heart: "text-chart-5 -rotate-12" },
  { label: "Notary", href: `${liveSite}/notary`, heart: "text-chart-1 rotate-6" },
  { label: "Contact", href: "/contact", heart: "text-chart-2 -rotate-6" },
];

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=804+S.+Hamilton+Street+Saginaw+MI+48602";

function LogoSnapshot() {
  return (
    <Link
      href="/"
      aria-label="Heart of the City home"
      className="relative block w-44 -rotate-3 bg-white p-3 shadow-[0_18px_40px_-12px_black] transition-transform duration-300 ease-out hover:rotate-0 focus-visible:rotate-0 sm:w-56 sm:p-4 lg:w-72"
    >
      <span
        aria-hidden="true"
        className="absolute -top-4 left-1/2 h-8 w-24 -translate-x-1/2 rotate-2 bg-primary/70 shadow-sm"
      />
      <Image
        src="/images/hotc-logo-full.png"
        alt="Heart of the City Development Center, Your Recipe for Healing"
        width={997}
        height={1203}
        className="h-auto w-full"
      />
    </Link>
  );
}

function FooterNavigation() {
  return (
    <nav aria-label="Footer navigation">
      <ul className="grid grid-cols-2 gap-x-8">
        {footerLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target={link.href.startsWith("/") ? undefined : "_blank"}
              rel={link.href.startsWith("/") ? undefined : "noreferrer"}
              className="group inline-flex min-h-12 items-center gap-3 text-lg"
            >
              <HugeiconsIcon
                icon={FavouriteIcon}
                fill="currentColor"
                aria-hidden="true"
                className={cn(
                  "size-5 shrink-0 transition-transform duration-200 ease-out group-hover:scale-125 group-focus-visible:scale-125",
                  link.heart,
                )}
              />
              <span className="underline-offset-[6px] group-hover:underline">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-3">
      <a
        href="https://www.facebook.com/heartofthecitydevelopmentcenter"
        target="_blank"
        rel="noreferrer"
        aria-label="Heart of the City on Facebook"
        className={buttonVariants({ variant: "secondary", size: "icon-lg" })}
      >
        <HugeiconsIcon icon={Facebook01Icon} className="size-5" aria-hidden="true" />
      </a>
      <a
        href="https://www.instagram.com/heartofthecity989/"
        target="_blank"
        rel="noreferrer"
        aria-label="Heart of the City on Instagram"
        className={buttonVariants({ variant: "secondary", size: "icon-lg" })}
      >
        <HugeiconsIcon icon={InstagramIcon} className="size-5" aria-hidden="true" />
      </a>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="dark overflow-hidden bg-background text-foreground">
      <div className="site-container pt-20 pb-10 lg:pt-28">
        <div className="grid gap-y-12 md:grid-cols-[auto_1fr] md:items-end md:gap-x-12 lg:grid-cols-12 lg:items-start lg:gap-x-8">
          <div className="lg:col-span-4 lg:row-span-2">
            <LogoSnapshot />
          </div>

          <h2 className="section-title text-balance lg:col-span-8 xl:col-span-7 xl:col-start-6">
            A place to learn, grow &amp; engage in social activities.
          </h2>

          <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-8 md:col-span-2 lg:col-span-8 xl:col-span-7 xl:col-start-6">
            <div>
              <address className="text-xl leading-relaxed not-italic">
                804 S. Hamilton Street
                <br />
                Saginaw, MI 48602
              </address>
              <a
                href="tel:+19897787899"
                className="mt-1 inline-flex min-h-11 items-center text-xl font-bold underline-offset-[6px] hover:underline"
              >
                (989) 778-7899
              </a>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "home-button")}
                >
                  Get directions
                  <HugeiconsIcon icon={ArrowUpRight01Icon} aria-hidden="true" />
                </a>
                <SocialLinks />
              </div>
            </div>

            <FooterNavigation />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t pt-8 text-base text-muted-foreground lg:mt-24 xl:flex-row xl:justify-between">
          <p>© Heart of the City Development Center</p>
          <p>A 501(c)(3) nonprofit in Saginaw, Michigan</p>
          <p>
            Hero photo by{" "}
            <a
              href="https://unsplash.com/photos/cylindrical-gray-container-on-park-during-daytime-rVZjYcZ3nc4"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Zoritsa Valova
            </a>{" "}
            on Unsplash
          </p>
        </div>
      </div>
    </footer>
  );
}
