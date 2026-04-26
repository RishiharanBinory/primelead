import { isValidPhoneNumber } from "libphonenumber-js";
import { ContactFormState, ContactFormErrors } from "./types";

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

export const validate = (fields: ContactFormState): ContactFormErrors => {
  const errs: ContactFormErrors = {};

  if (!fields.fullName.trim()) {
    errs.fullName = "Full name is required.";
  }

  if (!fields.phone || fields.phone.replace(/\D/g, "").length < 7) {
    errs.phone = "Phone number is required.";
  } else {
    try {
      if (!isValidPhoneNumber("+" + fields.phone)) {
        errs.phone = "Please enter a valid phone number for the selected country.";
      }
    } catch {
      errs.phone = "Please enter a valid phone number.";
    }
  }

  if (!fields.email.trim()) {
    errs.email = "Email address is required.";
  } else if (!validateEmail(fields.email)) {
    errs.email = "Please enter a valid email address.";
  }

  if (!fields.academicLevel) {
    errs.academicLevel = "Please select an academic level.";
  }

  if (!fields.message.trim()) {
    errs.message = "Please tell us how we can help you.";
  }

  return errs;
};

export const ACADEMIC_LEVELS = [
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's Degree" },
  { value: "undergraduate", label: "Undergraduate Degree" },
];