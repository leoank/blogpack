import Link from "next/link";
import { posts } from "./data";
import { BLOG } from "@/constants/routes";
import { PlaceholderImageThreeShapes } from "@/components/icons";
export default async function BlogPage() {
  return (
    <div>
      <h1 className="text-4xl">Blogs</h1>
      <p className="mt-2 text-small text-muted">
        Here you&apos;ll find a mix of thoughts and stories — lessons I&apos;ve
        learned through experience, experiments I&apos;ve tried, ideas I&apos;ve
        put on paper, and a few deep dives into tech.
      </p>

      <ul className="pt-10 pb-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 mb-8 border-b rounded border-b-muted/20 hover:bg-gray-900"
          >
            <Link href={`${BLOG}/${post.slug}`} className="flex">
              <div className="w-32 shrink-0 flex items-center justify-center">
                {post.thumbnail ? (
                  <img
                    src={post.thumbnail}
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <PlaceholderImageThreeShapes className="size-28 text-muted" />
                )}
              </div>
              <div className="pl-8">
                <h3 className="font-bold text-2xl leading-relaxed">
                  {post.title}
                </h3>
                <p className="text-muted text-sm">{post.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
