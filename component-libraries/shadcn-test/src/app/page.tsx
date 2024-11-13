import Blog from "./blog";
import BlogForm from "./blog-form";

import { getEntries } from "@/blog";

export default async function Home() {
  const entries = await getEntries();

  return (
    <main className="flex">
      <div className="w-1/2">
        <Blog entries={entries} />
      </div>
      <div className="w-1/2">
        <BlogForm />
      </div>
    </main>
  );
}
