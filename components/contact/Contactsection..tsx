import ContactLeftPanel from "./ContactLeftPanel";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 mb-16 sm:mb-24 lg:mb-60">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

          {/* ── Left panel ── */}
          <div className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[45%]">
            <ContactLeftPanel />
          </div>

          {/* ── Right: floating white card ── */}
          <div className="w-full lg:w-[52%] lg:flex-shrink-0 bg-white rounded-2xl shadow-lg border border-[#ebebeb] p-6 sm:p-8 lg:p-10">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}