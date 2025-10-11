import { SafeMdxRenderer } from "safe-mdx";
import { mdxParse } from "safe-mdx/parse";
import { TBlogFrontMatter } from "../utils";
// import remarkGfm from "remark-gfm";
// import rehypeHighlight from "rehype-highlight";
import { MDXComponents } from "@/mdx/_components/mdx-components";
import "./style.css";

export type TArticleProps = {
  frontmatter: TBlogFrontMatter;
  content: string;
};

export function Article(props: TArticleProps) {
  const { frontmatter, content } = props;
  const ast = mdxParse(content);

  return (
    <article className="blog-article">
      <h1>{frontmatter.title}</h1>
      <SafeMdxRenderer
        markdown={content}
        mdast={ast}
        components={MDXComponents}
      />
    </article>
  );
}
