import { allBlogPostSlug } from "@/mdx/blogs/all";
import { isValidFrontMatter } from "@/mdx/is";
import { TFrontmatter } from "@/mdx/types";
import matter from "gray-matter";

export type TBlogMDXData = {
  frontmatter: TFrontmatter;
  content: string;
  slug: string;
};

export async function getBlogPostBySlug(slug: string): Promise<TBlogMDXData> {
  const rawFileContent = (await import(`@/mdx/blogs/${slug}.mdx`))
    .default as unknown as string;

  const { data, content } = matter(rawFileContent);

  if (!isValidFrontMatter(data)) {
    throw new Error("Frontmatter is not valid.");
  }

  return {
    frontmatter: data,
    content,
    slug,
  };
}

export async function getAllBlogPosts(): Promise<TBlogMDXData[]> {
  const blogs = [] as TBlogMDXData[];

  for (const slug of allBlogPostSlug) {
    const blogMDXData = await getBlogPostBySlug(slug);
    blogs.push(blogMDXData);
  }

  return blogs;
}
