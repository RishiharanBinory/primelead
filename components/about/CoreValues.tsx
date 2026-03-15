// components/about/CoreValues.tsx

// These are the actual Lucide React component imports — NOT emoji strings.
// This is what was missing in the broken version.
import { ClipboardList, MessageSquare, CalendarCheck } from "lucide-react";
import { LucideIcon } from "lucide-react";
import CoreValueCard from "./CoreValueCard";

// Notice the type here — icon is LucideIcon, not string
interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: ClipboardList,    // ✅ actual component reference, not "📋"
    title: "You Apply",
    description:
      "Tell us a little about yourself and we'll help with the rest. Our convenient online application tool only takes 10 minutes to complete.",
  },
  {
    icon: MessageSquare,    // ✅ actual component reference, not "💬"
    title: "We Connect",
    description:
      "After you submit your application, an admissions representative will contact you and will help you to complete the process.",
  },
  {
    icon: CalendarCheck,    // ✅ actual component reference, not "📅"
    title: "You Get Ready",
    description:
      "Once you've completed your application and connected with an admissions representative, you're ready to create your schedule.",
  },
];

export default function CoreValues() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 20px", paddingBottom: "200px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <p
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "26px",
            fontWeight: "800",
            lineHeight: "1.5em",
            color: "#1a1a1a",
            maxWidth: "100%",
            margin: "0 auto 80px auto",
          }}
        >
          Aligned with global shifts in the economy, society, and environment,
          our vision drives our mission and upholds our core values
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0px",
            alignItems: "start",
          }}
        >
          {values.map((value, index) => (
            <CoreValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              showLeftBorder={index === 1}
              showRightBorder={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}