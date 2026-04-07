"use client";
// components/admission/admissionForm/ApplicationForm.tsx

import { useState, useRef } from "react";

// ── Types ─────────────────────────────────────────────────────────
interface FormData {
  firstName: string; lastName: string; email: string;
  phone: string; countryCode: string; dateOfBirth: string;
  studentType: string; address: string; school: string;
  yearOfCompletion: string; highestQualification: string;
  currentStatus: string; areaOfStudy: string; degreeLevel: string;
  passportFile: File | null; cvFile: File | null;
  howDidYouFindUs: string; fullName: string;
  additionalInfo: string; privacyAccepted: boolean;
}

const STEPS = [
  { number: 1, title: "Applicant Details" },
  { number: 2, title: "Education Records & Achievements" },
  { number: 3, title: "Education Details" },
  { number: 4, title: "Documentation" },
  { number: 5, title: "Declaration" },
];

const COUNTRIES = [
  { code: "+44", flag: "🇬🇧" }, { code: "+1",  flag: "🇺🇸" },
  { code: "+61", flag: "🇦🇺" }, { code: "+91", flag: "🇮🇳" },
  { code: "+92", flag: "🇵🇰" }, { code: "+94", flag: "🇱🇰" },
  { code: "+880",flag: "🇧🇩" }, { code: "+33", flag: "🇫🇷" },
  { code: "+49", flag: "🇩🇪" }, { code: "+39", flag: "🇮🇹" },
  { code: "+34", flag: "🇪🇸" }, { code: "+31", flag: "🇳🇱" },
  { code: "+63", flag: "🇵🇭" }, { code: "+60", flag: "🇲🇾" },
  { code: "+65", flag: "🇸🇬" }, { code: "+971",flag: "🇦🇪" },
  { code: "+966",flag: "🇸🇦" }, { code: "+20", flag: "🇪🇬" },
  { code: "+234",flag: "🇳🇬" }, { code: "+27", flag: "🇿🇦" },
  { code: "+55", flag: "🇧🇷" }, { code: "+52", flag: "🇲🇽" },
  { code: "+81", flag: "🇯🇵" }, { code: "+82", flag: "🇰🇷" },
  { code: "+86", flag: "🇨🇳" },
];

// ── Shared style constants ────────────────────────────────────────
const INPUT: React.CSSProperties = {
  width: "100%",
  height: "52px",
  padding: "0 16px",
  border: "1px solid #e0e4ea",
  backgroundColor: "#f5f7fa",
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  color: "#292929",
  outline: "none",
  borderRadius: "4px",
  boxSizing: "border-box" as const,
  transition: "border-color 0.2s, box-shadow 0.2s",
  caretColor: "#149AB5",
};

const LABEL: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "14px",
  fontWeight: "400",
  color: "#292929",
  marginBottom: "8px",
  display: "block",
  lineHeight: "1",
};

const ERR: React.CSSProperties = {
  fontSize: "12px",
  color: "#e53e3e",
  fontFamily: "'Inter', sans-serif",
  marginTop: "5px",
  display: "block",
};

const FW: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const SECTION: React.CSSProperties = {
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "20px",
  fontWeight: "700",
  color: "#292929",
  margin: "0 0 24px 0",
};

const BTN: React.CSSProperties = {
  height: "52px",
  padding: "0 32px",
  backgroundColor: "#292929",
  color: "#ffffff",
  border: "none",
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  fontWeight: "400",
  cursor: "pointer",
  borderRadius: "4px",
  transition: "background-color 0.2s",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
};

// Red asterisk for required fields
const R = () => <span style={{ color: "#e53e3e", marginLeft: "3px" }}>*</span>;

// ── Select with chevron ───────────────────────────────────────────
interface SelProps {
  name: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
  focused: string;
  errors: Record<string, string>;
  onFocus: (n: string) => () => void;
  onBlur: () => void;
}

function Sel({ name, value, onChange, children, focused, errors, onFocus, onBlur }: SelProps) {
  const borderColor = focused === name ? "#149AB5" : errors[name] ? "#e53e3e" : "#e0e4ea";
  const boxShadow = focused === name ? "0 0 0 3px rgba(20,154,181,0.12)" : "none";
  return (
    <div style={{ position: "relative" }}>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={onFocus(name)}
        onBlur={onBlur}
        style={{
          ...INPUT,
          borderColor,
          boxShadow,
          paddingRight: "42px",
          cursor: "pointer",
          appearance: "none" as const,
        }}
      >
        {children}
      </select>
      <div style={{
        position: "absolute", right: "16px", top: "50%",
        transform: "translateY(-50%)", pointerEvents: "none",
      }}>
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
          <path d="M1 1L6 6L11 1" stroke="#6b7280" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {errors[name] && <span style={ERR}>{errors[name]}</span>}
    </div>
  );
}

// ── Phone field ───────────────────────────────────────────────────
interface PhoneFieldProps {
  form: FormData;
  focused: string;
  errors: Record<string, string>;
  onFocus: (n: string) => () => void;
  onBlur: () => void;
  onCountryChange: (v: string) => void;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function PhoneField({ form, focused, errors, onFocus, onBlur, onCountryChange, onPhoneChange }: PhoneFieldProps) {
  return (
    <div>
      <div style={{
        display: "flex",
        alignItems: "stretch",
        height: "52px",
        border: `1px solid ${
          focused === "phone" ? "#149AB5"
          : errors.phone ? "#e53e3e"
          : "#e0e4ea"
        }`,
        borderRadius: "4px",
        backgroundColor: "#f5f7fa",
        boxShadow: focused === "phone" ? "0 0 0 3px rgba(20,154,181,0.12)" : "none",
        transition: "border-color 0.2s, box-shadow 0.2s",
        overflow: "hidden",
      }}>
        {/* Country code dropdown */}
        <div style={{ position: "relative", flexShrink: 0, display: "flex", alignItems: "center" }}>
          <select
            value={form.countryCode}
            onChange={e => onCountryChange(e.target.value)}
            style={{
              height: "50px",
              padding: "0 28px 0 10px",
              border: "none",
              borderRight: "1px solid #e0e4ea",
              borderRadius: "4px 0 0 4px",
              backgroundColor: "#edf0f4",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "#292929",
              outline: "none",
              cursor: "pointer",
              appearance: "none" as const,
              minWidth: "82px",
              maxWidth: "90px",
            }}
          >
            {COUNTRIES.map(c => (
              <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
            ))}
          </select>
          <div style={{
            position: "absolute", right: "8px", top: "50%",
            transform: "translateY(-50%)", pointerEvents: "none",
          }}>
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
              <path d="M1 1L4.5 5L8 1" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Number input */}
        <input
          type="text"
          placeholder="7700 900000"
          value={form.phone}
          onChange={onPhoneChange}
          onFocus={onFocus("phone")}
          onBlur={onBlur}
          style={{
            flex: 1,
            height: "50px",
            padding: "0 14px",
            border: "none",
            borderRadius: "0 4px 4px 0",
            backgroundColor: "transparent",
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            color: "#292929",
            outline: "none",
            caretColor: "#149AB5",
            minWidth: 0,
          }}
        />
      </div>
      {errors.phone && <span style={ERR}>{errors.phone}</span>}
    </div>
  );
}

// ── File upload ───────────────────────────────────────────────────
interface FileUploadFieldProps {
  label: string;
  value: File | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  fieldKey: keyof FormData;
  hint?: string;
  errors: Record<string, string>;
  onFileChange: (key: keyof FormData, file: File | null) => void;
}

function FileUploadField({ label, value, inputRef, fieldKey, hint, errors, onFileChange }: FileUploadFieldProps) {
  return (
    <div style={FW}>
      <label style={LABEL}>{label} <R /></label>
      <div style={{
        display: "flex",
        height: "52px",
        border: `1px solid ${errors[fieldKey as string] ? "#e53e3e" : "#e0e4ea"}`,
        borderRadius: "4px",
        backgroundColor: "#f5f7fa",
        overflow: "hidden",
      }}>
        <span style={{
          flex: 1, padding: "0 12px",
          fontFamily: "'Inter',sans-serif", fontSize: "13px",
          color: value ? "#292929" : "#9ca3af",
          display: "flex", alignItems: "center",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          minWidth: 0,
        }}>
          {value ? value.name : "No file chosen"}
        </span>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          style={{
            padding: "0 14px", height: "100%",
            backgroundColor: "#292929", color: "#fff",
            border: "none", fontFamily: "'Inter',sans-serif",
            fontSize: "13px", cursor: "pointer", flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          Choose File
        </button>
        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={e => onFileChange(fieldKey, e.target.files?.[0] || null)}
        />
      </div>
      {hint && (
        <p style={{
          fontSize: "12px", color: "#64748b",
          fontFamily: "'Inter',sans-serif",
          lineHeight: "1.6em", marginTop: "7px",
        }}>
          {hint}
        </p>
      )}
      {errors[fieldKey as string] && (
        <span style={ERR}>{errors[fieldKey as string]}</span>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────
export default function ApplicationForm() {
  const [step,      setStep]      = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors,    setErrors]    = useState<Record<string, string>>({});
  const [focused,   setFocused]   = useState("");
  const [refNum,    setRefNum]    = useState("");

  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "",
    countryCode: "+44", dateOfBirth: "", studentType: "", address: "",
    school: "", yearOfCompletion: "", highestQualification: "",
    currentStatus: "", areaOfStudy: "", degreeLevel: "",
    passportFile: null, cvFile: null, howDidYouFindUs: "",
    fullName: "", additionalInfo: "", privacyAccepted: false,
  });

  const passportRef = useRef<HTMLInputElement | null>(null);
  const cvRef       = useRef<HTMLInputElement | null>(null);

  const set = (k: keyof FormData, v: string | boolean | File | null) => {
    setForm(p => ({ ...p, [k]: v }));
    setErrors(p => { const n = { ...p }; delete n[k]; return n; });
  };

  const setName = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    set(k, val);
  };

  const setPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^\d\s\-]/g, "");
    set("phone", val);
  };

  const si = (name: string, extra?: React.CSSProperties): React.CSSProperties => ({
    ...INPUT,
    borderColor: focused === name ? "#149AB5" : errors[name] ? "#e53e3e" : "#e0e4ea",
    boxShadow:   focused === name ? "0 0 0 3px rgba(20,154,181,0.12)" : "none",
    ...extra,
  });

  const fo = (n: string) => () => setFocused(n);
  const fb = () => setFocused("");

  // ── Validation ────────────────────────────────────────────────
  const validate = () => {
    const e: Record<string, string> = {};

    if (step === 1) {
      if (!form.firstName.trim())
        e.firstName = "First name is required";
      else if (!/^[a-zA-Z\s]+$/.test(form.firstName))
        e.firstName = "First name must contain only letters";

      if (!form.lastName.trim())
        e.lastName = "Last name is required";
      else if (!/^[a-zA-Z\s]+$/.test(form.lastName))
        e.lastName = "Last name must contain only letters";

      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
        e.email = "A valid email address is required";

      if (!form.phone.trim()) {
        e.phone = "Phone number is required";
      } else {
        const digits = form.phone.replace(/\D/g, "");
        if (digits.length < 6 || digits.length > 15)
          e.phone = "Please enter a valid phone number";
      }

      if (!form.dateOfBirth)
        e.dateOfBirth = "Date of birth is required";

      if (!form.studentType)
        e.studentType = "Please select a student type";

      if (!form.address.trim())
        e.address = "Address is required";
    }

    if (step === 2) {
      if (!form.school.trim())               e.school               = "School name is required";
      if (!form.yearOfCompletion.trim())      e.yearOfCompletion     = "Year of completion is required";
      if (!form.highestQualification.trim()) e.highestQualification = "Highest qualification is required";
      if (!form.currentStatus)               e.currentStatus        = "Please select your current status";
    }

    if (step === 3) {
      if (!form.areaOfStudy) e.areaOfStudy = "Please select an area of study";
      if (!form.degreeLevel) e.degreeLevel = "Please select a degree level";
    }

    if (step === 4) {
      if (!form.passportFile)    e.passportFile    = "Please upload your passport or birth certificate";
      if (!form.cvFile)          e.cvFile          = "Please upload your CV or resume";
      if (!form.howDidYouFindUs) e.howDidYouFindUs = "Please tell us how you found us";
    }

    if (step === 5) {
      if (!form.fullName.trim())
        e.fullName = "Full name is required";
      else if (!/^[a-zA-Z\s]+$/.test(form.fullName))
        e.fullName = "Full name must contain only letters";

      if (!form.privacyAccepted)
        e.privacyAccepted = "You must accept the privacy policy to submit";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validate()) {
      setStep(s => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const prev = () => {
    setStep(s => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const submit = () => {
    if (validate()) {
      setRefNum("PL-" + Date.now().toString().slice(-6));
      setSubmitted(true);
    }
  };

  // ── Render ────────────────────────────────────────────────────
  return (
    <>
      {/* ── Responsive CSS ── */}
      <style>{`
        /* ── Form section ── */
        .af-section {
          background-color: #ffffff;
          padding: 60px 60px 80px;
          margin-top: 80px;
        }
        .af-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── Two-column grid row ── */
        .af-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        /* ── Step 4 half-width "how did you find us" ── */
        .af-half {
          max-width: calc(50% - 12px);
        }

        /* ── Progress bar ── */
        .af-progress-track {
          position: absolute;
          top: 18px; left: 18px; right: 18px;
          height: 2px;
          background-color: #e5e7eb;
          z-index: 0;
        }
        .af-progress-fill {
          position: absolute;
          top: 18px; left: 18px;
          height: 2px;
          background-color: #22c55e;
          z-index: 1;
          transition: width 0.4s ease;
        }
        .af-progress-dots {
          display: flex;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }
        .af-step-dot {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .af-step-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: #9ca3af;
          text-align: center;
          max-width: 80px;
          line-height: 1.3;
          white-space: nowrap;
        }
        .af-step-label.active {
          color: #22c55e;
          font-weight: 600;
        }

        /* ── Nav buttons ── */
        .af-nav {
          display: flex;
          gap: 12px;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid #f3f4f6;
          flex-wrap: wrap;
        }
        .af-nav button {
          flex-shrink: 0;
        }

        /* ── Success modal ── */
        .af-modal-box {
          background-color: #fff;
          padding: 56px 48px;
          max-width: 460px;
          width: 100%;
          text-align: center;
          border-top: 4px solid #149AB5;
          border-radius: 8px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.2);
        }

        /* ══════════════════════════════════════
           TABLET  ≤ 1024px
        ══════════════════════════════════════ */
        @media (max-width: 1024px) {
          .af-section {
            padding: 60px 40px 72px;
            margin-top: 90px;
          }
        }

        /* ══════════════════════════════════════
           MOBILE  ≤ 640px
        ══════════════════════════════════════ */
        @media (max-width: 640px) {
          .af-section {
            padding: 40px 16px 60px;
            margin-top: 90px;
          }

          /* Stack all two-column rows to single column */
          .af-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          /* Step 4 "how did you find us" — full width on mobile */
          .af-half {
            max-width: 100%;
          }

          /* Hide progress step labels on mobile (dots only) */
          .af-step-label {
            display: none;
          }

          /* Tighten progress bar dot spacing */
          .af-progress-track,
          .af-progress-fill {
            top: 14px;
          }

          /* Smaller dots */
          .af-dot-circle {
            width: 28px !important;
            height: 28px !important;
          }

          /* Full-width nav buttons on mobile */
          .af-nav {
            flex-direction: column;
          }
          .af-nav button {
            width: 100%;
            justify-content: center;
          }

          /* Modal tighter on small screens */
          .af-modal-box {
            padding: 36px 20px;
          }

          /* Intro text smaller */
          .af-intro {
            font-size: 15px !important;
          }
        }

        /* ══════════════════════════════════════
           VERY SMALL  ≤ 390px
        ══════════════════════════════════════ */
        @media (max-width: 390px) {
          .af-section {
            padding: 32px 12px 48px;
            margin-top: 60px;
          }
        }
      `}</style>

      <section className="af-section">
        <div className="af-inner">

          {/* Intro */}
          <p className="af-intro" style={{
            fontFamily: "'Inter',sans-serif", fontSize: "18px",
            color: "#000000", lineHeight: "1.7em",
            textAlign: "center", marginBottom: "40px", fontWeight: "400",
          }}>
            Seeking guidance on your higher education, or looking to secure your Masters at
            <br />a top university? Start your application today.
          </p>

          {/* ── Progress bar ── */}
          <div style={{ position: "relative", marginBottom: "52px" }}>
            <div className="af-progress-track" />
            <div
              className="af-progress-fill"
              style={{ width: `${((step - 1) / 4) * 100}%` }}
            />
            <div className="af-progress-dots">
              {STEPS.map(s => {
                const done = s.number < step;
                const cur  = s.number === step;
                return (
                  <div key={s.number} className="af-step-dot">
                    <div
                      className="af-dot-circle"
                      style={{
                        width: "36px", height: "36px", borderRadius: "50%",
                        backgroundColor: done || cur ? "#22c55e" : "#ffffff",
                        border: `2px solid ${done || cur ? "#22c55e" : "#d1d5db"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.3s",
                        boxShadow: cur ? "0 0 0 4px rgba(34,197,94,0.15)" : "none",
                      }}
                    >
                      {done
                        ? (
                          <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                            <path d="M1.5 5.5L5 9L12.5 1.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <span style={{
                            fontFamily: "'Inter',sans-serif", fontSize: "13px",
                            fontWeight: "600", color: cur ? "#fff" : "#9ca3af",
                          }}>
                            {s.number}
                          </span>
                        )
                      }
                    </div>
                    {/* Step label — hidden on mobile via CSS */}
                    <span className={`af-step-label${cur ? " active" : ""}`}>
                      {s.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step title */}
          <h2 style={{
            fontFamily: "'Work Sans',sans-serif", fontSize: "22px",
            fontWeight: "700", color: "#292929",
            marginBottom: "32px", letterSpacing: "-0.01em",
          }}>
            {STEPS[step - 1].title}
          </h2>

          {/* ════════ STEP 1 — Applicant Details ════════ */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

              <div className="af-row">
                <div style={FW}>
                  <label style={LABEL}>First name <R /></label>
                  <input
                    style={si("firstName")}
                    type="text"
                    placeholder="Enter first name"
                    value={form.firstName}
                    onChange={setName("firstName")}
                    onFocus={fo("firstName")}
                    onBlur={fb}
                  />
                  {errors.firstName && <span style={ERR}>{errors.firstName}</span>}
                </div>
                <div style={FW}>
                  <label style={LABEL}>Last name <R /></label>
                  <input
                    style={si("lastName")}
                    type="text"
                    placeholder="Enter last name"
                    value={form.lastName}
                    onChange={setName("lastName")}
                    onFocus={fo("lastName")}
                    onBlur={fb}
                  />
                  {errors.lastName && <span style={ERR}>{errors.lastName}</span>}
                </div>
              </div>

              <div className="af-row">
                <div style={FW}>
                  <label style={LABEL}>Email address <R /></label>
                  <input
                    style={si("email")}
                    type="email"
                    placeholder="Enter email address"
                    value={form.email}
                    onChange={e => set("email", e.target.value)}
                    onFocus={fo("email")}
                    onBlur={fb}
                  />
                  {errors.email && <span style={ERR}>{errors.email}</span>}
                </div>
                <div style={FW}>
                  <label style={LABEL}>Phone number <R /></label>
                  <PhoneField
                    form={form}
                    focused={focused}
                    errors={errors}
                    onFocus={fo}
                    onBlur={fb}
                    onCountryChange={v => set("countryCode", v)}
                    onPhoneChange={setPhone}
                  />
                </div>
              </div>

              <div className="af-row">
                <div style={FW}>
                  <label style={LABEL}>Date of birth <R /></label>
                  <input
                    style={si("dateOfBirth")}
                    type="date"
                    value={form.dateOfBirth}
                    onChange={e => set("dateOfBirth", e.target.value)}
                    onFocus={fo("dateOfBirth")}
                    onBlur={fb}
                  />
                  {errors.dateOfBirth && <span style={ERR}>{errors.dateOfBirth}</span>}
                </div>
                <div style={FW}>
                  <label style={LABEL}>Student type <R /></label>
                  <Sel name="studentType" value={form.studentType} onChange={v => set("studentType", v)} focused={focused} errors={errors} onFocus={fo} onBlur={fb}>
                    <option value="">Please select</option>
                    <option>UK Citizen</option>
                    <option>EU Citizen</option>
                    <option>International / Foreign Student</option>
                    <option>U.S. Permanent Resident (Green Card Holder)</option>
                    <option>International Student Transferring Within UK/EU</option>
                  </Sel>
                </div>
              </div>

              <div style={FW}>
                <label style={LABEL}>Address <R /></label>
                <textarea
                  style={{
                    ...si("address"),
                    height: "120px",
                    padding: "14px 16px",
                    resize: "vertical" as const,
                  }}
                  placeholder="Enter your full address"
                  value={form.address}
                  onChange={e => set("address", e.target.value)}
                  onFocus={fo("address")}
                  onBlur={fb}
                />
                {errors.address && <span style={ERR}>{errors.address}</span>}
              </div>

            </div>
          )}

          {/* ════════ STEP 2 — Education Records ════════ */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h3 style={SECTION}>Academic Background</h3>
              <div className="af-row">
                <div style={FW}>
                  <label style={LABEL}>School <R /></label>
                  <input style={si("school")} type="text" placeholder="Name of school or college"
                    value={form.school} onChange={e => set("school", e.target.value)}
                    onFocus={fo("school")} onBlur={fb} />
                  {errors.school && <span style={ERR}>{errors.school}</span>}
                </div>
                <div style={FW}>
                  <label style={LABEL}>Year of completion <R /></label>
                  <input style={si("yearOfCompletion")} type="text" placeholder="e.g. 2022"
                    value={form.yearOfCompletion}
                    onChange={e => set("yearOfCompletion", e.target.value.replace(/\D/g, ""))}
                    onFocus={fo("yearOfCompletion")} onBlur={fb} />
                  {errors.yearOfCompletion && <span style={ERR}>{errors.yearOfCompletion}</span>}
                </div>
              </div>
              <div className="af-row">
                <div style={FW}>
                  <label style={LABEL}>Highest qualification <R /></label>
                  <input style={si("highestQualification")} type="text"
                    placeholder="Highest qualification achieved or currently completing?"
                    value={form.highestQualification}
                    onChange={e => set("highestQualification", e.target.value)}
                    onFocus={fo("highestQualification")} onBlur={fb} />
                  {errors.highestQualification && <span style={ERR}>{errors.highestQualification}</span>}
                </div>
                <div style={FW}>
                  <label style={LABEL}>Current status <R /></label>
                  <Sel name="currentStatus" value={form.currentStatus} onChange={v => set("currentStatus", v)} focused={focused} errors={errors} onFocus={fo} onBlur={fb}>
                    <option value="">Please select</option>
                    <option>Studying</option>
                    <option>Working</option>
                    <option>Other</option>
                  </Sel>
                </div>
              </div>
            </div>
          )}

          {/* ════════ STEP 3 — Education Details ════════ */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h3 style={SECTION}>Study Preferences</h3>
              <div className="af-row">
                <div style={FW}>
                  <label style={LABEL}>Select area of study <R /></label>
                  <Sel name="areaOfStudy" value={form.areaOfStudy} onChange={v => set("areaOfStudy", v)} focused={focused} errors={errors} onFocus={fo} onBlur={fb}>
                    <option value="">Please select</option>
                    <option>Business & Administration</option>
                    <option>Computer Science & A.I.</option>
                    <option>Accounting and Finance</option>
                    <option>Art & Design</option>
                    <option>Media Management</option>
                    <option>Media and Communication</option>
                  </Sel>
                </div>
                <div style={FW}>
                  <label style={LABEL}>Degree level <R /></label>
                  <Sel name="degreeLevel" value={form.degreeLevel} onChange={v => set("degreeLevel", v)} focused={focused} errors={errors} onFocus={fo} onBlur={fb}>
                    <option value="">Please select</option>
                    <option>Bachelor&apos;s Degrees</option>
                    <option>Master&apos;s Degrees</option>
                    <option>Undergraduate Degrees</option>
                  </Sel>
                </div>
              </div>
            </div>
          )}

          {/* ════════ STEP 4 — Documentation ════════ */}
          {step === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h3 style={SECTION}>Upload Documents</h3>
              <div className="af-row">
                <FileUploadField
                  label="Upload passport or birth documentation"
                  value={form.passportFile}
                  inputRef={passportRef}
                  fieldKey="passportFile"
                  errors={errors}
                  onFileChange={(key, file) => set(key, file)}
                  hint="Please upload a VERIFIED copy of your Passport or Birth Certificate. VERIFIED means the original document has been sighted & the copy dated and signed by an authorised person."
                />
                <FileUploadField
                  label="Upload Curriculum Vitae (CV) or Resume"
                  value={form.cvFile}
                  inputRef={cvRef}
                  fieldKey="cvFile"
                  errors={errors}
                  onFileChange={(key, file) => set(key, file)}
                  hint="Upload your CV or Resume in PDF format."
                />
              </div>
              {/* af-half becomes full-width on mobile via CSS */}
              <div className="af-half">
                <label style={LABEL}>How did you find us? <R /></label>
                <Sel name="howDidYouFindUs" value={form.howDidYouFindUs} onChange={v => set("howDidYouFindUs", v)} focused={focused} errors={errors} onFocus={fo} onBlur={fb}>
                  <option value="">- Select -</option>
                  <option>Google</option>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Friends / Family</option>
                  <option>Other</option>
                </Sel>
              </div>
            </div>
          )}

          {/* ════════ STEP 5 — Declaration ════════ */}
          {step === 5 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h3 style={SECTION}>Review & Submit</h3>

              {/* Application summary */}
              <div style={{
                backgroundColor: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                padding: "20px 24px",
              }}>
                <p style={{
                  fontFamily: "'Work Sans',sans-serif", fontSize: "11px",
                  fontWeight: "700", color: "#149AB5",
                  letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px",
                }}>
                  Application Summary
                </p>
                {[
                  { l: "Name",          v: `${form.firstName} ${form.lastName}` },
                  { l: "Email",         v: form.email },
                  { l: "Student Type",  v: form.studentType },
                  { l: "Area of Study", v: form.areaOfStudy },
                  { l: "Degree Level",  v: form.degreeLevel },
                ].map(i => (
                  <div key={i.l} style={{ display: "flex", gap: "12px", marginBottom: "8px", flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", color: "#6b7280", minWidth: "110px" }}>{i.l}:</span>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", color: "#292929", fontWeight: "500" }}>{i.v || "—"}</span>
                  </div>
                ))}
              </div>

              <div style={FW}>
                <label style={LABEL}>Application full name <R /></label>
                <input
                  style={si("fullName")}
                  type="text"
                  placeholder="Enter your full legal name"
                  value={form.fullName}
                  onChange={setName("fullName")}
                  onFocus={fo("fullName")}
                  onBlur={fb}
                />
                {errors.fullName && <span style={ERR}>{errors.fullName}</span>}
              </div>

              <div style={FW}>
                <label style={LABEL}>Additional information</label>
                <textarea
                  style={{
                    ...si("additionalInfo"),
                    height: "120px",
                    padding: "14px 16px",
                    resize: "vertical" as const,
                  }}
                  placeholder="Any additional information..."
                  value={form.additionalInfo}
                  onChange={e => set("additionalInfo", e.target.value)}
                  onFocus={fo("additionalInfo")}
                  onBlur={fb}
                />
              </div>

              <div style={{
                backgroundColor: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                padding: "20px 24px",
              }}>
                <p style={{
                  fontFamily: "'Inter',sans-serif", fontSize: "14px",
                  fontWeight: "500", color: "#292929", marginBottom: "12px",
                }}>
                  Privacy Policy Acceptance <R />
                </p>
                <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={form.privacyAccepted}
                    onChange={e => set("privacyAccepted", e.target.checked)}
                    style={{
                      width: "16px", height: "16px", marginTop: "2px",
                      accentColor: "#149AB5", cursor: "pointer", flexShrink: 0,
                    }}
                  />
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", color: "#545454", lineHeight: "1.6em" }}>
                    By submitting this form, you agree to Prime Leed privacy notice.
                  </span>
                </label>
                {errors.privacyAccepted && (
                  <span style={{ ...ERR, marginTop: "8px" }}>{errors.privacyAccepted}</span>
                )}
              </div>
            </div>
          )}

          {/* ── Navigation buttons ── */}
          <div className="af-nav">
            {step > 1 && (
              <button
                onClick={prev}
                style={{ ...BTN, backgroundColor: "#6b7280" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4b5563")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#6b7280")}
              >
                Previous
              </button>
            )}
            {step < 5 ? (
              <button
                onClick={next}
                style={BTN}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#292929")}
              >
                Next
              </button>
            ) : (
              <button
                onClick={submit}
                style={{ ...BTN, backgroundColor: "#149AB5" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#117a8f")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#149AB5")}
              >
                Submit Application
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M1 7H17M11 1L17 7L11 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>

        </div>

        {/* ── Success Modal ── */}
        {submitted && (
          <div style={{
            position: "fixed", inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 1000, padding: "20px",
          }}>
            <div className="af-modal-box">
              <div style={{
                width: "68px", height: "68px", borderRadius: "50%",
                backgroundColor: "#f0fdf4", border: "2px solid #22c55e",
                margin: "0 auto 24px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                  <path d="M2 11L10 19L26 2" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <h2 style={{
                fontFamily: "'Work Sans',sans-serif", fontSize: "24px",
                fontWeight: "800", color: "#292929", marginBottom: "12px",
              }}>
                Application Submitted!
              </h2>

              <p style={{
                fontFamily: "'Inter',sans-serif", fontSize: "14px",
                color: "#545454", lineHeight: "1.7em", marginBottom: "28px",
              }}>
                Thank you, <strong>{form.firstName} {form.lastName}</strong>.<br />
                Our admissions team will get back to you within <strong>2 working days</strong>.
              </p>

              <div style={{
                backgroundColor: "#f8fafc", padding: "14px 20px",
                marginBottom: "28px", borderRadius: "4px",
              }}>
                <p style={{
                  fontSize: "11px", color: "#6b7280",
                  fontFamily: "'Inter',sans-serif",
                  marginBottom: "4px", letterSpacing: "1px", textTransform: "uppercase",
                }}>
                  Reference Number
                </p>
                <p style={{
                  fontFamily: "'Work Sans',sans-serif",
                  fontSize: "18px", fontWeight: "700", color: "#149AB5",
                }}>
                  {refNum}
                </p>
              </div>

              <button
                onClick={() => { setSubmitted(false); setStep(1); setRefNum(""); }}
                style={{ ...BTN, width: "100%", justifyContent: "center" }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}