"use client";

import { useActionState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { signUpToVolunteer, type VolunteerState } from "@/app/take-action/actions";
import { cn } from "@/lib/utils";

const initialState: VolunteerState = {
  status: "idle",
  message: "",
  errors: {},
  values: { firstName: "", lastName: "", email: "", phone: "", interest: "" },
};

const labelStyle = "text-lg font-bold tracking-normal normal-case";
const boxStyle =
  "border-2 border-foreground/15 bg-white px-4 text-lg text-foreground focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/20 aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/20 md:text-lg";
const fieldStyle = "gap-2 data-[invalid=true]:text-foreground";

function ErrorText({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <FieldError className="flex items-start gap-1.5 text-base font-bold text-destructive">
      <HugeiconsIcon
        icon={Alert02Icon}
        strokeWidth={2}
        aria-hidden="true"
        className="mt-0.5 size-4 shrink-0"
      />
      {message}
    </FieldError>
  );
}

export function VolunteerForm() {
  const [state, formAction, isPending] = useActionState(signUpToVolunteer, initialState);
  const { errors, values } = state;

  return (
    <form action={formAction} noValidate>
      <FieldGroup className="gap-5">
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <Field className={fieldStyle} data-invalid={Boolean(errors.firstName)}>
            <FieldLabel htmlFor="volunteer-first-name" className={labelStyle}>
              First name
            </FieldLabel>
            <Input
              id="volunteer-first-name"
              name="firstName"
              autoComplete="given-name"
              defaultValue={values.firstName}
              aria-invalid={Boolean(errors.firstName)}
              className={cn("h-12", boxStyle)}
            />
            <ErrorText message={errors.firstName} />
          </Field>
          <Field className={fieldStyle} data-invalid={Boolean(errors.lastName)}>
            <FieldLabel htmlFor="volunteer-last-name" className={labelStyle}>
              Last name
            </FieldLabel>
            <Input
              id="volunteer-last-name"
              name="lastName"
              autoComplete="family-name"
              defaultValue={values.lastName}
              aria-invalid={Boolean(errors.lastName)}
              className={cn("h-12", boxStyle)}
            />
            <ErrorText message={errors.lastName} />
          </Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field className={fieldStyle} data-invalid={Boolean(errors.email)}>
            <FieldLabel htmlFor="volunteer-email" className={labelStyle}>
              Email address
            </FieldLabel>
            <Input
              id="volunteer-email"
              name="email"
              type="email"
              autoComplete="email"
              defaultValue={values.email}
              aria-invalid={Boolean(errors.email)}
              className={cn("h-12", boxStyle)}
            />
            <ErrorText message={errors.email} />
          </Field>
          <Field className={fieldStyle} data-invalid={Boolean(errors.phone)}>
            <FieldLabel htmlFor="volunteer-phone" className={labelStyle}>
              Phone number
            </FieldLabel>
            <Input
              id="volunteer-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              defaultValue={values.phone}
              aria-invalid={Boolean(errors.phone)}
              className={cn("h-12", boxStyle)}
            />
            <ErrorText message={errors.phone} />
          </Field>
        </div>
        <Field className={fieldStyle} data-invalid={Boolean(errors.interest)}>
          <FieldLabel htmlFor="volunteer-interest" className={labelStyle}>
            What makes you interested in volunteering?
          </FieldLabel>
          <Textarea
            id="volunteer-interest"
            name="interest"
            defaultValue={values.interest}
            aria-invalid={Boolean(errors.interest)}
            className={cn("min-h-28 py-3", boxStyle)}
          />
          <ErrorText message={errors.interest} />
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
            className="size-5 -rotate-12 text-chart-1 transition-transform duration-200 ease-out group-hover:scale-125 group-hover:rotate-0 group-focus-visible:scale-125"
          />
          {isPending ? "Signing up…" : "Sign up to volunteer"}
        </Button>
        <p
          aria-live="polite"
          className={cn(
            "text-base leading-snug text-wrap",
            state.status === "invalid" ? "font-bold text-destructive" : "text-muted-foreground",
          )}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
