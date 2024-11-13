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
          <h1 className="mb-3">{entry.title}</h1>
          <div className="mb-3">{entry.text}</div>
        </div>
      ))}
    </>
  );
}
