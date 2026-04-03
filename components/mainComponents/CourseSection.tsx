// components/mainComponents/CourseSection.tsx
import Link from "next/link";

type Course = {
  name: string;        // e.g. "Master Of Business Administration (MBA)"
  field?: string;      // e.g. "Health And Social Care"
  href?: string;
};

type Props = {
  title: string;
  courses: Course[];
};

function CourseItem({ course }: { course: Course }) {
  const content = (
    <span className="flex flex-col">
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(13px, 1.1vw, 16px)",
          color: "#1a2e3b",
          fontWeight: 600,
          lineHeight: "1.5em",
        }}
      >
        {course.name}
      </span>
      {course.field && (
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(13px, 1.1vw, 16px)",
            color: "#1a2e3b",
            fontWeight: 400,
            lineHeight: "1.5em",
          }}
        >
          – {course.field}
        </span>
      )}
    </span>
  );

  if (course.href) {
    return (
      <Link
        href={course.href}
        className="py-5 border-b border-gray-100 hover:text-[#149AB5] transition-colors duration-200 block"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="py-5 border-b border-gray-100">
      {content}
    </div>
  );
}

export default function CourseSection({ title, courses }: Props) {
  const half = Math.ceil(courses.length / 2);
  const leftCol = courses.slice(0, half);
  const rightCol = courses.slice(half);

  return (
    <div className="w-full mb-16 py-10">
      <div className="max-w-5xl mx-auto px-5 md:px-8">

        {/* Teal header */}
        <div
          className="w-full py-5 px-8 mb-10"
          style={{ backgroundColor: "#149AB5" }}
        >
          <h3
            className="text-white font-black"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(16px, 1.8vw, 22px)",
              color: "#ffffff",
            }}
          >
            {title}
          </h3>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          <div className="flex flex-col">
            {leftCol.map((course, index) => (
              <CourseItem key={index} course={course} />
            ))}
          </div>
          <div className="flex flex-col">
            {rightCol.map((course, index) => (
              <CourseItem key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}