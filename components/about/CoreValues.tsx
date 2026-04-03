import { ClipboardList, MessageSquare, CalendarCheck, LucideIcon } from "lucide-react";
import CoreValueCard from "./CoreValueCard";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: ClipboardList,
    title: "You Apply",
    description:
      "Tell us a little about yourself and we'll help with the rest. Our convenient online application tool only takes 10 minutes to complete.",
  },
  {
    icon: MessageSquare,
    title: "We Connect",
    description:
      "After you submit your application, an admissions representative will contact you and will help you to complete the process.",
  },
  {
    icon: CalendarCheck,
    title: "You Get Ready",
    description:
      "Once you've completed your application and connected with an admissions representative, you're ready to create your schedule.",
  },
];

export default function CoreValues() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-7 lg:px-12">
        <p
          className="font-black leading-relaxed mb-10 md:mb-14"
          style={{
            fontSize: "clamp(18px, 3vw, 26px)",
            color: "#1a1a1a",
            fontFamily: "'Work Sans', sans-serif",
          }}
        >
          Aligned with global shifts in the economy, society, and environment,
          our vision drives our mission and upholds our core values
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={[
                "py-7 sm:py-0",
                index !== 0 ? "border-t border-gray-200 sm:border-t-0" : "",
              ].join(" ")}
            >
              <CoreValueCard
                icon={value.icon}
                title={value.title}
                description={value.description}
                showLeftBorder={index === 1}
                showRightBorder={index === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}