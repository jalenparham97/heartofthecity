"use client";

import { useActionState, type ComponentProps } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { requestNotary, type NotaryState } from "@/app/notary/actions";
import { cn } from "@/lib/utils";

const initialState: NotaryState = {
  status: "idle",
  message: "",
  errors: {},
  values: { firstName: "", lastName: "", email: "", phone: "", items: "", date: "" },
};

const labelStyle = "text-lg font-bold tracking-normal normal-case";
const boxStyle =
  "border-2 border-foreground/15 bg-white px-4 text-lg text-foreground focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/20 aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/20 md:text-lg";

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

function TextField({
  name,
  label,
  state,
  className,
  ...inputProps
}: {
  name: keyof NotaryState["values"];
  label: string;
  state: NotaryState;
} & ComponentProps<typeof Input>) {
  const error = state.errors[name];
  return (
    <Field className="gap-2 data-[invalid=true]:text-foreground" data-invalid={Boolean(error)}>
      <FieldLabel htmlFor={`notary-${name}`} className={labelStyle}>
        {label}
      </FieldLabel>
      <Input
        id={`notary-${name}`}
        name={name}
        defaultValue={state.values[name]}
        aria-invalid={Boolean(error)}
        className={cn("h-12", boxStyle, className)}
        {...inputProps}
      />
      <ErrorText message={error} />
    </Field>
  );
}

export function NotaryForm() {
  const [state, formAction, isPending] = useActionState(requestNotary, initialState);

  return (
    <form action={formAction} noValidate>
      <FieldGroup className="gap-5">
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <TextField name="firstName" label="First name" autoComplete="given-name" state={state} />
          <TextField name="lastName" label="Last name" autoComplete="family-name" state={state} />
        </div>
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
            state={state}
          />
        </div>
        <Field
          className="gap-2 data-[invalid=true]:text-foreground"
          data-invalid={Boolean(state.errors.items)}
        >
          <FieldLabel htmlFor="notary-items" className={labelStyle}>
            What needs to be notarized?
          </FieldLabel>
          <Textarea
            id="notary-items"
            name="items"
            defaultValue={state.values.items}
            aria-invalid={Boolean(state.errors.items)}
            className={cn("min-h-28 py-3", boxStyle)}
          />
          <ErrorText message={state.errors.items} />
        </Field>
        <TextField
          name="date"
          label="Preferred appointment date"
          type="date"
          className="sm:max-w-64"
          state={state}
        />
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
            className="size-5 -rotate-12 text-chart-3 transition-transform duration-200 ease-out group-hover:scale-125 group-hover:rotate-0 group-focus-visible:scale-125"
          />
          {isPending ? "Sending…" : "Request a quote"}
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
