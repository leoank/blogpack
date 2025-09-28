export function generateStaticParams() {
  return [{ slug: "welcome" }];
}

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost(props: BlogPostProps) {
  const { params } = props;
  const { slug } = await params;
  try {
    const { default: Post } = await import(`./(mdx)/${slug}.mdx`);
    return <Post />;
  } catch {
    return <div>Blog not found!</div>;
  }
}
