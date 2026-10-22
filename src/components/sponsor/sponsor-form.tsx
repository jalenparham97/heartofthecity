"use client";

import { useActionState, type ComponentProps } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendSponsorship, type SponsorState } from "@/app/sponsor/actions";
import { cn } from "@/lib/utils";

const initialState: SponsorState = {
  status: "idle",
  message: "",
  errors: {},
  values: {
    organization: "",
    website: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    sponsorshipType: "",
    details: "",
    paymentMethod: "",
  },
};

type SponsorField = keyof SponsorState["values"];

const sponsorshipTypes = [
  { label: "Cash", heart: "text-chart-1" },
  { label: "In-kind", heart: "text-chart-5" },
];

const paymentMethods = [
  { label: "Check", heart: "text-chart-3" },
  { label: "Card on Square", heart: "text-chart-2" },
  { label: "Send me an invoice", heart: "text-chart-4" },
  { label: "Cash", heart: "text-chart-1" },
];

const labelStyle = "text-lg font-bold tracking-normal normal-case";
const boxStyle =
  "border-2 border-foreground/15 bg-white px-4 text-lg text-foreground focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/20 aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/20 md:text-lg";
const groupTitleStyle = "text-2xl font-extrabold tracking-[-0.02em]";

function ErrorText({ id, message }: { id?: string; message?: string }) {
  if (!message) return null;
  return (
    <FieldError id={id} className="flex items-start gap-1.5 text-base font-bold text-destructive">
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

function TextField({
  name,
  label,
  state,
  optional,
  className,
  ...inputProps
}: {
  name: SponsorField;
  label: string;
  state: SponsorState;
  optional?: boolean;
} & ComponentProps<typeof Input>) {
  const error = state.errors[name];
  return (
    <Field
      className={cn("gap-2 data-[invalid=true]:text-foreground", className)}
      data-invalid={Boolean(error)}
    >
      <FieldLabel htmlFor={`sponsor-${name}`} className={labelStyle}>
        {label}
        {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </FieldLabel>
      <Input
        id={`sponsor-${name}`}
        name={name}
        defaultValue={state.values[name]}
        aria-invalid={Boolean(error)}
        className={cn("h-12", boxStyle)}
        {...inputProps}
      />
      <ErrorText message={error} />
    </Field>
  );
}

function ChoiceChips({
  name,
  legend,
  options,
  state,
}: {
  name: SponsorField;
  legend: string;
  options: { label: string; heart: string }[];
  state: SponsorState;
}) {
  const error = state.errors[name];
  return (
    <fieldset aria-describedby={error ? `sponsor-${name}-error` : undefined}>
      <legend className={cn(labelStyle, "mb-2.5")}>{legend}</legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => (
          <label key={option.label} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.label}
              defaultChecked={state.values[name] === option.label}
              className="peer sr-only"
            />
            <span className="flex min-h-11 items-center gap-2 border-2 border-foreground/10 bg-background/50 px-3.5 text-base font-bold transition-[transform,background-color,color,border-color] duration-200 ease-out peer-checked:-rotate-2 peer-checked:border-white peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-[0_10px_24px_-10px_color-mix(in_oklch,var(--foreground)_45%,transparent)] peer-checked:[&_svg]:fill-current peer-focus-visible:ring-4 peer-focus-visible:ring-primary/30 hover:border-foreground/25 peer-checked:hover:border-white">
              <HugeiconsIcon
                icon={FavouriteIcon}
                strokeWidth={2}
                aria-hidden="true"
                className={cn("size-5 shrink-0", option.heart)}
              />
              {option.label}
            </span>
          </label>
        ))}
      </div>
      <div className="mt-2.5">
        <ErrorText id={`sponsor-${name}-error`} message={error} />
      </div>
    </fieldset>
  );
}

export function SponsorForm() {
  const [state, formAction, isPending] = useActionState(sendSponsorship, initialState);

  return (
    <form action={formAction} noValidate>
      <FieldGroup className="gap-10">
        <fieldset className="flex flex-col gap-5">
          <legend className={cn(groupTitleStyle, "mb-5")}>Your business</legend>
          <TextField
            name="organization"
            label="Business or organization name"
            autoComplete="organization"
            state={state}
          />
          <TextField name="website" label="Website" type="url" optional state={state} />
          <TextField
            name="street"
            label="Street address"
            autoComplete="street-address"
            state={state}
          />
          <TextField name="city" label="City" autoComplete="address-level2" state={state} />
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <TextField name="state" label="State" autoComplete="address-level1" state={state} />
            <TextField
              name="zip"
              label="ZIP code"
              inputMode="numeric"
              autoComplete="postal-code"
              state={state}
            />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-5">
          <legend className={cn(groupTitleStyle, "mb-5")}>Point of contact</legend>
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <TextField
              name="firstName"
              label="First name"
              autoComplete="given-name"
              state={state}
            />
            <TextField name="lastName" label="Last name" autoComplete="family-name" state={state} />
          </div>
          <TextField
            name="title"
            label="Title"
            autoComplete="organization-title"
            optional
            state={state}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField
              name="email"
              label="Email address"
              type="email"
              autoComplete="email"
              state={state}
            />
            <TextField
              name="phone"
              label="Phone number"
              type="tel"
              autoComplete="tel"
              optional
              state={state}
            />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-6">
          <legend className={cn(groupTitleStyle, "mb-5")}>Your sponsorship</legend>
          <ChoiceChips
            name="sponsorshipType"
            legend="Cash or in-kind?"
            options={sponsorshipTypes}
            state={state}
          />
          <Field
            className="gap-2 data-[invalid=true]:text-foreground"
            data-invalid={Boolean(state.errors.details)}
          >
            <FieldLabel htmlFor="sponsor-details" className={labelStyle}>
              Amount, or what you&apos;d like to give
            </FieldLabel>
            <Textarea
              id="sponsor-details"
              name="details"
              defaultValue={state.values.details}
              aria-invalid={Boolean(state.errors.details)}
              className={cn("min-h-24 py-3", boxStyle)}
            />
            <ErrorText message={state.errors.details} />
          </Field>
          <ChoiceChips
            name="paymentMethod"
            legend="How will you pay?"
            options={paymentMethods}
            state={state}
          />
        </fieldset>
      </FieldGroup>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
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
            className="size-5 -rotate-12 text-chart-4 transition-transform duration-200 ease-out group-hover:scale-125 group-hover:rotate-0 group-focus-visible:scale-125"
          />
          {isPending ? "Sending…" : "Send sponsorship"}
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
