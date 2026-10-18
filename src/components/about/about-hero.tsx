import Image from "next/image";
import { cn } from "@/lib/utils";

const snapshots = [
  {
    src: "/images/together.jpg",
    alt: "Two Heart of the City team members in matching shirts beside the center's banner",
    place: "top-0 left-0 w-[58%] -rotate-3",
    tape: "-rotate-3",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/632de321be958318e9f257a4/9d403ef2-f829-42d9-8d8f-ed7ae2f888bd/Screenshot_20220929-142344_4.png",
    alt: "Two women in Heart of the City shirts smiling together",
    place: "top-14 right-0 z-10 w-[54%] rotate-3",
    tape: "rotate-2",
  },
];

function Snapshot({ snapshot }: { snapshot: (typeof snapshots)[number] }) {
  return (
    <figure
      className={cn(
        "absolute bg-white p-2.5 pb-3 shadow-[0_18px_40px_-12px_black] sm:p-3",
        snapshot.place,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute -top-3.5 left-1/2 h-7 w-20 -translate-x-1/2 bg-primary/70 shadow-sm",
          snapshot.tape,
        )}
      />
      <div className="relative aspect-3/4 overflow-hidden bg-secondary">
        <Image
          src={snapshot.src}
          alt={snapshot.alt}
          fill
          preload
          sizes="(min-width: 1024px) 20vw, 55vw"
          className="object-cover object-top"
        />
      </div>
    </figure>
  );
}

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-title"
      className="dark overflow-hidden bg-background text-foreground"
    >
      <div className="site-container grid gap-14 pt-36 pb-20 sm:pt-44 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:pb-28">
        <div className="lg:col-span-7">
          <h1 id="about-title" className="display-type text-[4rem] sm:text-[6rem] xl:text-[7.5rem]">
            <span className="block">The center</span>
            <span className="block">with a heart.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-snug text-foreground/85 xl:text-2xl xl:leading-snug">
            Heart of the City Development Center is a 501(c)(3) nonprofit in Saginaw, Michigan,
            where individuals with intellectual and developmental disabilities keep exploring and
            growing every day.
          </p>
        </div>
        <div className="relative mx-auto h-[19rem] w-full max-w-sm sm:h-[25rem] sm:max-w-md lg:col-span-5 lg:h-[30rem] lg:max-w-none">
          {snapshots.map((snapshot) => (
            <Snapshot key={snapshot.src} snapshot={snapshot} />
          ))}
        </div>
      </div>
    </section>
  );
}
