import { Text, Heading, Box } from "@chakra-ui/react";

import { type BlogEntry } from "@/types";

export default function Blog({
  entries,
}: Readonly<{
  entries: BlogEntry[];
}>) {
  return (
    <>
      {entries.map((entry) => (
        <Box key={entry.title}>
          <Heading mb={3}>{entry.title}</Heading>
          <Text mb={3}>{entry.text}</Text>
        </Box>
      ))}
    </>
  );
}
