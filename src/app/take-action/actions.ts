"use server";

type VolunteerField = "firstName" | "lastName" | "email" | "phone" | "interest";

export type VolunteerState = {
  status: "idle" | "invalid" | "unavailable";
  message: string;
  errors: Partial<Record<VolunteerField, string>>;
  values: Record<VolunteerField, string>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function signUpToVolunteer(
  _previousState: VolunteerState,
  formData: FormData,
): Promise<VolunteerState> {
  const values = {
    firstName: String(formData.get("firstName") ?? "").trim(),
    lastName: String(formData.get("lastName") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    interest: String(formData.get("interest") ?? "").trim(),
  };

  const errors: VolunteerState["errors"] = {};
  if (!values.firstName) errors.firstName = "Enter your first name.";
  if (!values.lastName) errors.lastName = "Enter your last name.";
  if (!emailPattern.test(values.email)) {
    errors.email = "Enter an email address like name@example.com.";
  }
  if (values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Enter a phone number with area code.";
  }
  if (!values.interest) errors.interest = "Tell us a little about why you'd like to volunteer.";

  if (Object.keys(errors).length > 0) {
    return { status: "invalid", message: "Check the highlighted fields.", errors, values };
  }

  return {
    status: "unavailable",
    message:
      "Online sign-up isn't connected yet. Call (989)\u00a0778-7899 or email heartofthecity989@gmail.com and we'll get you started.",
    errors: {},
    values,
  };
}
