"use client";

import { useActionState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMessage, type ContactState } from "@/app/contact/actions";
import { cn } from "@/lib/utils";

const initialState: ContactState = {
  status: "idle",
  message: "",
  errors: {},
  values: { topic: "", firstName: "", lastName: "", email: "", message: "" },
};

/* Each topic wears one of the logo's pillar colors. */
const topics = [
  { label: "Day program", heart: "text-chart-1" },
  { label: "Your Recipe for Healing", heart: "text-chart-2" },
  { label: "Volunteering", heart: "text-chart-3" },
  { label: "Sponsoring", heart: "text-chart-4" },
  { label: "Something else", heart: "text-chart-5" },
];

const labelStyle = "text-lg font-bold tracking-normal normal-case";
const boxStyle =
  "border-2 border-foreground/15 bg-white px-4 text-lg text-foreground focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/20 aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/20 md:text-lg";

/* Bold red text with an alert icon, so errors read as errors without relying on color alone. */
function ErrorText({ id, message }: { id?: string; message?: string }) {
  if (!message) return null;
  return (
    <FieldError id={id} className="flex items-start gap-1.5 text-base font-bold text-destructive">
      <HugeiconsIcon
        icon={Alert02Icon}
        strokeWidth={2}
        aria-hidden="true"
        className="mt-0.5 size-4 shrink-0 text-destructive"
      />
      {message}
    </FieldError>
  );
}

function TopicChips({ selected, error }: { selected: string; error?: string }) {
  return (
    <fieldset aria-describedby={error ? "contact-topic-error" : undefined}>
      <legend className={cn(labelStyle, "mb-2.5")}>Topic</legend>
      <div className="flex flex-wrap gap-2.5">
        {topics.map((topic) => (
          <label key={topic.label} className="cursor-pointer">
            <input
              type="radio"
              name="topic"
              value={topic.label}
              defaultChecked={selected === topic.label}
              className="peer sr-only"
            />
            <span className="flex min-h-11 items-center gap-2 border-2 border-foreground/10 bg-background/50 px-3.5 text-base font-bold transition-[transform,background-color,color,border-color] duration-200 ease-out peer-checked:-rotate-2 peer-checked:border-white peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-[0_10px_24px_-10px_color-mix(in_oklch,var(--foreground)_45%,transparent)] peer-checked:[&_svg]:fill-current peer-focus-visible:ring-4 peer-focus-visible:ring-primary/30 hover:border-foreground/25 peer-checked:hover:border-white">
              <HugeiconsIcon
                icon={FavouriteIcon}
                strokeWidth={2}
                aria-hidden="true"
                className={cn("size-5 shrink-0", topic.heart)}
              />
              {topic.label}
            </span>
          </label>
        ))}
      </div>
      <div className="mt-2.5">
        <ErrorText id="contact-topic-error" message={error} />
      </div>
    </fieldset>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);
  const { errors, values } = state;

  return (
    <form action={formAction} noValidate>
      <FieldGroup className="gap-5">
        <TopicChips selected={values.topic} error={errors.topic} />
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <Field
            className="gap-2 data-[invalid=true]:text-foreground"
            data-invalid={Boolean(errors.firstName)}
          >
            <FieldLabel htmlFor="contact-first-name" className={labelStyle}>
              First name
            </FieldLabel>
            <Input
              id="contact-first-name"
              name="firstName"
              autoComplete="given-name"
              defaultValue={values.firstName}
              aria-invalid={Boolean(errors.firstName)}
              className={cn("h-12", boxStyle)}
            />
            <ErrorText message={errors.firstName} />
          </Field>
          <Field
            className="gap-2 data-[invalid=true]:text-foreground"
            data-invalid={Boolean(errors.lastName)}
          >
            <FieldLabel htmlFor="contact-last-name" className={labelStyle}>
              Last name
            </FieldLabel>
            <Input
              id="contact-last-name"
              name="lastName"
              autoComplete="family-name"
              defaultValue={values.lastName}
              aria-invalid={Boolean(errors.lastName)}
              className={cn("h-12", boxStyle)}
            />
            <ErrorText message={errors.lastName} />
          </Field>
        </div>
        <Field
          className="gap-2 data-[invalid=true]:text-foreground"
          data-invalid={Boolean(errors.email)}
        >
          <FieldLabel htmlFor="contact-email" className={labelStyle}>
            Email address
          </FieldLabel>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={values.email}
            aria-invalid={Boolean(errors.email)}
            className={cn("h-12", boxStyle)}
          />
          <ErrorText message={errors.email} />
        </Field>
        <Field
          className="gap-2 data-[invalid=true]:text-foreground"
          data-invalid={Boolean(errors.message)}
        >
          <FieldLabel htmlFor="contact-message" className={labelStyle}>
            Message
          </FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            defaultValue={values.message}
            aria-invalid={Boolean(errors.message)}
            className={cn("min-h-28 py-3", boxStyle)}
          />
          <ErrorText message={errors.message} />
        </Field>
      </FieldGroup>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          disabled={isPending}
          className="home-button group -rotate-1 bg-white text-primary shadow-[0_10px_24px_-10px_color-mix(in_oklch,var(--foreground)_45%,transparent)] transition-transform duration-200 ease-out hover:rotate-0 hover:bg-white focus-visible:rotate-0 sm:w-auto"
        >
          <HugeiconsIcon
            icon={FavouriteIcon}
            fill="currentColor"
            aria-hidden="true"
            className="size-5 -rotate-12 text-chart-2 transition-transform duration-200 ease-out group-hover:scale-125 group-hover:rotate-0 group-focus-visible:scale-125"
          />
          {isPending ? "Sending…" : "Send message"}
        </Button>
        <p
          aria-live="polite"
          className={cn(
            "text-base leading-snug",
            state.status === "invalid" ? "font-bold text-destructive" : "text-muted-foreground",
          )}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
