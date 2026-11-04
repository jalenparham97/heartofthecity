import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

const pillars = [
  {
    word: "Learn.",
    summary: "Learning for every age and ability.",
    description:
      "We provide a safe, welcoming, and inclusive environment where children and adults of all abilities are empowered to learn, grow, and thrive.",
    photo: {
      src: "https://images.unsplash.com/photo-1645364093800-d0796f7e9776",
      alt: "A young boy with Down syndrome drawing with colored pencils at a table beside an adult",
    },
  },
  {
    word: "Grow.",
    summary: "Daily living skills that build independence.",
    description:
      "Practice with the everyday skills that lead to confidence, self-respect, and a fuller life.",
    photo: {
      src: "https://images.unsplash.com/photo-1732194438396-394d2b7c2436",
      alt: "A young man in a wheelchair reading a recipe in a kitchen while a friend washes up",
    },
  },
  {
    word: "Engage.",
    summary: "Social skills, friendships, and community.",
    description:
      "Time together builds the social skills that help people succeed in every part of life and give back to their city.",
    photo: {
      src: "https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6",
      alt: "A young man with Down syndrome laughing face to face with an older man",
    },
  },
  {
    word: "Heal.",
    summary: "Hope, strength, and belonging for families.",
    description:
      "We provide whole-family support so everyone feels included, valued, and understood. Through shared experiences and connection, we help families find hope, strength, and belonging.",
    photo: {
      src: "https://images.unsplash.com/photo-1609253932702-796cbf3d3171",
      alt: "A large, diverse family of several generations smiling together on a front porch",
    },
  },
];

export function Program() {
  return (
    <section aria-labelledby="program-title" className="bg-primary text-primary-foreground">
      <div className="site-container py-16 lg:py-24">
        <h2 id="program-title" className="section-title max-w-4xl">
          <span className="block">Our daily mission is built</span>
          <span className="block">on four core values.</span>
        </h2>

        <ul className="mt-12 grid gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:mt-16 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <li key={pillar.word}>
              <div className="relative aspect-4/3 overflow-hidden bg-primary-foreground/10">
                <Image
                  src={pillar.photo.src}
                  alt={pillar.photo.alt}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="program-word display-type mt-6">{pillar.word}</h3>
              <div className="mt-5 border-t-2 border-primary-foreground pt-5">
                <p className="text-xl leading-snug font-bold">{pillar.summary}</p>
                <p className="mt-2 max-w-md text-lg leading-relaxed text-primary-foreground/85">
                  {pillar.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-6 bg-background px-5 py-7 text-foreground sm:p-10 lg:mt-20 xl:flex-row xl:items-center xl:justify-between xl:gap-10">
          <div>
            <p className="max-w-3xl text-2xl leading-snug font-extrabold tracking-[-0.01em] text-balance lg:text-3xl">
              Looking for a safe, supportive, and inclusive space where you or someone you love can
              learn, grow, engage, heal, and thrive?
            </p>
            <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
              Call or send us a message, and we&apos;ll walk you through our services.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "home-button")}>
              Talk with our team
            </Link>
            <a
              href={contact.phoneHref}
              className={cn("dark", buttonVariants({ size: "lg" }), "home-button")}
            >
              <HugeiconsIcon icon={Call02Icon} aria-hidden="true" />
              {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
