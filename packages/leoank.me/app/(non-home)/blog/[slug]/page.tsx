import { posts, TPost } from "../data";
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

type BlogPostProps = {
  params: Promise<Pick<TPost, "slug">>;
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
