export type TPost = {
  id: string;
  title: string;
  summary: string;
  slug: string;
  thumbnail?: string;
};

export const WELCOME_POST: TPost = {
  id: "welcome",
  title: "My first blog post",
  summary:
    "This is a small summary of my first blog post. It is created to test mdx import in my next js project.",
  slug: "/welcome",
};

export const posts: TPost[] = [WELCOME_POST];
