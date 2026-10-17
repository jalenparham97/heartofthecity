"use client";

import { useActionState } from "react";
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
  values: { firstName: "", lastName: "", email: "", message: "" },
};

const labelStyle = "text-lg font-bold tracking-normal normal-case";
const boxStyle =
  "border-2 border-primary bg-background px-4 text-lg focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/20 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-lg";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);
  const { errors, values } = state;

  return (
    <form action={formAction} noValidate>
      <FieldGroup className="gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field data-invalid={Boolean(errors.firstName)}>
            <FieldLabel htmlFor="contact-first-name" className={labelStyle}>
              First name
            </FieldLabel>
            <Input
              id="contact-first-name"
              name="firstName"
              autoComplete="given-name"
              defaultValue={values.firstName}
              aria-invalid={Boolean(errors.firstName)}
              className={cn("h-14", boxStyle)}
            />
            <FieldError className="text-base">{errors.firstName}</FieldError>
          </Field>
          <Field data-invalid={Boolean(errors.lastName)}>
            <FieldLabel htmlFor="contact-last-name" className={labelStyle}>
              Last name
            </FieldLabel>
            <Input
              id="contact-last-name"
              name="lastName"
              autoComplete="family-name"
              defaultValue={values.lastName}
              aria-invalid={Boolean(errors.lastName)}
              className={cn("h-14", boxStyle)}
            />
            <FieldError className="text-base">{errors.lastName}</FieldError>
          </Field>
        </div>
        <Field data-invalid={Boolean(errors.email)}>
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
            className={cn("h-14", boxStyle)}
          />
          <FieldError className="text-base">{errors.email}</FieldError>
        </Field>
        <Field data-invalid={Boolean(errors.message)}>
          <FieldLabel htmlFor="contact-message" className={labelStyle}>
            Message
          </FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            defaultValue={values.message}
            aria-invalid={Boolean(errors.message)}
            className={cn("min-h-40 py-3", boxStyle)}
          />
          <FieldError className="text-base">{errors.message}</FieldError>
        </Field>
      </FieldGroup>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={isPending} className="home-button sm:w-auto">
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
