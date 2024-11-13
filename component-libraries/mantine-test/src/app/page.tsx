import { Flex, Box } from "@mantine/core";

import Blog from "./blog";
import BlogForm from "./blog-form";

import { getEntries } from "@/blog";

export default async function Home() {
  const entries = await getEntries();

  return (
    <main>
      <Flex>
        <Box w="50%" p="md">
          <Blog entries={entries} />
        </Box>
        <Box w="50%" p="md">
          <BlogForm />
        </Box>
      </Flex>
    </main>
  );
}
