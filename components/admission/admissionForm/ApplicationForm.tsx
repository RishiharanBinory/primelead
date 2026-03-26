// "use client";
// // components/admission/ApplicationForm.tsx
// //
// // A fully functioning 5-step multi-level application form.
// // Features:
// // - Progress bar showing which step the user is on
// // - Form data persists when navigating back with Previous button
// // - Validation on each step before allowing Next
// // - Success popup modal on final submission
// // - All brand colors: #149AB5 (teal), #FFC501 (yellow), #292929 (dark)

// import { useState, useRef } from "react";

// // ── TYPE DEFINITIONS ──
// // Defining the shape of all form data upfront makes the code
// // predictable and catches errors at compile time rather than runtime.
// interface FormData {
//   // Step 1 — Applicant Details
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   dateOfBirth: string;
//   studentType: string;
//   address: string;
//   // Step 2 — Education Records
//   school: string;
//   yearOfCompletion: string;
//   highestQualification: string;
//   currentStatus: string;
//   // Step 3 — Education Details
//   areaOfStudy: string;
//   degreeLevel: string;
//   // Step 4 — Documentation
//   passportFile: File | null;
//   cvFile: File | null;
//   howDidYouFindUs: string;
//   // Step 5 — Declaration
//   fullName: string;
//   additionalInfo: string;
//   privacyAccepted: boolean;
// }

// // ── STEP CONFIGURATION ──
// // All step metadata lives here — titles, subtitles, and step numbers.
// // Adding or renaming a step only requires changing this array.
// const STEPS = [
//   { number: 1, title: "Applicant Details",              subtitle: "Tell us about yourself" },
//   { number: 2, title: "Education Records & Achievements", subtitle: "Your academic background" },
//   { number: 3, title: "Education Details",              subtitle: "What you want to study" },
//   { number: 4, title: "Documentation",                  subtitle: "Upload your documents" },
//   { number: 5, title: "Declaration",                    subtitle: "Review and submit" },
// ];

// // ── SHARED STYLE OBJECTS ──
// // Defining styles once and reusing them keeps the component DRY
// // and makes global style changes a single-line edit.
// const inputStyle: React.CSSProperties = {
//   width: "100%",
//   padding: "12px 16px",
//   border: "1.5px solid #e0e0e0",
//   fontFamily: "'Inter', sans-serif",
//   fontSize: "15px",
//   color: "#292929",
//   outline: "none",
//   backgroundColor: "#ffffff",
//   transition: "border-color 0.2s ease",
// };

// const labelStyle: React.CSSProperties = {
//   fontFamily: "'Work Sans', sans-serif",
//   fontSize: "13px",
//   fontWeight: "600",
//   color: "#292929",
//   marginBottom: "6px",
//   display: "block",
//   letterSpacing: "0.02em",
// };

// const fieldStyle: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: "0",
// };

// const errorStyle: React.CSSProperties = {
//   fontFamily: "'Inter', sans-serif",
//   fontSize: "12px",
//   color: "#e53e3e",
//   marginTop: "4px",
// };

// export default function ApplicationForm() {
//   // ── STATE ──
//   const [currentStep, setCurrentStep] = useState(1);
//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   // All form data lives in one state object.
//   // This is why Previous button preserves entered data —
//   // the data never gets reset when moving between steps.
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "", lastName: "", email: "", phone: "",
//     dateOfBirth: "", studentType: "", address: "",
//     school: "", yearOfCompletion: "", highestQualification: "", currentStatus: "",
//     areaOfStudy: "", degreeLevel: "",
//     passportFile: null, cvFile: null, howDidYouFindUs: "",
//     fullName: "", additionalInfo: "", privacyAccepted: false,
//   });

//   const passportRef = useRef<HTMLInputElement>(null);
//   const cvRef = useRef<HTMLInputElement>(null);

//   // ── HELPERS ──
//   const update = (field: keyof FormData, value: string | boolean | File | null) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     // Clear the error for this field as soon as the user starts typing
//     if (errors[field]) {
//       setErrors(prev => {
//         const next = { ...prev };
//         delete next[field];
//         return next;
//       });
//     }
//   };

//   // ── VALIDATION ──
//   // Each step validates only its own fields.
//   // Returns true if valid, false if there are errors.
//   const validate = (): boolean => {
//     const newErrors: Record<string, string> = {};

//     if (currentStep === 1) {
//       if (!formData.firstName.trim())   newErrors.firstName   = "First name is required";
//       if (!formData.lastName.trim())    newErrors.lastName    = "Last name is required";
//       if (!formData.email.trim())       newErrors.email       = "Email address is required";
//       else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
//       if (!formData.phone.trim())       newErrors.phone       = "Phone number is required";
//       if (!formData.dateOfBirth)        newErrors.dateOfBirth = "Date of birth is required";
//       if (!formData.studentType)        newErrors.studentType = "Please select a student type";
//       if (!formData.address.trim())     newErrors.address     = "Address is required";
//     }

//     if (currentStep === 2) {
//       if (!formData.school.trim())              newErrors.school              = "School name is required";
//       if (!formData.yearOfCompletion.trim())    newErrors.yearOfCompletion    = "Year of completion is required";
//       if (!formData.highestQualification.trim()) newErrors.highestQualification = "Highest qualification is required";
//       if (!formData.currentStatus)             newErrors.currentStatus       = "Please select your current status";
//     }

//     if (currentStep === 3) {
//       if (!formData.areaOfStudy)  newErrors.areaOfStudy  = "Please select an area of study";
//       if (!formData.degreeLevel)  newErrors.degreeLevel  = "Please select a degree level";
//     }

//     if (currentStep === 4) {
//       if (!formData.passportFile)     newErrors.passportFile     = "Please upload your passport or birth certificate";
//       if (!formData.cvFile)           newErrors.cvFile           = "Please upload your CV or Resume";
//       if (!formData.howDidYouFindUs)  newErrors.howDidYouFindUs  = "Please tell us how you found us";
//     }

//     if (currentStep === 5) {
//       if (!formData.fullName.trim())    newErrors.fullName    = "Full name is required";
//       if (!formData.privacyAccepted)    newErrors.privacyAccepted = "You must accept the privacy policy";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validate()) {
//       setCurrentStep(prev => Math.min(prev + 1, 5));
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const handlePrev = () => {
//     setCurrentStep(prev => Math.max(prev - 1, 1));
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleSubmit = () => {
//     if (validate()) {
//       setSubmitted(true);
//     }
//   };

//   // ── PROGRESS BAR ──
//   const progressPercent = ((currentStep - 1) / (STEPS.length - 1)) * 100;

//   // ── RENDER ──
//   return (
//     <section style={{ backgroundColor: "#f8f9fa", padding: "60px 20px" }}>
//       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

//         {/* ── PROGRESS INDICATOR ── */}
//         <div style={{ marginBottom: "40px" }}>

//           {/* Step labels row */}
//           <div style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "12px",
//           }}>
//             {STEPS.map(step => (
//               <div
//                 key={step.number}
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   gap: "6px",
//                   flex: 1,
//                 }}
//               >
//                 {/* Step circle */}
//                 <div style={{
//                   width: "36px",
//                   height: "36px",
//                   borderRadius: "50%",
//                   backgroundColor:
//                     step.number < currentStep  ? "#149AB5" :
//                     step.number === currentStep ? "#149AB5" : "#e0e0e0",
//                   border: step.number === currentStep
//                     ? "3px solid #149AB5"
//                     : "3px solid transparent",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxShadow: step.number === currentStep
//                     ? "0 0 0 4px rgba(20,154,181,0.15)"
//                     : "none",
//                   transition: "all 0.3s ease",
//                 }}>
//                   {step.number < currentStep ? (
//                     // Checkmark for completed steps
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                       <path d="M2 7L5.5 10.5L12 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   ) : (
//                     <span style={{
//                       fontFamily: "'Work Sans', sans-serif",
//                       fontSize: "13px",
//                       fontWeight: "700",
//                       color: step.number === currentStep ? "#ffffff" : "#aaaaaa",
//                     }}>
//                       {step.number}
//                     </span>
//                   )}
//                 </div>

//                 {/* Step label — hidden on small screens via font size */}
//                 <span style={{
//                   fontFamily: "'Inter', sans-serif",
//                   fontSize: "10px",
//                   fontWeight: step.number === currentStep ? "600" : "400",
//                   color: step.number === currentStep ? "#149AB5" :
//                          step.number < currentStep ? "#292929" : "#aaaaaa",
//                   textAlign: "center",
//                   lineHeight: "1.3em",
//                   maxWidth: "80px",
//                 }}>
//                   {step.title}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Progress bar track */}
//           <div style={{
//             height: "4px",
//             backgroundColor: "#e0e0e0",
//             borderRadius: "2px",
//             overflow: "hidden",
//           }}>
//             <div style={{
//               height: "100%",
//               width: `${progressPercent}%`,
//               backgroundColor: "#149AB5",
//               borderRadius: "2px",
//               transition: "width 0.4s ease",
//             }} />
//           </div>

//           {/* Current step info */}
//           <div style={{ marginTop: "20px" }}>
//             <p style={{
//               fontFamily: "'Work Sans', sans-serif",
//               fontSize: "11px",
//               fontWeight: "700",
//               color: "#149AB5",
//               letterSpacing: "4px",
//               textTransform: "uppercase",
//               marginBottom: "6px",
//             }}>
//               Step {currentStep} of {STEPS.length}
//             </p>
//             <h2 style={{
//               fontFamily: "'Work Sans', sans-serif",
//               fontSize: "28px",
//               fontWeight: "800",
//               color: "#292929",
//               lineHeight: "1.2em",
//               margin: 0,
//             }}>
//               {STEPS[currentStep - 1].title}
//             </h2>
//             <p style={{
//               fontFamily: "'Inter', sans-serif",
//               fontSize: "14px",
//               color: "#888",
//               marginTop: "4px",
//             }}>
//               {STEPS[currentStep - 1].subtitle}
//             </p>
//           </div>
//         </div>

//         {/* ── FORM CARD ── */}
//         <div style={{
//           backgroundColor: "#ffffff",
//           border: "1px solid #e8e8e8",
//           borderTop: "4px solid #149AB5",
//           padding: "40px",
//           boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
//         }}>

//           {/* ════════════════════════════════ */}
//           {/* STEP 1 — Applicant Details       */}
//           {/* ════════════════════════════════ */}
//           {currentStep === 1 && (
//             <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
//                 <div style={fieldStyle}>
//                   <label style={labelStyle}>First Name *</label>
//                   <input style={inputStyle} type="text" placeholder="John"
//                     value={formData.firstName}
//                     onChange={e => update("firstName", e.target.value)} />
//                   {errors.firstName && <span style={errorStyle}>{errors.firstName}</span>}
//                 </div>
//                 <div style={fieldStyle}>
//                   <label style={labelStyle}>Last Name *</label>
//                   <input style={inputStyle} type="text" placeholder="Smith"
//                     value={formData.lastName}
//                     onChange={e => update("lastName", e.target.value)} />
//                   {errors.lastName && <span style={errorStyle}>{errors.lastName}</span>}
//                 </div>
//               </div>

//               <div style={fieldStyle}>
//                 <label style={labelStyle}>Email Address *</label>
//                 <input style={inputStyle} type="email" placeholder="john@example.com"
//                   value={formData.email}
//                   onChange={e => update("email", e.target.value)} />
//                 {errors.email && <span style={errorStyle}>{errors.email}</span>}
//               </div>

//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
//                 <div style={fieldStyle}>
//                   <label style={labelStyle}>Phone Number *</label>
//                   <input style={inputStyle} type="tel" placeholder="+44 7700 000000"
//                     value={formData.phone}
//                     onChange={e => update("phone", e.target.value)} />
//                   {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
//                 </div>
//                 <div style={fieldStyle}>
//                   <label style={labelStyle}>Date of Birth *</label>
//                   <input style={inputStyle} type="date"
//                     value={formData.dateOfBirth}
//                     onChange={e => update("dateOfBirth", e.target.value)} />
//                   {errors.dateOfBirth && <span style={errorStyle}>{errors.dateOfBirth}</span>}
//                 </div>
//               </div>

//               <div style={fieldStyle}>
//                 <label style={labelStyle}>Student Type *</label>
//                 <select style={inputStyle}
//                   value={formData.studentType}
//                   onChange={e => update("studentType", e.target.value)}>
//                   <option value="">Please select</option>
//                   <option>UK Citizen</option>
//                   <option>EU Citizen</option>
//                   <option>International / Foreign Student</option>
//                   <option>U.S. Permanent Resident (Green Card Holder)</option>
//                   <option>International Student Transferring Within UK/EU</option>
//                 </select>
//                 {errors.studentType && <span style={errorStyle}>{errors.studentType}</span>}
//               </div>

//               <div style={fieldStyle}>
//                 <label style={labelStyle}>Address *</label>
//                 <textarea style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
//                   placeholder="Your full address"
//                   value={formData.address}
//                   onChange={e => update("address", e.target.value)} />
//                 {errors.address && <span style={errorStyle}>{errors.address}</span>}
//               </div>
//             </div>
//           )}

//           {/* ════════════════════════════════════ */}
//           {/* STEP 2 — Education Records           */}
//           {/* ════════════════════════════════════ */}
//           {currentStep === 2 && (
//             <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//               <div style={fieldStyle}>
//                 <label style={labelStyle}>School *</label>
//                 <input style={inputStyle} type="text" placeholder="Name of your school or college"
//                   value={formData.school}
//                   onChange={e => update("school", e.target.value)} />
//                 {errors.school && <span style={errorStyle}>{errors.school}</span>}
//               </div>

//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
//                 <div style={fieldStyle}>
//                   <label style={labelStyle}>Year of Completion *</label>
//                   <input style={inputStyle} type="text" placeholder="e.g. 2022"
//                     value={formData.yearOfCompletion}
//                     onChange={e => update("yearOfCompletion", e.target.value)} />
//                   {errors.yearOfCompletion && <span style={errorStyle}>{errors.yearOfCompletion}</span>}
//                 </div>
//                 <div style={fieldStyle}>
//                   <label style={labelStyle}>Highest Qualification *</label>
//                   <input style={inputStyle} type="text" placeholder="e.g. A-Levels, BTEC"
//                     value={formData.highestQualification}
//                     onChange={e => update("highestQualification", e.target.value)} />
//                   {errors.highestQualification && <span style={errorStyle}>{errors.highestQualification}</span>}
//                 </div>
//               </div>

//               <div style={fieldStyle}>
//                 <label style={labelStyle}>Current Status *</label>
//                 <select style={inputStyle}
//                   value={formData.currentStatus}
//                   onChange={e => update("currentStatus", e.target.value)}>
//                   <option value="">Please select</option>
//                   <option>Studying</option>
//                   <option>Working</option>
//                   <option>Other</option>
//                 </select>
//                 {errors.currentStatus && <span style={errorStyle}>{errors.currentStatus}</span>}
//               </div>
//             </div>
//           )}

//           {/* ════════════════════════════════ */}
//           {/* STEP 3 — Education Details       */}
//           {/* ════════════════════════════════ */}
//           {currentStep === 3 && (
//             <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//               <div style={fieldStyle}>
//                 <label style={labelStyle}>Select Area of Study *</label>
//                 <select style={inputStyle}
//                   value={formData.areaOfStudy}
//                   onChange={e => update("areaOfStudy", e.target.value)}>
//                   <option value="">Please select</option>
//                   <option>Business & Administration</option>
//                   <option>Computer Science & A.I.</option>
//                   <option>Accounting and Finance</option>
//                   <option>Art & Design</option>
//                   <option>Media Management</option>
//                   <option>Media and Communication</option>
//                 </select>
//                 {errors.areaOfStudy && <span style={errorStyle}>{errors.areaOfStudy}</span>}
//               </div>

//               <div style={fieldStyle}>
//                 <label style={labelStyle}>Degree Level *</label>
//                 <select style={inputStyle}
//                   value={formData.degreeLevel}
//                   onChange={e => update("degreeLevel", e.target.value)}>
//                   <option value="">Please select</option>
//                   <option>Bachelor's Degrees</option>
//                   <option>Master's Degrees</option>
//                   <option>Undergraduate Degrees</option>
//                 </select>
//                 {errors.degreeLevel && <span style={errorStyle}>{errors.degreeLevel}</span>}
//               </div>
//             </div>
//           )}

//           {/* ════════════════════════════════ */}
//           {/* STEP 4 — Documentation           */}
//           {/* ════════════════════════════════ */}
//           {currentStep === 4 && (
//             <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

//               {/* Passport upload */}
//               <div style={fieldStyle}>
//                 <label style={labelStyle}>Upload Passport or Birth Documentation *</label>
//                 <p style={{
//                   fontFamily: "'Inter', sans-serif",
//                   fontSize: "12px",
//                   color: "#888",
//                   marginBottom: "10px",
//                   lineHeight: "1.5em",
//                 }}>
//                   Please upload a VERIFIED copy of your Passport or Birth Certificate. PDF only.
//                 </p>
//                 <div
//                   onClick={() => passportRef.current?.click()}
//                   style={{
//                     border: `2px dashed ${formData.passportFile ? "#149AB5" : "#e0e0e0"}`,
//                     padding: "24px",
//                     textAlign: "center",
//                     cursor: "pointer",
//                     backgroundColor: formData.passportFile ? "rgba(20,154,181,0.04)" : "#fafafa",
//                     transition: "all 0.2s ease",
//                   }}
//                 >
//                   <input
//                     ref={passportRef}
//                     type="file"
//                     accept=".pdf"
//                     style={{ display: "none" }}
//                     onChange={e => {
//                       const file = e.target.files?.[0] || null;
//                       update("passportFile", file);
//                     }}
//                   />
//                   {formData.passportFile ? (
//                     <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#149AB5", fontWeight: "600" }}>
//                       ✓ {formData.passportFile.name}
//                     </p>
//                   ) : (
//                     <>
//                       <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "14px", fontWeight: "600", color: "#292929", marginBottom: "4px" }}>
//                         Click to upload
//                       </p>
//                       <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#aaa" }}>
//                         PDF files only
//                       </p>
//                     </>
//                   )}
//                 </div>
//                 {errors.passportFile && <span style={errorStyle}>{errors.passportFile}</span>}
//               </div>

//               {/* CV upload */}
//               <div style={fieldStyle}>
//                 <label style={labelStyle}>Upload Curriculum Vitae (CV) or Resume *</label>
//                 <div
//                   onClick={() => cvRef.current?.click()}
//                   style={{
//                     border: `2px dashed ${formData.cvFile ? "#149AB5" : "#e0e0e0"}`,
//                     padding: "24px",
//                     textAlign: "center",
//                     cursor: "pointer",
//                     backgroundColor: formData.cvFile ? "rgba(20,154,181,0.04)" : "#fafafa",
//                     transition: "all 0.2s ease",
//                   }}
//                 >
//                   <input
//                     ref={cvRef}
//                     type="file"
//                     accept=".pdf"
//                     style={{ display: "none" }}
//                     onChange={e => {
//                       const file = e.target.files?.[0] || null;
//                       update("cvFile", file);
//                     }}
//                   />
//                   {formData.cvFile ? (
//                     <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#149AB5", fontWeight: "600" }}>
//                       ✓ {formData.cvFile.name}
//                     </p>
//                   ) : (
//                     <>
//                       <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "14px", fontWeight: "600", color: "#292929", marginBottom: "4px" }}>
//                         Click to upload
//                       </p>
//                       <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#aaa" }}>
//                         PDF files only
//                       </p>
//                     </>
//                   )}
//                 </div>
//                 {errors.cvFile && <span style={errorStyle}>{errors.cvFile}</span>}
//               </div>

//               <div style={fieldStyle}>
//                 <label style={labelStyle}>How Did You Find Us? *</label>
//                 <select style={inputStyle}
//                   value={formData.howDidYouFindUs}
//                   onChange={e => update("howDidYouFindUs", e.target.value)}>
//                   <option value="">Please select</option>
//                   <option>Google</option>
//                   <option>Facebook</option>
//                   <option>Instagram</option>
//                   <option>Friends / Family</option>
//                   <option>Other</option>
//                 </select>
//                 {errors.howDidYouFindUs && <span style={errorStyle}>{errors.howDidYouFindUs}</span>}
//               </div>
//             </div>
//           )}

//           {/* ════════════════════════════════ */}
//           {/* STEP 5 — Declaration             */}
//           {/* ════════════════════════════════ */}
//           {currentStep === 5 && (
//             <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

//               {/* Review summary */}
//               <div style={{
//                 backgroundColor: "#f8f9fa",
//                 border: "1px solid #e8e8e8",
//                 padding: "20px",
//                 marginBottom: "8px",
//               }}>
//                 <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "12px", fontWeight: "700", color: "#149AB5", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
//                   Application Summary
//                 </p>
//                 {[
//                   { label: "Name", value: `${formData.firstName} ${formData.lastName}` },
//                   { label: "Email", value: formData.email },
//                   { label: "Student Type", value: formData.studentType },
//                   { label: "Area of Study", value: formData.areaOfStudy },
//                   { label: "Degree Level", value: formData.degreeLevel },
//                 ].map(item => (
//                   <div key={item.label} style={{ display: "flex", gap: "12px", marginBottom: "6px" }}>
//                     <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#888", minWidth: "100px" }}>{item.label}:</span>
//                     <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#292929", fontWeight: "500" }}>{item.value || "—"}</span>
//                   </div>
//                 ))}
//               </div>

//               <div style={fieldStyle}>
//                 <label style={labelStyle}>Application Full Name *</label>
//                 <input style={inputStyle} type="text"
//                   placeholder="Enter your full legal name"
//                   value={formData.fullName}
//                   onChange={e => update("fullName", e.target.value)} />
//                 {errors.fullName && <span style={errorStyle}>{errors.fullName}</span>}
//               </div>

//               <div style={fieldStyle}>
//                 <label style={labelStyle}>Additional Information</label>
//                 <textarea
//                   style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
//                   placeholder="Any additional information you would like to share with us..."
//                   value={formData.additionalInfo}
//                   onChange={e => update("additionalInfo", e.target.value)}
//                 />
//               </div>

//               {/* Privacy policy checkbox */}
//               <div style={{
//                 backgroundColor: "rgba(20,154,181,0.04)",
//                 border: "1px solid rgba(20,154,181,0.2)",
//                 padding: "20px",
//               }}>
//                 <label style={{
//                   display: "flex",
//                   alignItems: "flex-start",
//                   gap: "12px",
//                   cursor: "pointer",
//                 }}>
//                   <input
//                     type="checkbox"
//                     checked={formData.privacyAccepted}
//                     onChange={e => update("privacyAccepted", e.target.checked)}
//                     style={{
//                       width: "18px",
//                       height: "18px",
//                       marginTop: "2px",
//                       accentColor: "#149AB5",
//                       flexShrink: 0,
//                     }}
//                   />
//                   <div>
//                     <p style={{
//                       fontFamily: "'Work Sans', sans-serif",
//                       fontSize: "14px",
//                       fontWeight: "700",
//                       color: "#292929",
//                       marginBottom: "4px",
//                     }}>
//                       Privacy Policy Acceptance *
//                     </p>
//                     <p style={{
//                       fontFamily: "'Inter', sans-serif",
//                       fontSize: "13px",
//                       color: "#545454",
//                       lineHeight: "1.6em",
//                     }}>
//                       By submitting this form, you agree to Prime Leed privacy notice.
//                     </p>
//                   </div>
//                 </label>
//                 {errors.privacyAccepted && <span style={{ ...errorStyle, marginTop: "8px", display: "block" }}>{errors.privacyAccepted}</span>}
//               </div>
//             </div>
//           )}

//           {/* ── NAVIGATION BUTTONS ── */}
//           <div style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginTop: "36px",
//             paddingTop: "24px",
//             borderTop: "1px solid #f0f0f0",
//           }}>
//             {/* Previous button — only shown from step 2 onwards */}
//             {currentStep > 1 ? (
//               <button
//                 onClick={handlePrev}
//                 style={{
//                   padding: "12px 28px",
//                   backgroundColor: "transparent",
//                   border: "1.5px solid #292929",
//                   color: "#292929",
//                   fontFamily: "'Work Sans', sans-serif",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   cursor: "pointer",
//                   letterSpacing: "0.03em",
//                   transition: "all 0.2s ease",
//                 }}
//                 onMouseEnter={e => {
//                   (e.currentTarget as HTMLElement).style.backgroundColor = "#292929";
//                   (e.currentTarget as HTMLElement).style.color = "#ffffff";
//                 }}
//                 onMouseLeave={e => {
//                   (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
//                   (e.currentTarget as HTMLElement).style.color = "#292929";
//                 }}
//               >
//                 ← Previous
//               </button>
//             ) : (
//               <div /> // Empty div to keep Next button right-aligned on step 1
//             )}

//             {/* Next or Submit button */}
//             {currentStep < 5 ? (
//               <button
//                 onClick={handleNext}
//                 style={{
//                   padding: "12px 36px",
//                   backgroundColor: "#149AB5",
//                   border: "none",
//                   color: "#ffffff",
//                   fontFamily: "'Work Sans', sans-serif",
//                   fontSize: "14px",
//                   fontWeight: "700",
//                   cursor: "pointer",
//                   letterSpacing: "0.03em",
//                   transition: "background-color 0.2s ease",
//                 }}
//                 onMouseEnter={e => {
//                   (e.currentTarget as HTMLElement).style.backgroundColor = "#117a8f";
//                 }}
//                 onMouseLeave={e => {
//                   (e.currentTarget as HTMLElement).style.backgroundColor = "#149AB5";
//                 }}
//               >
//                 Next Step →
//               </button>
//             ) : (
//               <button
//                 onClick={handleSubmit}
//                 style={{
//                   padding: "14px 40px",
//                   backgroundColor: "#FFC501",
//                   border: "none",
//                   color: "#292929",
//                   fontFamily: "'Work Sans', sans-serif",
//                   fontSize: "15px",
//                   fontWeight: "700",
//                   cursor: "pointer",
//                   letterSpacing: "0.03em",
//                   transition: "background-color 0.2s ease",
//                 }}
//                 onMouseEnter={e => {
//                   (e.currentTarget as HTMLElement).style.backgroundColor = "#e6b000";
//                 }}
//                 onMouseLeave={e => {
//                   (e.currentTarget as HTMLElement).style.backgroundColor = "#FFC501";
//                 }}
//               >
//                 Submit Application
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Step counter below the card */}
//         <p style={{
//           fontFamily: "'Inter', sans-serif",
//           fontSize: "12px",
//           color: "#aaa",
//           textAlign: "center",
//           marginTop: "16px",
//         }}>
//           {currentStep} of {STEPS.length} steps completed
//         </p>
//       </div>

//       {/* ── SUCCESS MODAL ── */}
//       {submitted && (
//         <div style={{
//           position: "fixed",
//           inset: 0,
//           backgroundColor: "rgba(0,0,0,0.6)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           zIndex: 1000,
//           padding: "20px",
//         }}>
//           <div style={{
//             backgroundColor: "#ffffff",
//             padding: "60px 48px",
//             maxWidth: "480px",
//             width: "100%",
//             textAlign: "center",
//             boxShadow: "0 24px 80px rgba(0,0,0,0.2)",
//             borderTop: "5px solid #149AB5",
//           }}>
//             {/* Success icon */}
//             <div style={{
//               width: "72px",
//               height: "72px",
//               borderRadius: "50%",
//               backgroundColor: "rgba(20,154,181,0.1)",
//               margin: "0 auto 24px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}>
//               <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//                 <path d="M6 16L12 22L26 8" stroke="#149AB5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </div>

//             <h2 style={{
//               fontFamily: "'Work Sans', sans-serif",
//               fontSize: "26px",
//               fontWeight: "800",
//               color: "#292929",
//               marginBottom: "12px",
//               lineHeight: "1.2em",
//             }}>
//               Application Submitted!
//             </h2>

//             <p style={{
//               fontFamily: "'Inter', sans-serif",
//               fontSize: "15px",
//               color: "#545454",
//               lineHeight: "1.7em",
//               marginBottom: "32px",
//             }}>
//               Thank you, <strong>{formData.firstName}</strong>. Your application has been received successfully.
//               Our admissions team will review it and get back to you within <strong>2 working days</strong>.
//             </p>

//             <div style={{
//               backgroundColor: "#f8f9fa",
//               padding: "16px 20px",
//               marginBottom: "32px",
//               textAlign: "left",
//             }}>
//               <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#888", marginBottom: "4px" }}>Application reference</p>
//               <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "16px", fontWeight: "700", color: "#149AB5" }}>
//                 PL-{Date.now().toString().slice(-6)}
//               </p>
//             </div>

//             <button
//               onClick={() => {
//                 setSubmitted(false);
//                 setCurrentStep(1);
//                 setFormData({
//                   firstName: "", lastName: "", email: "", phone: "",
//                   dateOfBirth: "", studentType: "", address: "",
//                   school: "", yearOfCompletion: "", highestQualification: "", currentStatus: "",
//                   areaOfStudy: "", degreeLevel: "",
//                   passportFile: null, cvFile: null, howDidYouFindUs: "",
//                   fullName: "", additionalInfo: "", privacyAccepted: false,
//                 });
//               }}
//               style={{
//                 width: "100%",
//                 padding: "14px",
//                 backgroundColor: "#149AB5",
//                 border: "none",
//                 color: "#ffffff",
//                 fontFamily: "'Work Sans', sans-serif",
//                 fontSize: "15px",
//                 fontWeight: "700",
//                 cursor: "pointer",
//                 letterSpacing: "0.03em",
//               }}
//             >
//               Back to Home
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";
// components/admission/admissionForm/ApplicationForm.tsx
// Rebuilt to exactly match primeleed.com/apply-form/ UI

import { useState, useRef } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  studentType: string;
  address: string;
  school: string;
  yearOfCompletion: string;
  highestQualification: string;
  currentStatus: string;
  areaOfStudy: string;
  degreeLevel: string;
  passportFile: File | null;
  cvFile: File | null;
  howDidYouFindUs: string;
  fullName: string;
  additionalInfo: string;
  privacyAccepted: boolean;
}

const STEPS = [
  { number: 1, title: "Applicant Details" },
  { number: 2, title: "Education Records & Achievements" },
  { number: 3, title: "Education Details" },
  { number: 4, title: "Documentation" },
  { number: 5, title: "Declaration" },
];

// Exact field styles matching the original site
const fieldWrap: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  flex: 1,
};

const labelSt: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "14px",
  fontWeight: "400",
  color: "#292929",
};

const inputSt: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  border: "1px solid #e0e0e0",
  backgroundColor: "#f5f7fa",
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  color: "#292929",
  outline: "none",
  borderRadius: "0",
  appearance: "none" as const,
};

const errSt: React.CSSProperties = {
  fontSize: "12px",
  color: "#e53e3e",
  fontFamily: "'Inter', sans-serif",
};

const rowSt: React.CSSProperties = {
  display: "flex",
  gap: "20px",
};

// Button styles matching original dark gray
const prevBtn: React.CSSProperties = {
  padding: "14px 32px",
  backgroundColor: "#292929",
  color: "#ffffff",
  border: "none",
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  fontWeight: "400",
  cursor: "pointer",
  letterSpacing: "0.01em",
};

const nextBtn: React.CSSProperties = {
  padding: "14px 32px",
  backgroundColor: "#292929",
  color: "#ffffff",
  border: "none",
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  fontWeight: "400",
  cursor: "pointer",
  letterSpacing: "0.01em",
};

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    studentType: "",
    address: "",
    school: "",
    yearOfCompletion: "",
    highestQualification: "",
    currentStatus: "",
    areaOfStudy: "",
    degreeLevel: "",
    passportFile: null,
    cvFile: null,
    howDidYouFindUs: "",
    fullName: "",
    additionalInfo: "",
    privacyAccepted: false,
  });

  const passportRef = useRef<HTMLInputElement>(null);
  const cvRef = useRef<HTMLInputElement>(null);

  const set = (
    field: keyof FormData,
    value: string | boolean | File | null,
  ) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => {
      const n = { ...p };
      delete n[field];
      return n;
    });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!form.firstName.trim()) e.firstName = "Required";
      if (!form.lastName.trim()) e.lastName = "Required";
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
        e.email = "Valid email required";
      if (!form.phone.trim()) {
        e.phone = "Phone number is required";
      } else {
        const parsed = parsePhoneNumberFromString(form.phone);
        if (!parsed || !parsed.isValid()) {
          e.phone = "Please enter a valid phone number (e.g. +44 7700 900000)";
        }
      }
      if (!form.dateOfBirth) e.dateOfBirth = "Required";
      if (!form.studentType) e.studentType = "Please select";
      if (!form.address.trim()) e.address = "Required";
    }
    if (step === 2) {
      if (!form.school.trim()) e.school = "Required";
      if (!form.yearOfCompletion.trim()) e.yearOfCompletion = "Required";
      if (!form.highestQualification.trim())
        e.highestQualification = "Required";
      if (!form.currentStatus) e.currentStatus = "Please select";
    }
    if (step === 3) {
      if (!form.areaOfStudy) e.areaOfStudy = "Please select";
      if (!form.degreeLevel) e.degreeLevel = "Please select";
    }
    if (step === 4) {
      if (!form.passportFile) e.passportFile = "Required";
      if (!form.cvFile) e.cvFile = "Required";
      if (!form.howDidYouFindUs) e.howDidYouFindUs = "Please select";
    }
    if (step === 5) {
      if (!form.fullName.trim()) e.fullName = "Required";
      if (!form.privacyAccepted)
        e.privacyAccepted = "You must accept the privacy policy";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validate()) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const prev = () => {
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const submit = () => {
    if (validate()) setSubmitted(true);
  };

  // ── SELECT with custom arrow (matching original dropdown style) ──
  const Select = ({
    value,
    onChange,
    children,
    error,
  }: {
    value: string;
    onChange: (v: string) => void;
    children: React.ReactNode;
    error?: string;
  }) => (
    <div style={{ position: "relative" }}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ ...inputSt, paddingRight: "40px", cursor: "pointer" }}
      >
        {children}
      </select>
      {/* Custom chevron arrow matching original */}
      <div
        style={{
          position: "absolute",
          right: "14px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      >
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path
            d="M1 1L6 6L11 1"
            stroke="#292929"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {error && <span style={errSt}>{error}</span>}
    </div>
  );

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "40px 20px 80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* ── INTRO TEXT — matches original exactly ── */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            color: "#545454",
            lineHeight: "1.7em",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Seeking guidance on your higher education, or looking to secure your
          Masters at
          <br />a top university? Start your application today.
        </p>

        {/* ── PROGRESS BAR — green circles + connecting line ── */}
        <div style={{ position: "relative", marginBottom: "48px" }}>
          {/* Connecting line behind the circles */}
          <div
            style={{
              position: "absolute",
              top: "18px",
              left: "18px",
              right: "18px",
              height: "2px",
              backgroundColor: "#e0e0e0",
              zIndex: 0,
            }}
          />

          {/* Filled line for completed portion */}
          <div
            style={{
              position: "absolute",
              top: "18px",
              left: "18px",
              width: `${((step - 1) / 4) * 100}%`,
              height: "2px",
              backgroundColor: "#22c55e",
              zIndex: 1,
              transition: "width 0.4s ease",
            }}
          />

          {/* Step circles */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              zIndex: 2,
            }}
          >
            {STEPS.map((s) => {
              const done = s.number < step;
              const current = s.number === step;
              return (
                <div
                  key={s.number}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: done || current ? "#22c55e" : "#ffffff",
                      border: `2px solid ${done || current ? "#22c55e" : "#d0d0d0"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {done ? (
                      // Checkmark for completed
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                      >
                        <path
                          d="M1.5 5.5L5 9L12.5 1.5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "13px",
                          fontWeight: "600",
                          color: current ? "#ffffff" : "#aaaaaa",
                        }}
                      >
                        {s.number}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── STEP HEADING ── */}
        <h2
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "22px",
            fontWeight: "700",
            color: "#292929",
            marginBottom: "32px",
            letterSpacing: "-0.01em",
          }}
        >
          {STEPS[step - 1].title}
        </h2>

        {/* ════════════ STEP 1 — Applicant Details ════════════ */}
        {step === 1 && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={rowSt}>
              <div style={fieldWrap}>
                <label style={labelSt}>First name</label>
                <input
                  style={inputSt}
                  type="text"
                  placeholder="Enter here"
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                />
                {errors.firstName && (
                  <span style={errSt}>{errors.firstName}</span>
                )}
              </div>
              <div style={fieldWrap}>
                <label style={labelSt}>Last name</label>
                <input
                  style={inputSt}
                  type="text"
                  placeholder="Enter here"
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                />
                {errors.lastName && (
                  <span style={errSt}>{errors.lastName}</span>
                )}
              </div>
            </div>

            <div style={rowSt}>
              <div style={fieldWrap}>
                <label style={labelSt}>Email address</label>
                <input
                  style={inputSt}
                  type="email"
                  placeholder="Enter here"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
                {errors.email && <span style={errSt}>{errors.email}</span>}
              </div>
              <div style={fieldWrap}>
                <label style={labelSt}>Phone number</label>
                <input
                  style={inputSt}
                  type="tel"
                  placeholder="+44 7700 900000" // ← was "Enter here"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
                {errors.phone && <span style={errSt}>{errors.phone}</span>}
              </div>
            </div>

            <div style={rowSt}>
              <div style={fieldWrap}>
                <label style={labelSt}>Date of birth</label>
                <input
                  style={inputSt}
                  type="date"
                  value={form.dateOfBirth}
                  onChange={(e) => set("dateOfBirth", e.target.value)}
                />
                {errors.dateOfBirth && (
                  <span style={errSt}>{errors.dateOfBirth}</span>
                )}
              </div>
              <div style={fieldWrap}>
                <label style={labelSt}>Student type</label>
                <Select
                  value={form.studentType}
                  onChange={(v) => set("studentType", v)}
                  error={errors.studentType}
                >
                  <option value="">Please select</option>
                  <option>UK Citizen</option>
                  <option>EU Citizen</option>
                  <option>International / Foreign Student</option>
                  <option>U.S. Permanent Resident (Green Card Holder)</option>
                  <option>
                    International Student Transferring Within UK/EU
                  </option>
                </Select>
              </div>
            </div>

            <div style={fieldWrap}>
              <label style={labelSt}>Address</label>
              <textarea
                style={{ ...inputSt, minHeight: "80px", resize: "vertical" }}
                placeholder="Enter here"
                value={form.address}
                onChange={(e) => set("address", e.target.value)}
              />
              {errors.address && <span style={errSt}>{errors.address}</span>}
            </div>
          </div>
        )}

        {/* ════════════ STEP 2 — Education Records ════════════ */}
        {step === 2 && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={rowSt}>
              <div style={fieldWrap}>
                <label style={labelSt}>School</label>
                <input
                  style={inputSt}
                  type="text"
                  placeholder="Enter here"
                  value={form.school}
                  onChange={(e) => set("school", e.target.value)}
                />
                {errors.school && <span style={errSt}>{errors.school}</span>}
              </div>
              <div style={fieldWrap}>
                <label style={labelSt}>Year of completion</label>
                <input
                  style={inputSt}
                  type="text"
                  placeholder="Enter here"
                  value={form.yearOfCompletion}
                  onChange={(e) => set("yearOfCompletion", e.target.value)}
                />
                {errors.yearOfCompletion && (
                  <span style={errSt}>{errors.yearOfCompletion}</span>
                )}
              </div>
            </div>

            <div style={rowSt}>
              <div style={fieldWrap}>
                <label style={labelSt}>Highest qualification</label>
                <input
                  style={inputSt}
                  type="text"
                  placeholder="Highest qualification achieved or currently completing?"
                  value={form.highestQualification}
                  onChange={(e) => set("highestQualification", e.target.value)}
                />
                {errors.highestQualification && (
                  <span style={errSt}>{errors.highestQualification}</span>
                )}
              </div>
              <div style={fieldWrap}>
                <label style={labelSt}>Current status</label>
                <Select
                  value={form.currentStatus}
                  onChange={(v) => set("currentStatus", v)}
                  error={errors.currentStatus}
                >
                  <option value="">Please select</option>
                  <option>Studying</option>
                  <option>Working</option>
                  <option>Other</option>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* ════════════ STEP 3 — Education Details ════════════ */}
        {step === 3 && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={rowSt}>
              <div style={fieldWrap}>
                <label style={labelSt}>Select area of study</label>
                <Select
                  value={form.areaOfStudy}
                  onChange={(v) => set("areaOfStudy", v)}
                  error={errors.areaOfStudy}
                >
                  <option value="">Please select</option>
                  <option>Business & Administration</option>
                  <option>Computer Science & A.I.</option>
                  <option>Accounting and Finance</option>
                  <option>Art & Design</option>
                  <option>Media Management</option>
                  <option>Media and Communication</option>
                </Select>
              </div>
              <div style={fieldWrap}>
                <label style={labelSt}>Degree level</label>
                <Select
                  value={form.degreeLevel}
                  onChange={(v) => set("degreeLevel", v)}
                  error={errors.degreeLevel}
                >
                  <option value="">Please select</option>
                  <option>Bachelor's Degrees</option>
                  <option>Master's Degrees</option>
                  <option>Undergraduate Degrees</option>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* ════════════ STEP 4 — Documentation ════════════ */}
        {step === 4 && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div style={rowSt}>
              {/* Passport upload — matches original "Choose File" button style */}
              <div style={fieldWrap}>
                <label style={labelSt}>
                  Upload passport or birth documentation
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #e0e0e0",
                    backgroundColor: "#f5f7fa",
                  }}
                >
                  <input
                    style={{
                      flex: 1,
                      padding: "14px 16px",
                      border: "none",
                      backgroundColor: "transparent",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      color: "#aaa",
                      outline: "none",
                    }}
                    type="text"
                    readOnly
                    value={form.passportFile ? form.passportFile.name : ""}
                    placeholder=""
                  />
                  <button
                    onClick={() => passportRef.current?.click()}
                    style={{
                      padding: "14px 20px",
                      backgroundColor: "#292929",
                      color: "#ffffff",
                      border: "none",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Choose File
                  </button>
                  <input
                    ref={passportRef}
                    type="file"
                    accept=".pdf"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      set("passportFile", e.target.files?.[0] || null)
                    }
                  />
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#545454",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "1.5em",
                    marginTop: "6px",
                  }}
                >
                  Please upload a VERIFIED copy of your Passport or Birth
                  Certificate. VERIFIED means the original document has been
                  sighted & the copy dated and signed by an authorised person.
                </p>
                {errors.passportFile && (
                  <span style={errSt}>{errors.passportFile}</span>
                )}
              </div>

              {/* CV upload */}
              <div style={fieldWrap}>
                <label style={labelSt}>
                  Upload Curriculum Vitae (CV) or Resume
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #e0e0e0",
                    backgroundColor: "#f5f7fa",
                  }}
                >
                  <input
                    style={{
                      flex: 1,
                      padding: "14px 16px",
                      border: "none",
                      backgroundColor: "transparent",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      color: "#aaa",
                      outline: "none",
                    }}
                    type="text"
                    readOnly
                    value={form.cvFile ? form.cvFile.name : ""}
                    placeholder=""
                  />
                  <button
                    onClick={() => cvRef.current?.click()}
                    style={{
                      padding: "14px 20px",
                      backgroundColor: "#292929",
                      color: "#ffffff",
                      border: "none",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Choose File
                  </button>
                  <input
                    ref={cvRef}
                    type="file"
                    accept=".pdf"
                    style={{ display: "none" }}
                    onChange={(e) => set("cvFile", e.target.files?.[0] || null)}
                  />
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#545454",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "1.5em",
                    marginTop: "6px",
                  }}
                >
                  Upload Curriculum Vitae (CV) or Resume
                </p>
                {errors.cvFile && <span style={errSt}>{errors.cvFile}</span>}
              </div>
            </div>

            {/* How did you find us — half width matching original */}
            <div style={{ maxWidth: "calc(50% - 10px)" }}>
              <label style={labelSt}>How did you find us?</label>
              <Select
                value={form.howDidYouFindUs}
                onChange={(v) => set("howDidYouFindUs", v)}
                error={errors.howDidYouFindUs}
              >
                <option value="">- Select -</option>
                <option>Google</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Friends / Family</option>
                <option>Other</option>
              </Select>
            </div>
          </div>
        )}

        {/* ════════════ STEP 5 — Declaration ════════════ */}
        {step === 5 && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div style={fieldWrap}>
              <label style={labelSt}>Application full name</label>
              <input
                style={{ ...inputSt, backgroundColor: "#eef2f7" }}
                type="text"
                placeholder=""
                value={form.fullName}
                onChange={(e) => set("fullName", e.target.value)}
              />
              {errors.fullName && <span style={errSt}>{errors.fullName}</span>}
            </div>

            <div style={fieldWrap}>
              <label style={labelSt}>Additional information</label>
              <textarea
                style={{
                  ...inputSt,
                  minHeight: "120px",
                  resize: "vertical",
                  backgroundColor: "#eef2f7",
                }}
                placeholder=""
                value={form.additionalInfo}
                onChange={(e) => set("additionalInfo", e.target.value)}
              />
            </div>

            {/* Privacy policy checkbox — matches original exactly */}
            <div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  color: "#292929",
                  marginBottom: "8px",
                }}
              >
                Privacy Policy Acceptance*
              </p>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={form.privacyAccepted}
                  onChange={(e) => set("privacyAccepted", e.target.checked)}
                  style={{
                    width: "16px",
                    height: "16px",
                    accentColor: "#149AB5",
                    cursor: "pointer",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    color: "#545454",
                  }}
                >
                  By submitting this form, you agree to Prime Leed privacy
                  notice.
                </span>
              </label>
              {errors.privacyAccepted && (
                <span style={errSt}>{errors.privacyAccepted}</span>
              )}
            </div>
          </div>
        )}

        {/* ── NAVIGATION BUTTONS — exact match to original ── */}
        <div style={{ display: "flex", gap: "12px", marginTop: "40px" }}>
          {step > 1 && (
            <button onClick={prev} style={prevBtn}>
              Previous
            </button>
          )}
          {step < 5 ? (
            <button onClick={next} style={nextBtn}>
              Next
            </button>
          ) : (
            <button
              onClick={submit}
              style={{
                ...nextBtn,
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Submit Aplication
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path
                  d="M1 7H17M11 1L17 7L11 13"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* ── SUCCESS MODAL ── */}
      {submitted && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "56px 48px",
              maxWidth: "460px",
              width: "100%",
              textAlign: "center",
              borderTop: "4px solid #149AB5",
              boxShadow: "0 24px 80px rgba(0,0,0,0.2)",
            }}
          >
            {/* Green check circle */}
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "50%",
                backgroundColor: "#f0fdf4",
                border: "2px solid #22c55e",
                margin: "0 auto 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                <path
                  d="M2 11L10 19L26 2"
                  stroke="#22c55e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "24px",
                fontWeight: "800",
                color: "#292929",
                marginBottom: "12px",
              }}
            >
              Application Submitted!
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#545454",
                lineHeight: "1.7em",
                marginBottom: "28px",
              }}
            >
              Thank you,{" "}
              <strong>
                {form.firstName} {form.lastName}
              </strong>
              .<br />
              Your application has been received. Our admissions team will get
              back to you within <strong>2 working days</strong>.
            </p>

            <div
              style={{
                backgroundColor: "#f5f7fa",
                padding: "14px 20px",
                marginBottom: "28px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: "#888",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "4px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Reference Number
              </p>
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#149AB5",
                }}
              >
                PL-{Date.now().toString().slice(-6)}
              </p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              style={{ ...nextBtn, width: "100%", padding: "14px" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
