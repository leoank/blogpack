import { getAllBlogPosts, getBlogPostBySlug, TBlogMDXData } from "../utils";
import { Article } from "./article";

export async function generateStaticParams() {
  const blogs = await getAllBlogPosts();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

type BlogPostProps = {
  params: Promise<Pick<TBlogMDXData, "slug">>;
};

export default async function BlogPost(props: BlogPostProps) {
  const { params } = props;
  const { slug } = await params;
  try {
    const { content, frontmatter } = await getBlogPostBySlug(slug);

    return <Article content={content} frontmatter={frontmatter} />;
  } catch (error) {
    return <div>Blog not found!</div>;
  }
}
