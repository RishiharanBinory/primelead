// lib/blogData.ts
//
// Single source of truth for ALL blog posts.
// Used by:
//   - BlogGrid     (card list on /blog)
//   - [slug]/page  (individual post page)
//
// To add a new post: add one object to the POSTS array.
// The slug becomes the URL: /blog/[slug]

export interface BlogPost {
  slug: string;           // URL segment e.g. "how-to-organise-your-studies-for-success"
  title: string;
  date: string;
  image: string;          // hero / card image URL
  imageAlt: string;
  excerpt: string;        // shown on the card grid
  tags: string[];         // shown at bottom of post
  sections: Section[];    // article body
  quote?: Quote;          // optional pull-quote block
  youtubeId?: string;     // optional embedded YouTube video
  prev?: { slug: string; title: string }; // "Previous" nav link
}

export interface Section {
  heading: string;
  paragraphs: string[];
}

export interface Quote {
  text: string;
  author: string;
}

// ─────────────────────────────────────────────
// ALL POSTS
// ─────────────────────────────────────────────

export const POSTS: BlogPost[] = [
  {
    slug: "how-to-organise-your-studies-for-success",
    title: "How to Organise Your Studies for Success",
    date: "December 29, 2020",
    image:
      "https://www.primeleed.com/wp-content/uploads/2020/12/christina-wocintechchat-com-FPQlXQtjkqU-unsplash.jpg",
    imageAlt: "Students studying together on laptops",
    excerpt:
      "Stay Focused on Your Studies There is a phrase called 'Decision Fatigue' which may be weighing you down. I first heard about this procrastination phenomenon",
    tags: ["Online Bachelor's Degree", "Organization", "Productivity", "Student Success"],
    youtubeId: "dQw4w9WgXcQ", // replace with actual video id
    quote: {
      text: "After all the hard work, it's very rewarding to cross off the topics on your calendar to show how far you have come.",
      author: "John Doe",
    },
    prev: {
      slug: "4th-workshop-advanced-materials",
      title: '4th Workshop "Advanced Materials"',
    },
    sections: [
      {
        heading: "Stay Focused on Your Studies",
        paragraphs: [
          "There is a phrase called 'Decision Fatigue' which may be weighing you down. I first heard about this procrastination phenomenon in a talk by Kerwin Rae. It is based on the principle that we spend so much time thinking about what to do, instead of doing what we wanted in the first place, that we waste time. How can we stop being unsure what to study and just start studying? It is never too late to organise your time! One approach is to divide your module across calendar weeks available and then split those into days.",
        ],
      },
      {
        heading: "Find Time in Your Calendar",
        paragraphs: [
          "Much of my time listening to audios or exposing myself to external wider reading and lectures is spent whilst doing a mundane activity I can't avoid such as brushing teeth or cooking pasta. These little ten-minute bursts can add up to another 20 hours of study, and enhance my exposure to the topic, leading to better understanding. A commute can be an excellent opportunity – putting down Facebook on the train and using that hour to read the core text book is invaluable.",
        ],
      },
      {
        heading: "Have a Study Method",
        paragraphs: [
          "Routine has been a saviour of study for me. Creating good healthy study habits has made it so much easier to 'get down to work' and be in the mental zone with limited procrastination. I study for four hours a day approximately, but try not to set yourself goals by time, or you could find yourself watching paint dry and counting it as four hours study. It is much better to study a certain topic or certain activity before taking a break.",
        ],
      },
      {
        heading: "Keep Focused and Track Progress",
        paragraphs: [
          "Drinking two litres of water a day and having a sleep schedule has drastically improved my focus and ability to concentrate, but more so having a set plan already in place, I no longer open my books and waste precious time wondering what to do or where to focus. I can look at my chart and see exactly what I need to do and get started straight away.",
          "After all the hard work, it's very rewarding to cross off the topics on your calendar to show how far you have come. This can help keep you on track and stay motivated and give you the best chance of success.",
          "A few of my friends are also studying, not at the same university or even the same course, but having other friends who I can 'study buddy' with or check in, keeps us all determined and on track. Scheduling in catch-up time can give much needed respite without panic. This keeps your goals realistic and manageable.",
        ],
      },
    ],
  },

  {
    slug: "4th-workshop-advanced-materials",
    title: '4th Workshop "Advanced Materials"',
    date: "December 29, 2020",
    image:
      "https://www.primeleed.com/wp-content/uploads/2020/12/iStock-1176987265-1.jpg",
    imageAlt: "Workshop classroom",
    excerpt:
      "Capacity Building Workshop on Distance Learning Running a capacity building workshop on Distance Learning for Estuar university, jointly organised by the University of London Centre",
    tags: ["Workshop", "Distance Learning", "Education"],
    sections: [
      {
        heading: "About the Workshop",
        paragraphs: [
          "Capacity Building Workshop on Distance Learning Running a capacity building workshop on Distance Learning for Estuar university, jointly organised by the University of London Centre. The workshop focused on advancing materials science and engineering education through distance learning technologies.",
        ],
      },
      {
        heading: "Key Takeaways",
        paragraphs: [
          "Participants gained valuable insights into modern pedagogical approaches for advanced materials education. The collaborative format allowed educators from multiple institutions to share best practices and develop joint curriculum strategies.",
        ],
      },
    ],
  },

  {
    slug: "what-is-the-difference-between-university-and-college",
    title: "What is the Difference Between University and College?",
    date: "April 11, 2020",
    image:
      "https://www.primeleed.com/wp-content/uploads/2020/04/you-x-ventures-fznQW-kn5VU-unsplash.jpg",
    imageAlt: "Students at university",
    excerpt:
      'What Is a College? Oftentimes schools with "college" in their name are smaller institutions that emphasize undergraduate education, Johanna Fishbein, head of university advising at',
    tags: ["University", "College", "Higher Education"],
    sections: [
      {
        heading: "What Is a College?",
        paragraphs: [
          'Oftentimes schools with "college" in their name are smaller institutions that emphasize undergraduate education. Johanna Fishbein, head of university advising at a leading institution, explains that colleges typically focus on a core curriculum and offer bachelor\'s degrees across a range of disciplines.',
        ],
      },
      {
        heading: "What Is a University?",
        paragraphs: [
          "Universities are typically larger and offer both undergraduate and postgraduate programmes. They are often research-focused and house multiple colleges or schools within them, such as a School of Business or a School of Medicine.",
          "Choosing between a college and a university depends on your academic goals, preferred learning environment, and the specific programme you want to pursue.",
        ],
      },
    ],
  },

  {
    slug: "how-to-choose-a-business-program-at-university",
    title: "How to Choose a Business Program at University",
    date: "April 11, 2020",
    image:
      "https://www.primeleed.com/wp-content/uploads/2020/04/akson-1K8pIbIrhkQ-unsplash.jpg",
    imageAlt: "Business students studying",
    excerpt:
      "Environment Choosing one with an international perspective offers excellent practice for the global economic environment in which today's businesses operate. In fact, according to the",
    tags: ["Business", "University", "Career"],
    sections: [
      {
        heading: "Consider the Environment",
        paragraphs: [
          "Choosing a business programme with an international perspective offers excellent practice for the global economic environment in which today's businesses operate. An internationally focused curriculum exposes students to cross-cultural management, global finance, and international marketing.",
        ],
      },
      {
        heading: "Accreditation Matters",
        paragraphs: [
          "Look for programmes accredited by bodies such as AACSB, AMBA, or EQUIS. These accreditations signal that the programme meets rigorous academic and professional standards recognised by employers worldwide.",
        ],
      },
      {
        heading: "Think About Your Career Goals",
        paragraphs: [
          "Different business programmes cater to different career paths. Whether you are interested in finance, marketing, entrepreneurship, or management consulting, ensure the programme you choose has strong ties with industry and offers relevant placement or internship opportunities.",
        ],
      },
    ],
  },

  {
    slug: "how-to-get-ready-for-a-new-semester",
    title: "How to Get Ready for a New Semester",
    date: "April 11, 2020",
    image:
      "https://www.primeleed.com/wp-content/uploads/2020/12/annie-spratt-dWYU3i-mqEo-unsplash-1.jpg",
    imageAlt: "Students preparing for new semester",
    excerpt:
      "Get Organized The first step to manage your stress throughout the school year is to be in control of your academic responsibilities. If you receive",
    tags: ["Productivity", "Student Success", "Organization"],
    sections: [
      {
        heading: "Get Organized",
        paragraphs: [
          "The first step to manage your stress throughout the school year is to be in control of your academic responsibilities. If you receive your course syllabi in advance, read through them carefully and note all assignment due dates, exam periods, and reading requirements.",
        ],
      },
      {
        heading: "Set Up Your Study Space",
        paragraphs: [
          "A clean, distraction-free study environment can make a significant difference to your focus and productivity. Ensure you have all the materials you need before the semester begins, including textbooks, stationery, and any required software.",
        ],
      },
      {
        heading: "Build Healthy Routines",
        paragraphs: [
          "Establishing a consistent sleep schedule, regular exercise, and balanced meals before the semester starts gives you a strong foundation. These habits are much easier to maintain when you build them before the academic pressure intensifies.",
        ],
      },
    ],
  },

  {
    slug: "4-tips-to-navigate-your-first-semester-abroad-like-a-pro",
    title: "4 Tips to Navigate Your First Semester Abroad Like a Pro",
    date: "April 11, 2020",
    image:
      "https://www.primeleed.com/wp-content/uploads/2020/12/andrew-neel-QLqNalPe0RA-unsplash-1.jpg",
    imageAlt: "Student studying abroad",
    excerpt:
      "Study Early and Often Some students wait until a few days before the exam to study for the NCLEX, but you should really begin on",
    tags: ["Study Abroad", "Student Success", "Tips"],
    sections: [
      {
        heading: "Study Early and Often",
        paragraphs: [
          "Some students wait until a few days before the exam to begin revising, but starting early and studying in shorter, regular sessions is far more effective. Spaced repetition helps consolidate knowledge and reduces pre-exam anxiety significantly.",
        ],
      },
      {
        heading: "Embrace the Local Culture",
        paragraphs: [
          "One of the greatest benefits of studying abroad is the cultural immersion. Attend local events, try new foods, and make friends with local students as well as international peers. This enriches your experience and builds a global network.",
        ],
      },
      {
        heading: "Stay Connected with Home",
        paragraphs: [
          "While it is important to immerse yourself in your new environment, maintaining regular contact with family and friends back home provides emotional support and helps combat homesickness.",
        ],
      },
      {
        heading: "Manage Your Finances Carefully",
        paragraphs: [
          "Living abroad comes with unexpected expenses. Create a monthly budget, track your spending, and identify areas where you can save. Many universities have student support services that can help if you encounter financial difficulties.",
        ],
      },
    ],
  },

  {
    slug: "improve-your-english-and-prepare-for-college-transfer",
    title: "Improve your English and Prepare for College Transfer",
    date: "April 11, 2020",
    image:
      "https://www.primeleed.com/wp-content/uploads/2020/04/blake-wisz-GFrBMipOd_E-unsplash.jpg",
    imageAlt: "Students learning English",
    excerpt:
      "Learn English From U.S. Instructors, Locals or Mentors Prospective international students may also want to consider learning American English through a summer program on a",
    tags: ["English", "College Transfer", "International Students"],
    sections: [
      {
        heading: "Learn From U.S. Instructors, Locals or Mentors",
        paragraphs: [
          "Prospective international students may also want to consider learning American English through a summer programme on a university campus. These immersive programmes combine language instruction with cultural orientation and academic preparation.",
        ],
      },
      {
        heading: "Prepare for Academic English",
        paragraphs: [
          "Academic English differs significantly from conversational English. Focus on developing your reading comprehension, essay writing, and ability to understand lectures delivered at native speed. Resources such as TED Talks and academic journals can be invaluable.",
        ],
      },
      {
        heading: "Take a Recognised English Test",
        paragraphs: [
          "Most UK universities require proof of English proficiency through tests such as IELTS or TOEFL. Aim for the specific score required by your target institution and practise past papers regularly to improve your performance.",
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

/** Get a single post by slug — returns undefined if not found */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Get 3 related posts excluding the current slug */
export function getRelatedPosts(currentSlug: string): BlogPost[] {
  return POSTS.filter((p) => p.slug !== currentSlug).slice(0, 3);
}

/** Generate all slugs — used by generateStaticParams */
export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}