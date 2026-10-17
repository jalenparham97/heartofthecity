"use server";

export type NewsletterState = {
  status: "idle" | "invalid" | "unavailable";
  message: string;
  email: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeToNewsletter(
  _previousState: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!emailPattern.test(email)) {
    return { status: "invalid", message: "Enter an email address like name@example.com.", email };
  }

  return {
    status: "unavailable",
    message:
      "Online sign-up isn't connected yet. Call us at (989) 778-7899 and we'll add you to the list.",
    email,
  };
}
