"use server";

type ContactField = "firstName" | "lastName" | "email" | "message";

export type ContactState = {
  status: "idle" | "invalid" | "unavailable";
  message: string;
  errors: Partial<Record<ContactField, string>>;
  values: Record<ContactField, string>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _previousState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = {
    firstName: String(formData.get("firstName") ?? "").trim(),
    lastName: String(formData.get("lastName") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: ContactState["errors"] = {};
  if (!values.firstName) errors.firstName = "Enter your first name.";
  if (!values.lastName) errors.lastName = "Enter your last name.";
  if (!emailPattern.test(values.email)) {
    errors.email = "Enter an email address like name@example.com.";
  }
  if (!values.message) errors.message = "Write a message so we know how to help.";

  if (Object.keys(errors).length > 0) {
    return { status: "invalid", message: "Check the highlighted fields.", errors, values };
  }

  return {
    status: "unavailable",
    message:
      "Online messages aren't connected yet. Email heartofthecity989@gmail.com or call (989) 778-7899 and we'll help you there.",
    errors: {},
    values,
  };
}
