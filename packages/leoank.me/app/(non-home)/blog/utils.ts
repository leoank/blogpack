import { allBlogPostSlug } from "@/mdx/blogs/all";
import matter from "gray-matter";

export type TBlogFrontMatter = {
  title: string;
  summary: string;
  date: string;
  thumbnailURL?: string;
  slug: string;
};

export type TBlogMDXData = {
  frontmatter: TBlogFrontMatter;
  content: string;
  slug: string;
};

function isValidBlogFrontMatter(
  frontMatter: unknown
): frontMatter is TBlogFrontMatter {
  if (typeof frontMatter !== "object" || !frontMatter) {
    throw new Error("Frontmatter is not a valid object.");
  }

  if (!("title" in frontMatter) || typeof frontMatter.title !== "string") {
    throw new Error(
      `Frontmatter should have title, but it is missing. Got: ${JSON.stringify(
        frontMatter,
        null,
        2
      )}`
    );
  }

  if (!("summary" in frontMatter) || typeof frontMatter.summary !== "string") {
    throw new Error(
      `Frontmatter should have summary, but it is missing. Got: ${JSON.stringify(
        frontMatter,
        null,
        2
      )}`
    );
  }
  if (
    !("date" in frontMatter) ||
    typeof frontMatter.date !== "string" ||
    isNaN(new Date(frontMatter.date).getTime())
  ) {
    throw new Error(
      `Frontmatter should have a valid date string, Got: ${JSON.stringify(
        frontMatter,
        null,
        2
      )}`
    );
  }

  return true;
}

export async function getBlogPostBySlug(slug: string): Promise<TBlogMDXData> {
  const rawFileContent = (await import(`@/mdx/blogs/${slug}.mdx`))
    .default as unknown as string;

  const { data, content } = matter(rawFileContent);

  if (!isValidBlogFrontMatter(data)) {
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
