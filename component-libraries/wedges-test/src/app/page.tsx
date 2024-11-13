import { getEntries } from "@/blog";

import Blog from "./blog";
import BlogForm from "./blog-form";

export default async function Home() {
  const entries = await getEntries();

  return (
    <section className="flex">
      <div className="w-1/2 p-3">
        <Blog entries={entries} />
      </div>
      <div className="w-1/2 p-3">
        <BlogForm />
      </div>
    </section>
  );
}
