import CourseCard, { Course } from "./Coursecard";

interface CoursesSectionProps {
  courses: Course[];
  heading?: string;
  subheading?: string;
}

/**
 * CoursesSection
 *
 * Renders a responsive 3-column grid of CourseCards on a bg-primel-lightbg background.
 * Pass any number of courses — the grid grows automatically.
 *
 * Usage in a page / server component:
 *
 *   const courses = await fetchCourses(); // your data-fetching logic
 *   <CoursesSection courses={courses} />
 */
export default function CoursesSection({
  courses,
  heading = "Our Programmes",
  subheading = "Choose from a range of undergraduate degree programmes tailored to your career goals.",
}: CoursesSectionProps) {
  return (
    <section className="bg-primel-lightbg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        {(heading || subheading) && (
          <div className="mb-10 text-center">
            {heading && (
              <h2 className="text-3xl font-bold text-gray-900">{heading}</h2>
            )}
            {subheading && (
              <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
                {subheading}
              </p>
            )}
          </div>
        )}

        {/* 3-column grid — wraps automatically as courses are added */}
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-6 pr-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center py-20">
            No programmes available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}
