"use client";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

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
          <Title level={2}>{entry.title}</Title>
          <Paragraph>{entry.text}</Paragraph>
        </div>
      ))}
    </>
  );
}
