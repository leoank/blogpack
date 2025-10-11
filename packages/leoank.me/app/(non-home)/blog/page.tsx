import Link from "next/link";
import { BLOG } from "@/constants/routes";
import { PlaceholderImageThreeShapes } from "@/components/icons";
import { getAllBlogPosts } from "./utils";

export default async function BlogPage() {
  const blogs = await getAllBlogPosts();

  return (
    <div>
      <h1 className="text-4xl">Blogs</h1>
      <p className="mt-2 text-small text-muted">
        Here you&apos;ll find a mix of thoughts and stories — lessons I&apos;ve
        learned through experience, experiments I&apos;ve tried, ideas I&apos;ve
        put on paper, and a few deep dives into tech.
      </p>

      <ul className="pt-10 pb-4">
        {blogs.map((blog) => (
          <li
            key={blog.slug}
            className="p-4 mb-8 border-b rounded border-b-muted/20 hover:bg-gray-900"
          >
            <Link href={`${BLOG}/${blog.slug}`} className="flex">
              <div className="w-32 shrink-0 flex items-center justify-center">
                {blog.frontmatter.thumbnailURL ? (
                  <img
                    src={blog.frontmatter.thumbnailURL}
                    className="w-full h-full object-contain rounded-md"
                  />
                ) : (
                  <PlaceholderImageThreeShapes className="size-28 text-muted" />
                )}
              </div>
              <div className="pl-8">
                <h3 className="font-bold text-2xl leading-relaxed">
                  {blog.frontmatter.title}
                </h3>
                <p className="text-muted text-sm">{blog.frontmatter.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
