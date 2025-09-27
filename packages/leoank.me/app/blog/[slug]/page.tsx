import { Suspense } from "react";
import { BlogPostContent } from "./content";
import { PageLoader } from "../../../components/page-loader";

export function generateStaticParams() {
  return [{ slug: "my-first-blog" }];
}

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost(props: BlogPostProps) {
  const { params } = props;
  const { slug } = await params;

  return (
    <Suspense fallback={<PageLoader />}>
      <BlogPostContent slug={slug} />
    </Suspense>
  );
}

export const dynamicParams = false;
