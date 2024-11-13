import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { getEntries } from "@/blog";

import Blog from "./blog";
import BlogForm from "./blog-form";

export default async function Home() {
  const entries = await getEntries();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          m: 4,
          display: "flex",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Blog entries={entries} />
        </Box>
        <Box sx={{ width: "50%" }}>
          <BlogForm />
        </Box>
      </Box>
    </Container>
  );
}
