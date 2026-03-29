export interface TermsSection {
  id: number;
  title: string;
  paragraphs: string[];
  listItems?: string[];
  listPosition?: 'before' | 'after';
}