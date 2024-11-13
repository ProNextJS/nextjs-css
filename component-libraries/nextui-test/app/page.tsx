import { getEntries } from "@/lib/blog";

import Blog from "@/components/blog";
import BlogForm from "@/components/blog-form";

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
