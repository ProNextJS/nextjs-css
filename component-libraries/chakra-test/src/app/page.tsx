import { Stack, Box } from "@chakra-ui/react";
import { getEntries } from "@/blog";

import Blog from "./blog";
import BlogForm from "./blog-form";

export default async function Home() {
  const entries = await getEntries();

  return (
    <main>
      <Box p={5}>
        <Stack spacing={4} direction="row">
          <Box w="50%">
            <Blog entries={entries} />
          </Box>
          <Box w="50%">
            <BlogForm />
          </Box>
        </Stack>
      </Box>
    </main>
  );
}
