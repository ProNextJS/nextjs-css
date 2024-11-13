import { Title, Text, Box } from "@mantine/core";

import { type BlogEntry } from "@/types";

export default function Blog({
  entries,
}: Readonly<{
  entries: BlogEntry[];
}>) {
  return (
    <>
      {entries.map((entry) => (
        <div key={entry.title}>
          <Box pb="sm">
            <Title order={2}>{entry.title}</Title>
          </Box>
          <Box pb="sm">
            <Text>{entry.text}</Text>
          </Box>
        </div>
      ))}
    </>
  );
}
