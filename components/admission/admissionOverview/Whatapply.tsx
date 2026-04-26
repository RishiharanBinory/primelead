import Image from "next/image";

const cards = [
  {
    title: "Personal from the Start",
    image: "/ad1.jpg",
    text: "From your very first enquiry, you are assigned a dedicated advisor who gets to know your background, your goals and your situation before recommending anything.",
    color: "bg-[#3f8f74]",
  },
  {
    title: "We Handle the Hard Parts",
    image: "/ad2.jpg",
    text: "From paperwork and application forms to Student Finance documents, we take care of everything on your behalf so you never feel lost or overwhelmed.",
    color: "bg-[#f75448]",
  },
  {
    title: "Support that Does Not Stop",
    image: "/ad3.jpg",
    text: "Our relationship with you does not end at enrolment. We continue to support you with Student Finance renewals, timetables and anything else you need throughout your studies.",
    color: "bg-[#b89c8a]",
  },
];

export default function WhatToExpect() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          What applying through Primeleed feels like
        </h2>
        <p className="text-gray-500 max-w-xl text-base leading-relaxed">
          We have helped over 3,000 students through the process. Here is what
          you can expect when you apply through us.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-[#f0f4f8] rounded-2xl p-5 flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-gray-900 text-center">
              {card.title}
            </h3>

            <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            <div
              className={`${card.color} flex-1 rounded-2xl px-4 py-4 text-white text-sm leading-relaxed`}
            >
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}