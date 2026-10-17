"use client";

import { useActionState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { subscribeToNewsletter, type NewsletterState } from "@/app/newsletter-actions";
import { cn } from "@/lib/utils";

const initialState: NewsletterState = { status: "idle", message: "", email: "" };

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState);
  const hasError = state.status === "invalid";

  return (
    <form action={formAction} noValidate>
      <label htmlFor="newsletter-email" className="text-lg font-bold">
        Email address
      </label>
      <InputGroup className="mt-2 h-14 border-2 border-primary bg-background focus-within:ring-4 focus-within:ring-primary/20 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20">
        <InputGroupInput
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="your email address"
          defaultValue={state.email}
          required
          aria-invalid={hasError}
          aria-describedby="newsletter-status"
          className="h-full px-5 text-lg placeholder:text-muted-foreground md:text-lg"
        />
        <InputGroupAddon align="inline-end" className="h-full p-0">
          <InputGroupButton
            type="submit"
            variant="default"
            size="sm"
            disabled={isPending}
            className="h-full border-0 px-6 text-base font-bold tracking-normal normal-case"
          >
            {isPending ? "Signing up…" : "Sign up"}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <p
        id="newsletter-status"
        aria-live="polite"
        className={cn(
          "mt-3 min-h-7 text-base leading-snug",
          hasError ? "font-bold text-destructive" : "text-muted-foreground",
        )}
      >
        {state.message}
      </p>
    </form>
  );
}
