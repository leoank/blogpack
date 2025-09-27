export function generateStaticParams() {
  return [{ slug: "my-first-blog" }];
}

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost(props: BlogPostProps) {
  const { params } = props;
  const { slug } = await params;
  const { default: Post } = await import(`./(mdx)/${slug}.mdx`);

  return <Post />;
}

export const dynamicParams = false;
