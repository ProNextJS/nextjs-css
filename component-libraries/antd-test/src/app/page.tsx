import { Flex } from "antd";

import BlogForm from "./blog-form";
import Blog from "./blog";

import { getEntries } from "@/blog";

export default async function Home() {
  const entries = await getEntries();

  return (
    <main>
      <Flex>
        <div style={{ width: "50%" }}>
          <Blog entries={entries} />
        </div>
        <div style={{ width: "50%" }}>
          <BlogForm />
        </div>
      </Flex>
    </main>
  );
}
