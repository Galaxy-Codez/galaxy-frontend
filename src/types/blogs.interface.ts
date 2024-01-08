export interface Blog {
  _id?: string;
  title: string;
  description: string;
  image: string;
  categoryId: string;
  authorId: string;
  createdAt: string;
  views: number;
  faq: { question: string; answer: string }[];
  type: string;
  slug: string;
}
