import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { EventFilm } from "@/components/home/event-film";
import { cn } from "@/lib/utils";

const squarespaceVideo = (id: string, file: string) =>
  `https://video.squarespace-cdn.com/content/v1/632de321be958318e9f257a4/${id}/${file}`;

const rodeoVideoId = "3848c50e-0eca-43c0-a34b-a4a16e8f8e1a";
const stemVideoId = "9512a39b-5563-437e-b887-f13663a27275";

export function Community() {
  return (
    <section aria-labelledby="community-title" className="bg-secondary">
      <div className="site-container py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-baseline-last lg:gap-x-8">
          <h2 id="community-title" className="section-title lg:col-span-7">
            <span className="block">Good things happen when</span>
            <span className="block">we show up together.</span>
          </h2>
          <p className="max-w-md text-lg leading-snug text-muted-foreground lg:col-span-5 xl:text-xl xl:leading-snug">
            Our community events bring enrollees, families, and neighbors together across the
            Saginaw area.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-x-8">
          <article className="lg:col-span-7">
            <EventFilm
              title="Back 2 School Rodeo"
              streamUrl={squarespaceVideo(rodeoVideoId, "playlist.m3u8")}
              posterUrl={squarespaceVideo(rodeoVideoId, "thumbnail")}
              runtime="2:32"
              spokenRuntime="2 minutes 32 seconds"
              isFeatured
            />
            <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.01em] lg:text-3xl">
              Back 2 School Rodeo
            </h3>
            <p className="mt-2 text-lg leading-snug text-muted-foreground">
              Our first annual back-to-school event, August 12, 2023.
            </p>
          </article>

          <div className="flex flex-col gap-10 lg:col-span-5">
            <article>
              <EventFilm
                title="Ecstatic About STEM"
                streamUrl={squarespaceVideo(stemVideoId, "playlist.m3u8")}
                posterUrl={squarespaceVideo(stemVideoId, "thumbnail")}
                runtime="3:25"
                spokenRuntime="3 minutes 25 seconds"
              />
              <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.01em]">
                Ecstatic About STEM
              </h3>
              <p className="mt-2 text-lg leading-snug text-muted-foreground">
                A STEM event at Delta College, June 3, 2023.{" "}
                <span className="whitespace-nowrap tabular-nums">Video, 3:25.</span>
              </p>
            </article>

            <div className="border-t border-foreground/15 pt-8 lg:mt-auto">
              <p className="text-2xl leading-snug font-extrabold tracking-[-0.01em] text-balance lg:text-3xl">
                Please join us at the next one.
              </p>
              <Link
                href="/events"
                className={cn(buttonVariants({ size: "lg" }), "home-button mt-6")}
              >
                See upcoming events
                <HugeiconsIcon icon={ArrowRight01Icon} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
