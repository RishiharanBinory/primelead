import ContactLeftPanel from "./ContactLeftPanel";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 mb-32 sm:mb-40 lg:mb-48">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          {/* ── Left panel: constrain width so form doesn't get pushed out ── */}
          <div className="flex-1 min-w-0 lg:max-w-[45%]">
            <ContactLeftPanel />
          </div>

          {/* ── Right: floating white card ── */}
          <div className="w-full lg:w-[52%] flex-shrink-0 bg-white rounded-2xl shadow-lg border border-[#ebebeb] p-8 sm:p-10">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}