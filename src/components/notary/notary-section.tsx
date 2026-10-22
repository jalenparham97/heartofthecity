import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { NotaryForm } from "@/components/notary/notary-form";
import { cn } from "@/lib/utils";

const notes = [
  {
    title: "We travel to you",
    body: "Our notary service is mobile, so you don't have to come to us.",
    heart: "text-chart-3 -rotate-12",
  },
  {
    title: "Every fee gives back",
    body: "All revenue is donated to Heart of the City Development Center.",
    heart: "text-chart-2 rotate-6",
  },
  {
    title: "Questions first?",
    body: (
      <>
        Call{" "}
        <a
          href="tel:+19897787899"
          className="font-bold whitespace-nowrap underline decoration-2 underline-offset-4"
        >
          (989) 778-7899
        </a>
        .
      </>
    ),
    heart: "text-chart-1 -rotate-6",
  },
];

export function NotarySection() {
  return (
    <section
      id="notary-form"
      aria-labelledby="notary-form-title"
      className="scroll-mt-6 bg-secondary text-foreground"
    >
      <div className="site-container grid gap-12 py-20 lg:grid-cols-12 lg:gap-x-8 lg:py-28">
        <div className="lg:col-span-5">
          <h2 id="notary-form-title" className="section-title">
            Request a quote
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground xl:text-2xl xl:leading-relaxed">
            Tell us what needs notarizing and when. We&apos;ll send you a quote and set up your
            appointment.
          </p>
          <ul className="mt-10 flex flex-col gap-7">
            {notes.map((note) => (
              <li key={note.title} className="flex items-start gap-3.5">
                <HugeiconsIcon
                  icon={FavouriteIcon}
                  fill="currentColor"
                  aria-hidden="true"
                  className={cn("mt-0.5 size-7 shrink-0", note.heart)}
                />
                <div>
                  <h3 className="text-xl font-extrabold">{note.title}</h3>
                  <p className="mt-1 text-lg leading-snug">{note.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 lg:border-l lg:border-foreground/15 lg:pl-10 xl:col-span-6 xl:col-start-7 xl:pl-12">
          <NotaryForm />
        </div>
      </div>
    </section>
  );
}
