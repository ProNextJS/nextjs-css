import { Text, Heading, Box } from "@radix-ui/themes";

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
          <Box pb="4">
            <Heading size="8">{entry.title}</Heading>
          </Box>
          <Box pb="4">
            <Text as="p">{entry.text}</Text>
          </Box>
        </Box>
      ))}
    </>
  );
}
