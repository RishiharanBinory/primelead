// app/contact/page.tsx
import DynamicForm from "@/components/form/DynamicForm";

export default function ContactForm() {
  return (
    <main>
      <DynamicForm
        apiEndpoint="/api/contact"
        submitLabel="Submit"
        sections={[
          {
            title: "Contact",
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
                name: "phone",
                label: "Phone number",
                type: "phone",
                placeholder: "Enter phone number",
                required: true,
              },
              {
                name: "country",
                label: "Country of Residence",
                type: "country",
                required: true,
              },
              {
                name: "academicLevel",
                label: "Academic Level",
                type: "select",
                options: [
                  "Bachelor's Degrees",
                  "Master's Degrees",
                  "Undergraduate Degrees",
                ],
              },
              {
                name: "message",
                label: "Message:",
                type: "textarea",
                placeholder: "Questions? Anything you'd like to know or ask.",
                required: true,
                fullWidth: true,
              },
              {
                name: "howDidYouFindUs",
                label: "How did you find us?",
                type: "select",
                placeholder: "- Select -",
                fullWidth: true,
                options: [
                  "Google",
                  "Social Media",
                  "Friend or Family",
                  "University",
                  "Advertisement",
                  "Other",
                ],
              },
              {
                name: "privacyPolicy",
                label: "Privacy Policy Acceptance",
                type: "checkbox",
                required: true,
                fullWidth: true,
                checkboxLabel:
                  "By submitting this form, you agree to the Primeleed privacy notice.",
              },
            ],
          },
        ]}
      />
    </main>
  );
}
