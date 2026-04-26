"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";

import { ContactFormState, ContactFormErrors } from "./types";
import { validate, ACADEMIC_LEVELS } from "./Validation";

// ── Helpers ─────────────────────────────────────────────────────────────────

const BASE =
  "w-full px-4 py-3 rounded-lg border outline-none transition-all bg-white text-[#1a1a1a] text-sm placeholder:text-[#bbb] focus:border-[#3AAFB9] focus:ring-2 focus:ring-[#3AAFB9]/10";

const cls = (hasError: boolean) =>
  hasError ? `${BASE} border-red-400 ring-2 ring-red-100` : `${BASE} border-[#e5e5e5]`;

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
      <span>⚠</span> {msg}
    </p>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-xs font-semibold text-[#555] mb-1.5">
      {children}
    </label>
  );
}

// ── Success ──────────────────────────────────────────────────────────────────

function SuccessState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
      <div className="w-14 h-14 rounded-full bg-[#f0fafb] border-2 border-[#3AAFB9] flex items-center justify-center text-xl text-[#3AAFB9] font-bold">
        ✓
      </div>
      <h4 className="text-lg font-bold text-[#1a1a1a]">Message Sent!</h4>
      <p className="text-[#888] text-sm max-w-xs">
        Our advisors will review your enquiry and get back to you shortly.
      </p>
    </div>
  );
}

// ── Form ─────────────────────────────────────────────────────────────────────

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    fullName: "",
    phone: "",
    email: "",
    academicLevel: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof ContactFormState, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [field]: errs[field] }));
    }
  };

  const handleBlur = (field: keyof ContactFormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errs = validate(form);
    setErrors((prev) => ({ ...prev, [field]: errs[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(form).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.fullName,
          from_email: form.email,
          phone: "+" + form.phone,
          academic_level:
            ACADEMIC_LEVELS.find((l) => l.value === form.academicLevel)?.label ??
            form.academicLevel,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID!,
        { from_name: form.fullName, from_email: form.email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  const phoneHasError = touched.phone && !!errors.phone;
  const phoneBorder = phoneHasError ? "1px solid #f87171" : "1px solid #e5e5e5";

  if (submitted) return <SuccessState />;

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>

      {/* Full Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <input
            id="fullName"
            type="text"
            placeholder="Your full name"
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            onBlur={() => handleBlur("fullName")}
            className={cls(!!touched.fullName && !!errors.fullName)}
          />
          <FieldError msg={touched.fullName ? errors.fullName : undefined} />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <PhoneInput
            country="gb"
            value={form.phone}
            onChange={(value) => handleChange("phone", value)}
            onBlur={() => handleBlur("phone")}
            enableSearch
            searchPlaceholder="Search country..."
            inputProps={{ id: "phone", name: "phone" }}
            containerClass="!w-full"
            inputStyle={{
              width: "100%",
              paddingTop: "0.68rem",
              paddingBottom: "0.68rem",
              paddingLeft: "3rem",
              fontSize: "0.875rem",
              borderRadius: "0.5rem",
              border: phoneBorder,
              boxShadow: phoneHasError ? "0 0 0 2px rgba(248,113,113,0.15)" : "none",
              backgroundColor: "#ffffff",
              color: "#1a1a1a",
              height: "auto",
              outline: "none",
            }}
            buttonStyle={{
              borderRadius: "0.5rem 0 0 0.5rem",
              borderTop: phoneBorder,
              borderLeft: phoneBorder,
              borderBottom: phoneBorder,
              borderRight: "none",
              backgroundColor: "#f9fafb",
            }}
            dropdownStyle={{
              borderRadius: "0.5rem",
              boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
              border: "1px solid #e5e7eb",
              zIndex: 50,
            }}
          />
          <FieldError msg={phoneHasError ? errors.phone : undefined} />
        </div>
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">Email Address *</Label>
        <input
          id="email"
          type="email"
          placeholder="Your email address"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          className={cls(!!touched.email && !!errors.email)}
        />
        <FieldError msg={touched.email ? errors.email : undefined} />
      </div>

      {/* Academic Level */}
      <div>
        <Label htmlFor="academicLevel">Academic Level *</Label>
        <select
          id="academicLevel"
          value={form.academicLevel}
          onChange={(e) => handleChange("academicLevel", e.target.value)}
          onBlur={() => handleBlur("academicLevel")}
          className={`${cls(!!touched.academicLevel && !!errors.academicLevel)} appearance-none cursor-pointer`}
        >
          <option value="" disabled>Select your level</option>
          {ACADEMIC_LEVELS.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>
        <FieldError msg={touched.academicLevel ? errors.academicLevel : undefined} />
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message">How can we help you?</Label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us a little about yourself and what you are looking for"
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          className={`${cls(!!touched.message && !!errors.message)} resize-none`}
        />
        <FieldError msg={touched.message ? errors.message : undefined} />
      </div>

      {/* Privacy note */}
      <p className="text-[#aaa] text-xs leading-relaxed">
        By submitting this form, you agree to the Primeleed privacy notice.
        Your information will only be used to respond to your enquiry.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#3AAFB9] hover:bg-[#2d9aa3] text-white py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#3AAFB9]/20 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </>
        )}
      </button>
    </form>
  );
}