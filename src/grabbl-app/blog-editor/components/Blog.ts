export interface Blog {
  id: string;
  title: string;
  intro: string;
  imageUrl: string;
  boldBody: string;
  body2Paragraph: string;
  quote: string;
  conclusion: string;
}

export type Blogs = {
  [key: string]: Blog;
};
