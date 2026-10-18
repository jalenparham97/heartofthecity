import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { SponsorForm } from "@/components/sponsor/sponsor-form";
import { donateOnlineUrl, sponsorshipFormUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const linkStyle = "font-bold underline decoration-2 underline-offset-4 [overflow-wrap:anywhere]";

/* Short answers to the three questions sponsors ask before filling out the form. */
const notes = [
  {
    title: "Event sponsor?",
    heart: "text-chart-3 -rotate-12",
    body: (
      <>
        Email your company logo as a JPEG or PNG to{" "}
        <a href="mailto:heartofthecity989@gmail.com" className={linkStyle}>
          heartofthecity989@gmail.com
        </a>
        .
      </>
    ),
  },
  {
    title: "Paying by card?",
    heart: "text-chart-2 rotate-6",
    body: (
      <>
        Use our{" "}
        <a href={donateOnlineUrl} target="_blank" rel="noreferrer" className={linkStyle}>
          secure Square page
        </a>
        . Never send card numbers by email or in a form.
      </>
    ),
  },
  {
    title: "Prefer paper?",
    heart: "text-chart-1 -rotate-6",
    body: (
      <>
        <a href={sponsorshipFormUrl} target="_blank" rel="noreferrer" className={linkStyle}>
          Download the sponsorship form
        </a>{" "}
        and send it back to us.
      </>
    ),
  },
];

export function SponsorSection() {
  return (
    <section
      id="sponsor-form"
      aria-labelledby="sponsor-form-title"
      className="scroll-mt-6 bg-secondary text-foreground"
    >
      <div className="site-container grid gap-12 py-20 lg:grid-cols-12 lg:gap-x-8 lg:py-28">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-10">
            <h2 id="sponsor-form-title" className="section-title">
              Sponsor online
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground xl:text-2xl xl:leading-relaxed">
              Tell us about your business and your gift, and we&apos;ll be in touch to confirm your
              sponsorship.
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
        </div>

        <div className="lg:col-span-7 lg:col-start-6 lg:border-l lg:border-foreground/15 lg:pl-10 xl:col-span-6 xl:col-start-7 xl:pl-12">
          <SponsorForm />
        </div>
      </div>
    </section>
  );
}
