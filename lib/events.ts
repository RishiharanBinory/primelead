// export type Event = {
//   id: string;
//   imageSrc: string;
//   imageAlt: string;
//   date: string;
//   location: string;
//   title: string;
//   description: string;
//   href: string;
// };

// export const EVENTS: Event[] = [
//   {
//     id: "1",
//     imageSrc: "/Home_img.jpg",
//     imageAlt: "Creative Writing Event",
//     date: "March 12, 2021",
//     location: "San Francisco",
//     title: "ONLINE | Creative Writing Events",
//     description:
//       "For years, the archivists who run Special Collections have answered the same types as our collections...",
//     href: "/events/creative-writing",
//   },
//   {
//     id: "2",
//     imageSrc: "/Home_img.jpg",
//     imageAlt: "Literature Research Seminar",
//     date: "April 19, 2021",
//     location: "Los Angeles",
//     title: "Modern and Contemporary Literature Research Seminar",
//     description:
//       "For years, the archivists who run Special Collections have answered the same types as our collections...",
//     href: "/events/literature-seminar",
//   },
//   {
//     id: "3",
//     imageSrc: "/Home_img.jpg",
//     imageAlt: "Combinatorial Theory Seminar",
//     date: "June 24, 2021",
//     location: "San Francisco",
//     title: "Combinatorial Theory Seminar",
//     description:
//       "For years, the archivists who run Special Collections have answered the same typess as our collections…",
//     href: "/events/literature-seminar",
//   },
//   {
//     id: "4",
//     imageSrc: "/Home_img.jpg",
//     imageAlt: "Literature Research Seminar",
//     date: "October 12, 2020",
//     location: "Los Angeles",
//     title: "Global and Imperial History Research Seminar",
//     description:
//       "For years, the archivists who run Special Collections have answered the same typess as our collections…",
//     href: "/events/literature-seminar",
//   },
//   {
//     id: "5",
//     imageSrc: "/Home_img.jpg",
//     imageAlt: "Literature Research Seminar",
//     date: "October 12, 2020",
//     location: "San Francisco",
//     title: "ONLINE | Wellbeing Research Centre",
//     description:
//       "For years, the archivists who run Special Collections have answered the same typess as our collections…",
//     href: "/events/literature-seminar",
//   },
//     {
//     id: "6",
//     imageSrc: "/Home_img.jpg",
//     imageAlt: "Literature Research Seminar",
//     date: "October 12, 2020",
//     location: "Los Angeles",
//     title: "ONLINE | Our global journalism seminar series",
//     description:
//       "For years, the archivists who run Special Collections have answered the same typess as our collections…",
//     href: "/events/literature-seminar",
//   },
// ];

export type Event = {
  id: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  date: string;
  location: string;
  title: string;
  description: string;
  body: string;
  tags: string[];
};

export const EVENTS: Event[] = [
  {
    id: "1",
    slug: "creative-writing-events",
    imageSrc: "/Home_img.jpg",
    imageAlt: "Creative Writing Event",
    date: "March 12, 2021",
    location: "San Francisco",
    title: "ONLINE | Creative Writing Events",
    description:
      "Join us for an inspiring online creative writing event designed to help aspiring writers develop their craft and connect with like-minded individuals.",
    body: `Creative writing is one of the most powerful tools for self-expression and communication. This online event brings together writers from all backgrounds to explore different forms of writing — from fiction and poetry to personal essays and screenwriting.

Our experienced facilitators will guide participants through a series of interactive workshops, writing exercises, and group discussions. Whether you are a complete beginner or an experienced writer looking to refine your skills, this event has something for everyone.

Throughout the day, you will have the opportunity to share your work, receive constructive feedback, and connect with a community of passionate writers. Guest speakers include published authors, literary agents, and editors who will share their insights on the publishing industry and what it takes to succeed as a writer today.

The event will also feature panel discussions on topics such as finding your unique voice, overcoming writer's block, and navigating the world of self-publishing versus traditional publishing.

All participants will receive access to exclusive writing resources, templates, and a certificate of participation. Spaces are limited, so register early to secure your spot.`,
    tags: ["Writing", "Online", "Workshop", "Creative Arts"],
  },
  {
    id: "2",
    slug: "literature-research-seminar",
    imageSrc: "/Home_img.jpg",
    imageAlt: "Literature Research Seminar",
    date: "April 19, 2021",
    location: "Los Angeles",
    title: "Modern and Contemporary Literature Research Seminar",
    description:
      "An intensive research seminar exploring the landscape of modern and contemporary literature, designed for students and academics seeking deeper literary understanding.",
    body: `This seminar offers a deep dive into the world of modern and contemporary literature, bringing together scholars, students, and literature enthusiasts for a day of academic exploration and intellectual discourse.

The seminar is structured around three key themes: the evolution of narrative in the 21st century, the role of literature in shaping cultural identity, and emerging voices in global literature. Each theme will be explored through a combination of presentations, panel discussions, and small group workshops.

Participants will have the opportunity to present their own research and receive feedback from leading academics in the field. The seminar is particularly valuable for postgraduate students working on dissertations or research projects related to modern literature.

Special guest lectures will cover topics including postcolonial literature, the impact of digital media on reading habits, and the resurgence of short fiction in contemporary publishing. A dedicated Q&A session with visiting professors from Oxford and Harvard will provide participants with invaluable insights into academic publishing and research methodologies.

Attendees will also gain access to an exclusive online library of curated reading materials, research papers, and recorded lectures that can be accessed for up to six months after the event.`,
    tags: ["Literature", "Research", "Academic", "Seminar"],
  },
  {
    id: "3",
    slug: "higher-education-funding-workshop",
    imageSrc: "/Home_img.jpg",
    imageAlt: "Higher Education Funding Workshop",
    date: "June 8, 2021",
    location: "London",
    title: "Higher Education Funding & Financial Aid Workshop",
    description:
      "A practical workshop helping students and families navigate the complex landscape of higher education funding, student loans, and financial aid opportunities in the UK.",
    body: `Understanding how to fund your higher education is one of the most important steps in your academic journey. This workshop is designed to demystify the process of applying for student finance, scholarships, and bursaries available to UK and EU students.

Our team of financial aid experts will walk you through the entire Student Finance England application process step by step, ensuring you understand exactly what you are entitled to and how to maximise your funding. Topics covered include tuition fee loans, maintenance loans, grants, and the various repayment options available after graduation.

The workshop will also cover alternative funding sources including university-specific scholarships, private bursaries, and charitable grants. A dedicated section will focus on funding options for mature students, international students, and students from disadvantaged backgrounds.

Interactive Q&A sessions will give participants the chance to ask specific questions about their individual circumstances. Financial advisors will be available for one-on-one consultations throughout the day, providing personalised guidance tailored to each student's situation.

Participants will leave with a comprehensive funding guide, a personalised funding checklist, and contact details for key funding bodies and support organisations. This workshop is free to attend and open to all prospective and current higher education students.`,
    tags: ["Funding", "Financial Aid", "Student Finance", "Workshop"],
  },
  {
    id: "4",
    slug: "university-application-masterclass",
    imageSrc: "/Home_img.jpg",
    imageAlt: "University Application Masterclass",
    date: "September 15, 2021",
    location: "Manchester",
    title: "University Application Masterclass — UCAS & Beyond",
    description:
      "A comprehensive masterclass covering everything you need to know about the UCAS application process, personal statements, interviews, and securing your ideal university place.",
    body: `Applying to university can feel overwhelming, but with the right guidance and preparation, you can approach the process with confidence. This masterclass is designed to give you a complete understanding of the UCAS system and everything that happens after you submit your application.

The session begins with a detailed walkthrough of the UCAS portal, covering how to choose your courses, write a compelling personal statement, and submit your application before key deadlines. Our admissions experts have reviewed thousands of applications and will share exactly what university admissions teams are looking for.

A significant portion of the masterclass is dedicated to the personal statement — arguably the most important part of your application. You will learn how to structure your statement effectively, highlight your strengths and experiences, and avoid the most common mistakes that cause applications to be rejected.

The masterclass also covers what happens after you submit your application, including how to respond to offers, navigate Clearing, and prepare for university interviews. Mock interview sessions will give participants the chance to practice their responses with experienced interviewers.

Additional topics include how to choose between firm and insurance choices, understanding conditional and unconditional offers, and tips for those applying to competitive courses such as Medicine, Law, and Architecture. All participants receive a copy of our exclusive UCAS guide and personal statement workbook.`,
    tags: ["UCAS", "Application", "Masterclass", "University"],
  },
];