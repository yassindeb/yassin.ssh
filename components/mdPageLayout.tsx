import { getPost } from "@/lib/utils/contentHelper";
import * as path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const contentDir = path.basename(__dirname);

export default function MdPageLayout() {
  return (
    <div className="flex justify-center align-center">
      <article className="prose prose-stone dark:prose-invert max-w-2xl">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {getPost(contentDir + ".md").content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
