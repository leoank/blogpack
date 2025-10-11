import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDir = path.join(process.cwd(), "mdx");
const blogsDir = path.join(rootDir, "blogs");

export function getAllBlogPosts() {
  const blogs = fs
    .readdirSync(blogsDir)
    .map((file) => file.replace(".mdx", ""));
  return {
    blogs,
  };
}

export function getBlogPostBySlug(slug: string) {
  const fullPath = path.join(blogsDir, `${slug.replace(".mdx", "")}.mdx`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found, complete path: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data,
    content,
  };
}
