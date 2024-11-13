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
          <h1 className="font-bold text-2xl mb-2">{entry.title}</h1>
          <div className="mb-2 font-light">{entry.text}</div>
        </div>
      ))}
    </>
  );
}
