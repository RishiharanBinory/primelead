import { FaqCategory } from "./types";
import {
  IllustrationStudentSupport,
  IllustrationEntryRequirements,
  IllustrationUndergraduate,
  IllustrationPostgraduate,
  IllustrationStudentFinance,
  IllustrationEnrolment,
} from "./illustration";

// ─────────────────────────────────────────────────────────────────────────────
// To add a new card:   push a new object into this array
// To add FAQs:         push { question, answer } into the relevant faqs array
// ─────────────────────────────────────────────────────────────────────────────

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "student-support",
    title: "Student Support",
    questionCount: "7 questions",
    illustration: <IllustrationStudentSupport />,
    faqs: [
      {
        question: "What support does Prime Leed provide to students?",
        answer:
          "Prime Leed provides free, personalised support from your very first enquiry through to the completion of your studies. This includes course and university selection, application support, Student Finance assistance, interview preparation, enrolment guidance, and ongoing academic support throughout your degree.",
      },
      {
        question: "Is Prime Leed's service really free of charge?",
        answer:
          "Yes, completely free for students. Prime Leed is paid directly by our partner universities when a student is successfully enrolled. There are no hidden fees, no charges, and no catches at any stage of the process.",
      },
      {
        question: "Can I get a job after completing my course?",
        answer:
          "Yes. Our partner universities work closely with a wide range of employers to enhance your employability. Through live projects, guest lectures, career fairs, and networking events, you can build practical experience and professional connections to improve your prospects after graduation.",
      },
      {
        question: "Does the university help with accommodation for students outside London?",
        answer:
          "Yes. Universities provide guidance and advice on finding private student accommodation to help you arrange suitable housing independently. You may need to contact the university directly for specific support options relevant to your situation.",
      },
      {
        question: "Can I work part time while studying?",
        answer:
          "Yes. Students can usually work part time alongside their studies. Our partner universities also provide career support services, including CV guidance, interview preparation, and job search assistance.",
      },
      {
        question: "What happens if I need to change my course or university after enrolling?",
        answer:
          "Prime Leed can assist you with switching courses or universities if your circumstances change. You may request a course change within one week of enrolment. Contact your advisor as soon as possible so we can guide you through the process.",
      },
      {
        question: "Can I study online from abroad while receiving Student Finance?",
        answer:
          "No. Studying online from abroad is not permitted if you are receiving Student Finance England funding. Students are required to reside in the UK for the duration of their course in order to maintain their funding eligibility.",
      },
    ],
  },
  {
    id: "entry-requirements",
    title: "Entry Requirements",
    questionCount: "7 questions",
    illustration: <IllustrationEntryRequirements />,
    faqs: [
      {
        question: "What qualifications do I need to apply?",
        answer:
          "Requirements vary by course and university. Some programmes require A-levels or equivalent qualifications, while others accept relevant work experience, particularly for mature students. Prime Leed will assess your profile and match you to the courses for which you are eligible.",
      },
      {
        question: "Can I apply without formal qualifications?",
        answer:
          "Yes, you may still be eligible to apply if you meet the required work experience criteria. Several of our partner universities consider relevant professional experience as an alternative to formal academic qualifications, particularly for applicants aged 21 and above.",
      },
      {
        question: "If I am under 20 and have GCSEs, am I eligible to apply?",
        answer:
          "Yes. If you have at least five GCSE passes at Level 2, you are eligible to apply for a degree programme and for Student Finance England. Our advisors will confirm your eligibility and guide you through the next steps.",
      },
      {
        question: "Is there an English language test? Is it difficult?",
        answer:
          "Some courses require proof of English proficiency, particularly for non-native speakers. The test is not difficult, and Prime Leed provides full support to help you prepare. We offer guidance and practice sessions until you feel confident.",
      },
      {
        question: "Is there an age limit for applying?",
        answer:
          "For bachelor's degrees, students are typically between 18 and 55 years of age. For master's degrees, between 23 and 59. Eligibility may vary depending on your qualifications and individual circumstances.",
      },
      {
        question: "Can I apply if I have a gap in my education history?",
        answer:
          "Yes. Many of our students have gaps in their education due to work, family, or personal circumstances. The universities we work with take a holistic view of your background. Prime Leed will help you present your experience in the strongest possible way.",
      },
      {
        question: "Can I study if I am on a dependent or spouse visa?",
        answer:
          "Yes, you can study in the UK on a spouse visa. If your partner is a British citizen or holds settled status and you are legally married, you may also be eligible to apply for Student Finance England, subject to eligibility criteria.",
      },
    ],
  },
  {
    id: "undergraduate-courses",
    title: "Undergraduate Courses",
    questionCount: "7 questions",
    illustration: <IllustrationUndergraduate />,
    faqs: [
      {
        question: "What are the entry requirements for undergraduate courses in London?",
        answer:
          "Entry requirements vary by course and university. Many of our programmes accept relevant work experience in place of formal qualifications such as A levels. Our advisors will assess your background and match you with the right course and entry route for your situation.",
      },
      {
        question: "How long does an undergraduate degree in London take?",
        answer:
          "Most undergraduate degrees take 3 years to complete. Some engineering and specialist programmes take 4 years. Flexible and part-time study options may extend the duration depending on your schedule and course choice.",
      },
      {
        question: "Can I get Student Finance for an undergraduate course in London?",
        answer:
          "Yes. If you are a UK resident or an EU national with settled or pre-settled status, you are likely eligible for Student Finance England. Your tuition fees are covered in full and you only repay once you earn above the repayment threshold. Prime Leed handles the full application for you, free of charge.",
      },
      {
        question: "Can I study an undergraduate degree in London as a mature student?",
        answer:
          "Absolutely. There is no upper age limit for undergraduate tuition fee loans. Many of our students are aged 25 to 55 and are returning to education for the first time. Our flexible online and blended courses are specifically designed to fit around work and family commitments.",
      },
      {
        question: "Can I study an undergraduate degree while working full time?",
        answer:
          "Yes, and most of our students do exactly that. Our partner universities offer flexible online and blended learning programmes built around busy schedules. You can study in the evenings and at weekends without giving up your job or income.",
      },
      {
        question: "What subjects can I study at undergraduate level through Prime Leed?",
        answer:
          "We offer over 50 undergraduate courses across a wide range of subjects including Business and Management, Computing and IT, Health and Social Care, Law, Engineering, Psychology, Data Science and more. Our advisors will help you find the right subject and course for your career goals.",
      },
      {
        question: "How do I apply for an undergraduate course through Prime Leed?",
        answer:
          "Simply get in touch with us and one of our advisors will guide you through everything. We handle your university application, Student Finance and all the paperwork on your behalf. The entire process is free and there is no obligation to proceed until you are ready.",
      },
    ],
  },
  {
    id: "postgraduate-courses",
    title: "Postgraduate Courses",
    questionCount: "7 questions",
    illustration: <IllustrationPostgraduate />,
    faqs: [
      {
        question: "Do I need a degree to apply for a postgraduate course in London?",
        answer:
          "A relevant undergraduate degree is the standard entry requirement for most postgraduate programmes. However, some courses also accept significant professional experience in place of a formal degree. Our advisors will assess your background and find the right route for you.",
      },
      {
        question: "How long does a postgraduate degree in London take?",
        answer:
          "Most postgraduate degrees, including MBAs and MSc programmes, take one year to complete full time. Flexible and part-time options may extend the duration depending on your schedule and course choice.",
      },
      {
        question: "Is there funding available for postgraduate degrees in London?",
        answer:
          "Yes. Eligible students can apply for a Postgraduate Loan from the government to help cover tuition fees and living costs. Prime Leed will check your eligibility and support you through the funding application, completely free of charge.",
      },
      {
        question: "Can I study a postgraduate degree in London while working?",
        answer:
          "Yes. Many of our postgraduate programmes are available online or as blended learning, making them ideal for working professionals. You can study at your own pace without leaving your current role.",
      },
      {
        question: "What postgraduate courses are available through Prime Leed?",
        answer:
          "We offer over 20 postgraduate programmes including MBAs, MSc degrees and an LLM in International Law. Subject areas include Business and Management, Computing and Technology, Artificial Intelligence, Cyber Security, Health and Social Care, Digital Marketing, Logistics and Supply Chain, and more.",
      },
      {
        question: "Can I switch from an undergraduate to a postgraduate programme?",
        answer:
          "Yes. If you already hold an undergraduate degree or have sufficient professional experience, our advisors can help you transition to a postgraduate programme that suits your career goals. Simply get in touch and we will assess the best route for you.",
      },
      {
        question: "How do I apply for a postgraduate course through Prime Leed?",
        answer:
          "Simply get in touch and one of our advisors will guide you through everything. We handle your university application, funding support and all documentation on your behalf. The entire service is free with no obligation until you are ready to proceed.",
      },
    ],
  },
  {
    id: "student-finance",
    title: "Student Finance England",
    questionCount: "19 questions",
    illustration: <IllustrationStudentFinance />,
    faqs: [
      {
        question: "How much funding am I eligible for from Student Finance England?",
        answer:
          "If you are eligible, your tuition fees will be paid directly to the university, based on your course fee. In addition, you may receive a maintenance loan of up to £13,700 to support your living costs. You may also qualify for additional support depending on your personal circumstances.",
      },
      {
        question: "I am an international student. Am I eligible for Student Finance England funding?",
        answer:
          "No, international students are generally not eligible. To qualify for funding, you must have one of the following residency statuses in the UK: British National, Irish National, Indefinite Leave to Remain, Settled or Pre-Settled Status, Refugee Status, other eligible residency schemes, or certain visa holders depending on immigration status.",
      },
      {
        question: "When do I need to start repaying the loan?",
        answer:
          "You only begin repaying your loan after completing your course, and only if you are employed and earning above the repayment threshold.",
      },
      {
        question: "Can EU nationals apply for Student Finance England?",
        answer:
          "Yes, EU nationals may be eligible if they have lived in the UK for at least three years prior to the start of the course and hold settled or pre-settled status.",
      },
      {
        question: "Can spouse or dependent visa holders apply for Student Finance England?",
        answer:
          "Eligibility depends on your immigration category and date of entry into the UK.",
      },
      {
        question: "How long does it take for Student Finance to be approved?",
        answer:
          "Approval typically takes 2 to 4 weeks, although it may take longer during peak application periods.",
      },
      {
        question: "When should I apply for Student Finance?",
        answer:
          "You should apply as soon as applications open and once you have received an offer from a university.",
      },
      {
        question: "I have a disability. Can I apply for additional support?",
        answer:
          "Yes, you can apply for Disabled Students' Allowance (DSA) to receive additional support related to your condition.",
      },
      {
        question: "I have children. Can I receive additional support?",
        answer:
          "Yes, you may be eligible for additional grants such as the Childcare Grant and Parents' Learning Allowance. These grants are non-repayable, meaning you do not need to pay them back.",
      },
      {
        question: "Can an agency or university determine or approve my funding?",
        answer:
          "No, the final decision is made solely by Student Finance England.",
      },
      {
        question: "I am unemployed. Will I receive maximum funding?",
        answer:
          "Possibly. Funding is assessed based on your household income, so the amount you receive may vary.",
      },
      {
        question: "I receive Universal Credit. Will it be affected by Student Finance?",
        answer:
          "Yes, your maintenance loan is considered as income, and the Department for Work and Pensions (DWP) may adjust your Universal Credit accordingly.",
      },
      {
        question: "I am 17 years old. Can I apply for Student Finance?",
        answer:
          "No, you must be at least 18 years old and enrolled in an approved course to apply.",
      },
      {
        question: "I am 60 years old. Can I apply for Student Finance?",
        answer:
          "Yes, you can apply for undergraduate funding, although maintenance support may be limited. For postgraduate courses, you are generally not eligible.",
      },
      {
        question: "I have previously received Student Finance. Can I apply again?",
        answer:
          "It depends on the number of years and level of study you previously funded. In some cases, exceptions may apply.",
      },
      {
        question: "Can I change my course after enrolling and receiving funding?",
        answer:
          "Yes, this may be possible. You will need to complete a Change of Circumstances form and update your Student Finance account.",
      },
      {
        question: "If I withdraw from a postgraduate course, can I receive funding again?",
        answer:
          "Generally, postgraduate funding is only provided once. However, exceptions may be considered in certain circumstances.",
      },
      {
        question: "How will Student Finance England pay me?",
        answer:
          "For undergraduate students, tuition fees are paid directly to the university, and maintenance loans are paid to your bank account in three instalments per year. For postgraduate students, the full loan is paid directly to your bank account, and you are responsible for paying tuition fees to the university according to their payment schedule.",
      },
      {
        question: "I have not lived continuously in the UK for the past three years. Am I still eligible?",
        answer:
          "Eligibility depends on the reason for your absence. If your time abroad was for temporary reasons such as holidays or personal matters, you may still qualify. However, extended periods outside the UK for work or study purposes may affect your eligibility.",
      },
    ],
  },
  {
    id: "student-enrolment",
    title: "Student Enrolment",
    questionCount: "11 questions",
    illustration: <IllustrationEnrolment />,
    faqs: [
      {
        question: "What is enrolment?",
        answer:
          "Enrolment is the process through which you become a registered student. It involves confirming that your personal details are correct, submitting any missing information, and officially confirming your place on your chosen programme. To be fully enrolled, you must complete both Pre-Enrolment and VLE / Final / Main University registration.",
      },
      {
        question: "I made a mistake during enrolment. What should I do?",
        answer:
          "If the mistake was made during Pre-Enrolment, you can update or correct your information and documents at any time before full enrolment is completed. If the mistake occurred during VLE / Final / Main University registration, you should contact the university directly or speak with your agent for assistance.",
      },
      {
        question: "What will I have access to once I am enrolled?",
        answer:
          "After completing enrolment, you will gain access to a range of student services and resources, including your timetable, course modules and programme details, lecture schedules and classroom locations, online systems for forms and submissions, and attendance records.",
      },
      {
        question: "I have not completed Pre-Enrolment. Can I attend Welcome Day?",
        answer:
          "Yes, you may attend Welcome Day. However, you are strongly advised to complete Pre-Enrolment as soon as possible, as delays may affect your student finance or access to services.",
      },
      {
        question: "I have not completed VLE / Final / Main University enrolment. Can I attend Welcome Day or classes?",
        answer:
          "No. Completion of VLE / Final / Main University enrolment is mandatory before attending Welcome Day or your first class.",
      },
      {
        question: "I haven't received any enrolment emails. What should I do?",
        answer:
          "If you have not received any enrolment emails, first check your spam or junk folder and ensure your email address is correct. If your course is starting within two weeks and you still have not received any communication, please contact the Admissions Team or your agent.",
      },
      {
        question: "When will I receive my student ID card?",
        answer:
          "You can usually collect your student ID card approximately one week after completing VLE / Final / Main University registration, on Welcome Day or your first day of classes, or within the first 2–3 weeks after your course begins.",
      },
      {
        question: "Can I change my course after I have enrolled?",
        answer:
          "Yes, you may request a course change within one week of enrolment. Please contact us as soon as possible so we can assist you with the process.",
      },
      {
        question: "I have attended, but I have not received my payment within the expected timeframe. What should I do?",
        answer:
          "You should contact your university's finance team to confirm whether your registration has been submitted to the Student Loans Company (SLC). If it has been submitted, you can contact SLC directly on 0300 100 0607 to check when your payment will be processed.",
      },
      {
        question: "What is an SSN?",
        answer:
          "SSN stands for Student Support Number, which is issued by the Student Loans Company (SLC). This is separate from your Customer Reference Number (CRN), and both serve different purposes. To find your SSN, log into your Student Finance account, go to the Documents section, and download your Entitlement Letter. Your SSN will appear under the barcode on the payment schedule letter. Alternatively, you can contact SLC directly, and they will provide it to you.",
      },
      {
        question: "Can I get a job after completing my course?",
        answer:
          "Yes. Our partner universities work closely with a wide range of employers to enhance your employability. Through opportunities such as live projects, guest lectures, career fairs, and networking events, you can gain practical experience, build professional connections, and improve your chances of securing employment after graduation.",
      },
    ],
  },
];