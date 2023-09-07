import {
  getFileName,
  getPost,
  getSortedPostsData,
} from "@/lib/utils/contentHelper";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const contentDir = "posts";
export default function BlogPage({ params }: { params: { slug: string } }) {
  const post = getPost(getFileName(params.slug, contentDir), contentDir);
  return (
    <div className="flex justify-center align-center">
      <article className="prose prose-stone dark:prose-invert max-w-2xl gap-10">
        <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl mb-6">
          {post.data.title}
        </h1>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
        <p>{post.date}</p>
      </article>
    </div>
  );
}
export async function generateStaticParams() {
  const posts = getSortedPostsData(contentDir);
  return posts.map((post: any) => ({
    slug: post.slug,
    fileName: post.fileName,
  }));
}
