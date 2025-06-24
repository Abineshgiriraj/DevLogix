export type Language = 'C' | 'Java' | 'Python';

export interface Article {
  id: string;
  title: string;
  description: string;
  link: string;
  language: Language;
}

export interface Section {
  language: Language;
  articles: Article[];
}

export interface SearchProps {
  searchTerm: string;
  onSearch: (term: string) => void;
} 