"use server";

type NotaryField = "firstName" | "lastName" | "email" | "phone" | "items" | "date";

export type NotaryState = {
  status: "idle" | "invalid" | "unavailable";
  message: string;
  errors: Partial<Record<NotaryField, string>>;
  values: Record<NotaryField, string>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function requestNotary(
  _previousState: NotaryState,
  formData: FormData,
): Promise<NotaryState> {
  const read = (field: NotaryField) => String(formData.get(field) ?? "").trim();
  const values = {
    firstName: read("firstName"),
    lastName: read("lastName"),
    email: read("email"),
    phone: read("phone"),
    items: read("items"),
    date: read("date"),
  };

  const today = new Date().toLocaleDateString("en-CA", { timeZone: "America/Detroit" });
  const errors: NotaryState["errors"] = {};
  if (!values.firstName) errors.firstName = "Enter your first name.";
  if (!values.lastName) errors.lastName = "Enter your last name.";
  if (!emailPattern.test(values.email)) {
    errors.email = "Enter an email address like name@example.com.";
  }
  if (values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Enter a phone number with area code.";
  }
  if (!values.items) errors.items = "List the documents you need notarized.";
  if (!values.date) errors.date = "Choose a date for your appointment.";
  else if (values.date < today) errors.date = "Choose today or a later date.";

  if (Object.keys(errors).length > 0) {
    return { status: "invalid", message: "Check the highlighted fields.", errors, values };
  }

  return {
    status: "unavailable",
    message:
      "Online requests aren't connected yet. Call (989) 778-7899 or email heartofthecity989@gmail.com for a quote and appointment.",
    errors: {},
    values,
  };
}
