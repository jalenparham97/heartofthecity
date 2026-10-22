import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { buttonVariants } from "@/components/ui/button";
import { dayPrograms } from "@/lib/store";
import { cn } from "@/lib/utils";

function ProgramLevel({ level }: { level: (typeof dayPrograms)[number] }) {
  return (
    <li className="flex flex-col border-2 border-foreground/15 p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <HugeiconsIcon
          icon={FavouriteIcon}
          fill="currentColor"
          aria-hidden="true"
          className={cn("size-7 shrink-0 -rotate-12", level.heart)}
        />
        <h3 className="text-3xl font-extrabold tracking-[-0.02em]">{level.name}</h3>
      </div>
      <p className="mt-2 text-lg text-muted-foreground">{level.support}</p>
      <dl className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <dt className="text-base font-bold">Full day</dt>
          <dd className="display-type mt-1 text-5xl">{level.fullDay}</dd>
        </div>
        <div>
          <dt className="text-base font-bold">Half day</dt>
          <dd className="display-type mt-1 text-5xl">{level.halfDay}</dd>
        </div>
      </dl>
      <a
        href={level.href}
        target="_blank"
        rel="noreferrer"
        className={cn(buttonVariants({ size: "lg" }), "home-button mt-8 self-start")}
      >
        Register for {level.name}
        <HugeiconsIcon icon={ArrowUpRight01Icon} aria-hidden="true" />
      </a>
    </li>
  );
}

export function DaySupport() {
  return (
    <section
      id="day-support"
      aria-labelledby="day-support-title"
      className="scroll-mt-6 bg-secondary text-foreground"
    >
      <div className="site-container grid gap-12 py-20 lg:grid-cols-12 lg:gap-x-8 lg:py-28">
        <div className="lg:col-span-4">
          <h2 id="day-support-title" className="section-title">
            Adult Day Support
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Pay for day program days at the level of support your loved one needs. You&apos;ll pick
            your dates when you register.
          </p>
          <p className="mt-4 text-lg leading-snug">
            Weekend and holiday times are by appointment only. Ask us for the fee schedule.
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {dayPrograms.map((level) => (
            <ProgramLevel key={level.name} level={level} />
          ))}
        </ul>
      </div>
    </section>
  );
}
