export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  questionCount: string;
  illustration: React.ReactNode;
  faqs: FaqItem[];
}