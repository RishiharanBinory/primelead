"use client";
import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import { isValidPhoneNumber } from "libphonenumber-js";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (fields: FormState): FormErrors => {
    const errs: FormErrors = {};

    if (!fields.fullName.trim()) {
      errs.fullName = "Full name is required.";
    }

    if (!fields.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!validateEmail(fields.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!fields.phone || fields.phone.replace(/\D/g, "").length < 7) {
      errs.phone = "Phone number is required.";
    } else {
      try {
        if (!isValidPhoneNumber("+" + fields.phone)) {
          errs.phone =
            "Please enter a valid phone number for the selected country.";
        }
      } catch {
        errs.phone = "Please enter a valid phone number.";
      }
    }

    if (!fields.message.trim()) {
      errs.message = "Please tell us how we can help you.";
    }

    return errs;
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errs = validate(form);
    setErrors((prev) => ({ ...prev, [field]: errs[field] }));
  };

  const handleChange = (field: keyof FormState, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [field]: errs[field] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(form).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {},
    );
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setLoading(true);
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // your main notification template
          {
            from_name: form.fullName,
            from_email: form.email,
            phone: "+" + form.phone,
            message: form.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        );

        // Auto-reply to the user
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID!, // your auto-reply template ID
          {
            from_name: form.fullName,
            from_email: form.email,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        );
        setSubmitted(true);
      } catch (error) {
        console.error("EmailJS error:", error);
        alert("Something went wrong. Please try again or contact us directly.");
      } finally {
        setLoading(false);
      }
    }
  };

  const inputBase =
    "w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl border outline-none transition-all bg-white shadow-sm text-base sm:text-lg";
  const inputNormal = `${inputBase} border-gray-200`;
  const inputError = `${inputBase} border-red-400 ring-2 ring-red-100`;

  const focusStyle = {
    borderColor: "#ffc501",
    boxShadow: "0 0 0 4px rgba(255,197,1,0.1)",
  };
  const blurStyle = { borderColor: "#e5e7eb", boxShadow: "" };
  const errorBlurStyle = {
    borderColor: "#f87171",
    boxShadow: "0 0 0 2px rgba(248,113,113,0.15)",
  };

  const phoneHasError = touched.phone && !!errors.phone;
  const phoneBorder = phoneHasError ? "1px solid #f87171" : "1px solid #e5e7eb";

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile header */}
        <div className="text-center mb-8 lg:hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-prime-light-blue text-prime-blue text-sm font-semibold mb-4 border border-blue-100 shadow-sm">
            📞 Get in Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-prime-dark mb-3 tracking-tight">
            Not sure where to begin?
          </h2>
          <p className="text-base text-prime-gray">
            Speak with our advisors today and receive personalised academic
            guidance.
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          {/* Left Side */}
          <div className="w-full lg:w-5/12 relative overflow-hidden p-6 sm:p-10 lg:p-14 flex flex-col justify-between text-white min-h-[200px] lg:min-h-[400px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-prime-dark/85 backdrop-blur-[2px]" />

            <div className="relative z-10 hidden lg:block">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold mb-8 border border-white/20">
                📞 Get in Touch
              </div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight leading-tight">
                Not sure where to begin?
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                If you&apos;re wondering do I need an education consultancy
                London students trust, speak with our advisors today and receive
                personalised academic guidance.
              </p>
            </div>

            <div className="relative z-10 space-y-4 sm:space-y-6 lg:mt-auto">
              {[
                { Icon: Phone, text: "+44 (0) 20 1234 5678" },
                { Icon: Mail, text: "admissions@primeleed.co.uk" },
                { Icon: MapPin, text: "London, United Kingdom" },
              ].map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 sm:gap-5 text-white"
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(255,197,1,0.2)",
                      border: "1px solid rgba(255,197,1,0.3)",
                    }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <span className="text-sm sm:text-lg font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-7/12 p-6 sm:p-10 lg:p-14 bg-gray-50/50">
            <div className="mb-6 sm:mb-10">
              <h3 className="text-xl sm:text-3xl font-bold text-prime-dark mb-2 sm:mb-3">
                Book Your Free Consultation
              </h3>
              <p className="text-prime-gray text-sm sm:text-lg">
                Fill out the form below and our advisors will get back to you
                shortly.
              </p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                  style={{
                    background: "rgba(255,197,1,0.15)",
                    border: "2px solid #ffc501",
                  }}
                >
                  ✓
                </div>
                <h4 className="text-2xl font-bold text-prime-dark">
                  Request Submitted!
                </h4>
                <p className="text-prime-gray">
                  Our advisors will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form
                className="space-y-4 sm:space-y-6"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Full Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-prime-dark mb-1.5 sm:mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={form.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      onBlur={() => handleBlur("fullName")}
                      className={
                        touched.fullName && errors.fullName
                          ? inputError
                          : inputNormal
                      }
                      onFocus={(e) =>
                        Object.assign(e.currentTarget.style, focusStyle)
                      }
                      onBlurCapture={(e) =>
                        Object.assign(
                          e.currentTarget.style,
                          touched.fullName && errors.fullName
                            ? errorBlurStyle
                            : blurStyle,
                        )
                      }
                      placeholder="John Doe"
                    />
                    {touched.fullName && errors.fullName && (
                      <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                        <span>⚠</span> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-prime-dark mb-1.5 sm:mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={
                        touched.email && errors.email ? inputError : inputNormal
                      }
                      onFocus={(e) =>
                        Object.assign(e.currentTarget.style, focusStyle)
                      }
                      onBlurCapture={(e) =>
                        Object.assign(
                          e.currentTarget.style,
                          touched.email && errors.email
                            ? errorBlurStyle
                            : blurStyle,
                        )
                      }
                      placeholder="john@example.com"
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                        <span>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-prime-dark mb-1.5 sm:mb-2"
                  >
                    Phone Number
                  </label>
                  <PhoneInput
                    country={"gb"}
                    value={form.phone}
                    onChange={(value) => handleChange("phone", value)}
                    onBlur={() => handleBlur("phone")}
                    enableSearch
                    searchPlaceholder="Search country..."
                    inputProps={{ id: "phone", name: "phone" }}
                    containerClass="!w-full"
                    inputStyle={{
                      width: "100%",
                      paddingTop: "0.85rem",
                      paddingBottom: "0.85rem",
                      paddingLeft: "3.5rem",
                      fontSize: "1rem",
                      borderRadius: "0.75rem",
                      borderTop: phoneBorder,
                      borderBottom: phoneBorder,
                      borderRight: phoneBorder,
                      borderLeft: "none",
                      boxShadow: phoneHasError
                        ? "0 0 0 2px rgba(248,113,113,0.15)"
                        : "0 1px 2px rgba(0,0,0,0.05)",
                      backgroundColor: "#ffffff",
                      height: "auto",
                      outline: "none",
                    }}
                    buttonStyle={{
                      borderRadius: "0.75rem 0 0 0.75rem",
                      borderTop: phoneBorder,
                      borderLeft: phoneBorder,
                      borderBottom: phoneBorder,
                      borderRight: "none",
                      backgroundColor: "#f9fafb",
                    }}
                    dropdownStyle={{
                      borderRadius: "0.75rem",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                      border: "1px solid #e5e7eb",
                      zIndex: 50,
                    }}
                  />
                  {phoneHasError && (
                    <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                      <span>⚠</span> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-prime-dark mb-1.5 sm:mb-2"
                  >
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    className={
                      (touched.message && errors.message
                        ? inputError
                        : inputNormal) + " resize-none"
                    }
                    onFocus={(e) =>
                      Object.assign(e.currentTarget.style, focusStyle)
                    }
                    onBlurCapture={(e) =>
                      Object.assign(
                        e.currentTarget.style,
                        touched.message && errors.message
                          ? errorBlurStyle
                          : blurStyle,
                      )
                    }
                    placeholder="Tell us about your study plans..."
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                      <span>⚠</span> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{
                    background: "#ffc501",
                    boxShadow: "0 8px 24px rgba(255,197,1,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) e.currentTarget.style.background = "#e6b200";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#ffc501";
                  }}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
