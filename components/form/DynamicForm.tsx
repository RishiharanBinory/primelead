// components/form/DynamicForm.tsx
"use client";
import Button from "@/components/mainComponents/Button";
import { useState, useMemo } from "react";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import { isValidPhoneNumber } from "libphonenumber-js";
import countries from "world-countries";
import "react-phone-input-2/lib/style.css";
import { ALL_COURSES } from "@/lib/courses";

// ── Types ──
export type FieldType =
  | "text"
  | "email"
  | "date"
  | "textarea"
  | "phone"
  | "country"
  | "select"
  | "course"
  | "checkbox";

export type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
  required?: boolean;
  fullWidth?: boolean;
  checkboxLabel?: string;
};

export type SectionConfig = {
  title: string;
  fields: FieldConfig[];
};

type Props = {
  sections: SectionConfig[];
  submitLabel?: string;
  apiEndpoint: string;
  successTitle?: string;
  successMessage?: string;
};

// ── Static options ──
const COUNTRY_OPTIONS = countries
  .map((c) => ({ value: c.cca2, label: c.name.common }))
  .sort((a, b) => a.label.localeCompare(b.label));

const COURSE_OPTIONS = ALL_COURSES.map((c) => ({ value: c, label: c }));

// ── Shared styles ──
const inputClass =
  "w-full px-4 py-3 bg-[#f3f4f6] border-none outline-none text-[#1a2e3b] text-sm focus:ring-2 focus:ring-[#149AB5] transition-all";

const labelClass = "block text-sm font-semibold text-[#1a2e3b] mb-2";

const selectStyles = {
  control: (base: object) => ({
    ...base,
    backgroundColor: "#f3f4f6",
    border: "none",
    borderRadius: "0",
    padding: "4px",
    boxShadow: "none",
    "&:hover": { border: "none" },
  }),
  indicatorSeparator: () => ({ display: "none" }),
  placeholder: (base: object) => ({
    ...base,
    color: "#9ca3af",
    fontSize: "14px",
  }),
  singleValue: (base: object) => ({
    ...base,
    color: "#1a2e3b",
    fontSize: "14px",
  }),
  option: (
    base: object,
    state: { isSelected: boolean; isFocused: boolean },
  ) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#149AB5"
      : state.isFocused
        ? "#e0f7fa"
        : "white",
    color: state.isSelected ? "white" : "#1a2e3b",
    fontSize: "14px",
  }),
};

// ── Helpers ──
function SectionTitle({ title }: { title: string }) {
  return (
    <h2
      className="font-black text-[#0d1b2a] mb-8"
      style={{
        fontFamily: "'Work Sans', sans-serif",
        fontSize: "clamp(20px, 2.5vw, 28px)",
      }}
    >
      {title}
    </h2>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-red-500 text-xs mt-1">{message}</p>;
}

// ── Main component ──
export default function DynamicForm({
  sections,
  submitLabel = "Submit",
  apiEndpoint,
  successTitle = "Submitted Successfully! 🎉",
  successMessage = "Thank you! We will be in touch within 2-3 business days.",
}: Props) {
  const initialState = useMemo(
    () =>
      sections.reduce(
        (acc, section) => {
          section.fields.forEach((f) => {
            acc[f.name] = f.type === "checkbox" ? "false" : "";
          });
          return acc;
        },
        {} as Record<string, string>,
      ),
    [sections],
  );

  const [formData, setFormData] =
    useState<Record<string, string>>(initialState);
  const [phoneCountry, setPhoneCountry] = useState("gb"); // track selected phone country
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const n = { ...prev };
        delete n[field];
        return n;
      });
    }
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};

    sections.forEach((section) => {
      section.fields.forEach((field) => {
        const value = formData[field.name];

        // Required check
        if (field.required && (!value || value === "false")) {
          e[field.name] = `${field.label} is required`;
          return;
        }

        // Email validation
        if (field.type === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
          e[field.name] = "Invalid email address";
        }

        // Phone validation — validates against selected country
        if (field.type === "phone" && value) {
          try {
            const phoneWithPlus = `+${value}`;
            if (!isValidPhoneNumber(phoneWithPlus)) {
              e[field.name] = `Invalid phone number for selected country`;
            }
          } catch {
            e[field.name] = "Invalid phone number";
          }
        }
      });
    });

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-20 px-5">
        <h2
          className="font-black mb-4"
          style={{ color: "#149AB5", fontSize: "clamp(24px, 3vw, 36px)" }}
        >
          {successTitle}
        </h2>
        <p style={{ color: "#374151" }}>{successMessage}</p>
      </div>
    );
  }

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <form onSubmit={handleSubmit} noValidate>
          {sections.map((section, si) => (
            <div key={si} className="mb-12">
              <SectionTitle title={section.title} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.fields.map((field) => (
                  <div
                    key={field.name}
                    className={field.fullWidth ? "md:col-span-2" : ""}
                  >
                    {/* Checkbox */}
                    {field.type === "checkbox" ? (
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData[field.name] === "true"}
                          onChange={(e) =>
                            handleChange(field.name, String(e.target.checked))
                          }
                          className="mt-1 w-4 h-4 accent-[#149AB5]"
                        />
                        <span className="text-sm text-[#374151] leading-relaxed">
                          {field.checkboxLabel}
                        </span>
                      </label>
                    ) : (
                      <>
                        <label className={labelClass}>
                          {field.label}
                          {field.required && (
                            <span className="text-red-500 ml-1">*</span>
                          )}
                        </label>

                        {/* Text / Email / Date */}
                        {(field.type === "text" ||
                          field.type === "email" ||
                          field.type === "date") && (
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""}
                            onChange={(e) =>
                              handleChange(field.name, e.target.value)
                            }
                            className={inputClass}
                          />
                        )}

                        {/* Textarea */}
                        {field.type === "textarea" && (
                          <textarea
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""}
                            onChange={(e) =>
                              handleChange(field.name, e.target.value)
                            }
                            rows={4}
                            className={`${inputClass} resize-none`}
                          />
                        )}

                        {/* Phone — validates per country selected in flag dropdown */}
                        {field.type === "phone" && (
                          <PhoneInput
                            country={phoneCountry}
                            value={formData[field.name] || ""}
                            onChange={(value, data) => {
                              handleChange(field.name, value);
                              // Update country code when user changes flag
                              if (
                                data &&
                                typeof data === "object" &&
                                "countryCode" in data
                              ) {
                                setPhoneCountry(
                                  (data as { countryCode: string }).countryCode,
                                );
                              }
                            }}
                            inputStyle={{
                              width: "100%",
                              backgroundColor: "#f3f4f6",
                              border: "none",
                              borderRadius: "0",
                              height: "46px",
                              fontSize: "14px",
                              color: "#1a2e3b",
                            }}
                            buttonStyle={{
                              backgroundColor: "#f3f4f6",
                              border: "none",
                              borderRight: "1px solid #e5e7eb",
                            }}
                            containerStyle={{ width: "100%" }}
                            enableSearch
                            searchPlaceholder="Search country..."
                          />
                        )}

                        {/* Country */}
                        {field.type === "country" && (
                          <Select
                            options={COUNTRY_OPTIONS}
                            placeholder={field.placeholder || "Select Country"}
                            styles={selectStyles}
                            onChange={(opt) =>
                              handleChange(field.name, opt?.label || "")
                            }
                            value={
                              COUNTRY_OPTIONS.find(
                                (c) => c.label === formData[field.name],
                              ) || null
                            }
                          />
                        )}

                        {/* Select */}
                        {field.type === "select" && (
                          <Select
                            options={field.options?.map((o) => ({
                              value: o,
                              label: o,
                            }))}
                            placeholder={
                              field.placeholder || `Select ${field.label}`
                            }
                            styles={selectStyles}
                            onChange={(opt) =>
                              handleChange(field.name, opt?.value || "")
                            }
                            value={
                              formData[field.name]
                                ? {
                                    value: formData[field.name],
                                    label: formData[field.name],
                                  }
                                : null
                            }
                          />
                        )}

                        {/* Course — all courses always */}
                        {field.type === "course" && (
                          <Select
                            options={COURSE_OPTIONS}
                            placeholder="Select Course"
                            styles={selectStyles}
                            onChange={(opt) =>
                              handleChange(field.name, opt?.value || "")
                            }
                            value={
                              formData[field.name]
                                ? {
                                    value: formData[field.name],
                                    label: formData[field.name],
                                  }
                                : null
                            }
                          />
                        )}
                      </>
                    )}

                    <FieldError message={errors[field.name]} />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {error && <p className="text-red-500 text-center mb-6">{error}</p>}

          <div className="flex justify-start pb-10 mt-6">
            <Button type="submit" label={submitLabel} loading={loading} />
          </div>
        </form>
      </div>
    </section>
  );
}
