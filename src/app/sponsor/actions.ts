"use server";

type SponsorField =
  | "organization"
  | "website"
  | "street"
  | "city"
  | "state"
  | "zip"
  | "firstName"
  | "lastName"
  | "title"
  | "email"
  | "phone"
  | "sponsorshipType"
  | "details"
  | "paymentMethod";

export type SponsorState = {
  status: "idle" | "invalid" | "unavailable";
  message: string;
  errors: Partial<Record<SponsorField, string>>;
  values: Record<SponsorField, string>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendSponsorship(
  _previousState: SponsorState,
  formData: FormData,
): Promise<SponsorState> {
  const read = (field: SponsorField) => String(formData.get(field) ?? "").trim();
  const values = {
    organization: read("organization"),
    website: read("website"),
    street: read("street"),
    city: read("city"),
    state: read("state"),
    zip: read("zip"),
    firstName: read("firstName"),
    lastName: read("lastName"),
    title: read("title"),
    email: read("email"),
    phone: read("phone"),
    sponsorshipType: read("sponsorshipType"),
    details: read("details"),
    paymentMethod: read("paymentMethod"),
  };

  const errors: SponsorState["errors"] = {};
  if (!values.organization) errors.organization = "Enter your business or organization name.";
  if (!values.street) errors.street = "Enter a street address.";
  if (!values.city) errors.city = "Enter a city.";
  if (!values.state) errors.state = "Enter a state.";
  if (!/^\d{5}(-\d{4})?$/.test(values.zip)) errors.zip = "Enter a 5-digit ZIP code.";
  if (!values.firstName) errors.firstName = "Enter a first name.";
  if (!values.lastName) errors.lastName = "Enter a last name.";
  if (!emailPattern.test(values.email)) {
    errors.email = "Enter an email address like name@example.com.";
  }
  if (!values.sponsorshipType) errors.sponsorshipType = "Choose cash or in-kind.";
  if (!values.details) {
    errors.details =
      values.sponsorshipType === "In-kind"
        ? "Describe what you'd like to give."
        : "Enter the amount you'd like to give.";
  }
  if (values.sponsorshipType === "Cash" && !values.paymentMethod) {
    errors.paymentMethod = "Choose how you'll pay.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "invalid", message: "Check the highlighted fields.", errors, values };
  }

  return {
    status: "unavailable",
    message:
      "Online sponsorship isn't connected yet. Call (989) 778-7899 or email heartofthecity989@gmail.com and we'll set up your sponsorship.",
    errors: {},
    values,
  };
}
