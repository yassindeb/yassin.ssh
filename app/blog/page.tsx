import { Button } from "@/components/ui/button";
import { getSortedPostsData } from "@/lib/utils/contentHelper";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const MAX_DISPLAY = 5;

export default async function Blog() {
  const posts = getSortedPostsData("posts");
  return (
    <div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Latest
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p> */}
        </div>
        <ul className="divide-y">
          {!posts.length && "No posts found."}
          {posts.slice(0, MAX_DISPLAY).map((post: any) => {
            return (
              <li key={post.slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="leading-7 [&:not(:first-child)]:mt-6">
                        <p>{post.date}</p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                            <Link href={`/blog/${post.slug}`} className="">
                              {post.title}
                            </Link>
                          </h2>
                          {/* <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div> */}
                        </div>
                        <div className="prose max-w-none ">{post.summary}</div>
                      </div>
                      <div>
                        <Button variant="outline" size="icon">
                          <Link
                            href={`/blog/${post.slug}`}
                            aria-label={`Read "${post.title}"`}
                          >
                            <ArrowRightIcon width={20} height={20} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
