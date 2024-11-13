import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { type BlogEntry } from "@/types";

export default function Blog({
  entries,
}: Readonly<{
  entries: BlogEntry[];
}>) {
  return (
    <>
      {entries.map((entry) => (
        <Stack key={entry.title}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {entry.title}
          </Typography>
          <Typography sx={{ mb: 2 }}>{entry.text}</Typography>
        </Stack>
      ))}
    </>
  );
}
