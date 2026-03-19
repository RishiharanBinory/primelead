// app/admission/form/page.tsx
import DynamicForm from "@/components/form/DynamicForm";

export default function AdmissionFormPage() {
  return (
    <main>
      <DynamicForm
        apiEndpoint="/api/admission-form"
        submitLabel="Submit Application"
        sections={[
          {
            title: "Personal Information",
            fields: [
              {
                name: "firstName",
                label: "First name",
                type: "text",
                placeholder: "Enter first name",
                required: true,
              },
              {
                name: "lastName",
                label: "Last name",
                type: "text",
                placeholder: "Enter last name",
                required: true,
              },
              {
                name: "email",
                label: "Email address",
                type: "email",
                placeholder: "Enter email address",
                required: true,
              },
              {
                name: "mobile",
                label: "Mobile Number",
                type: "phone",
                required: true,
              },
              {
                name: "dateOfBirth",
                label: "Date of birth",
                type: "date",
                required: true,
              },
            ],
          },
          {
            title: "Address Information",
            fields: [
              {
                name: "address",
                label: "Address",
                type: "text",
                placeholder: "Enter your address",
                required: true,
                fullWidth: true,
              },
              {
                name: "postalCode",
                label: "Postal Code",
                type: "text",
                placeholder: "Enter your postal code",
                required: true,
              },
              {
                name: "country",
                label: "Country",
                type: "country",
                required: true,
              },
            ],
          },
          {
            title: "Other",
            fields: [
              {
                name: "academicLevel",
                label: "Academic Level",
                type: "select",
                required: true,
                options: [
                  "Bachelor's Degrees",
                  "Master's Degrees",
                  "Undergraduate Degrees",
                ],
              },
              {
                name: "course",
                label: "Course",
                type: "course",
                required: true,
              },
              {
                name: "consent",
                label: "Consent",
                type: "checkbox",
                required: true,
                fullWidth: true,
                checkboxLabel:
                  "I authorise Prime Leed to contact me via email about academic programs and services. I understand I may withdraw my consent to receive future marketing communications at any time.",
              },
            ],
          },
        ]}
      />
    </main>
  );
}
