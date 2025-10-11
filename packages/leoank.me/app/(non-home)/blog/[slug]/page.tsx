import { posts, TPost } from "../data";
import { getAllBlogPosts, getBlogPostBySlug } from "../utils.server";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { MDXComponents } from "mdx/types";
import clsx from "@/util/clsx";

import TestComponent from "@/mdx/_components/TestComponent";

import "./style.css";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl leading-snug font-bold my-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl leading-normal font-bold my-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl leading-normal font-bold my-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-body leading-normal my-2">{children}</p>
  ),
  img: ({ className, alt, ...rest }) => (
    <span className="flex flex-col gap-2 justify-center items-center my-4">
      <img
        {...rest}
        alt={alt}
        className={clsx(
          "object-contain w-full object-center max-h-[70vh]",
          className
        )}
      />
      <span className="text-xs">{alt}</span>
    </span>
  ),
  blockquote: ({ children }) => (
    <blockquote className="text-sm ml-3 my-4 text-muted pl-2 border-l-muted border-l-4 [&>p]:my-0">
      {children}
    </blockquote>
  ),
  ol: (props) => <ol {...props} className="list-decimal pl-8 md:pl-10" />,
  TestComponent,
};

export function generateStaticParams() {
  const { blogs } = getAllBlogPosts();
  return blogs.map((blog) => ({ slug: blog }));
}

type BlogPostProps = {
  params: Promise<Pick<TPost, "slug">>;
};

export default async function BlogPost(props: BlogPostProps) {
  const { params } = props;
  const { slug } = await params;
  try {
    const { content, frontmatter } = getBlogPostBySlug(slug);

    return (
      <article>
        <h1>{frontmatter.title}</h1>
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeHighlight],
            },
          }}
          components={components}
        />
      </article>
    );
  } catch (error) {
    console.log("Error", error);
    return <div>Blog not found!</div>;
  }
}
