import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const contentUrl =
  "https://raw.githubusercontent.com/yassinmoussamih/yassinmoussamih/main/README.md";

export default async function AboutPage() {
  const pageContent = await fetch(contentUrl, {
    headers: {
      Accept: "application/vnd.github.raw",
    },
  });
  let markdown = await pageContent.text();
  return (
    <div className="flex justify-center align-center">
      <article className="prose prose-stone dark:prose-invert max-w-2xl">
        <ReactMarkdown rehypePlugins={[rehypeRaw, remarkGfm]}>
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  );
}
