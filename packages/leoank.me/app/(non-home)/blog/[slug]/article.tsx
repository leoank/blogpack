import { MDXRemote } from "next-mdx-remote/rsc";
import { TBlogFrontMatter } from "../utils";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { MDXComponents } from "@/mdx/_components/mdx-components";
import "./style.css";

export type TArticleProps = {
  frontmatter: TBlogFrontMatter;
  content: string;
};

export function Article(props: TArticleProps) {
  const { frontmatter, content } = props;

  return (
    <article className="blog-article">
      <h1>{frontmatter.title}</h1>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
          },
        }}
        components={MDXComponents}
      />
    </article>
  );
}
