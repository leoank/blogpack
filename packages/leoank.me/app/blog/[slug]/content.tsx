"use client";

export type BlogPostContentProps = {
  slug: string;
};

export async function BlogPostContent(props: BlogPostContentProps) {
  const { slug } = props;
  const { default: Post } = await import(`./(mdx)/${slug}.mdx`);

  return (
    <div>
      <Post />
    </div>
  );
}
