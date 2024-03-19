"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const EmotionRegistry = ({ children }: { children: React.ReactNode }) => {
  const [emotionCache] = useState(() => {
    const emotionCache = createCache({ key: "css", prepend: true });
    emotionCache.compat = true;
    return emotionCache;
  });

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${emotionCache.key} ${Object.keys(
          emotionCache.inserted
        ).join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(emotionCache.inserted).join(" "),
        }}
      />
    );
  });
  if (typeof window !== "undefined") return <>{children}</>;

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
};

export default EmotionRegistry;
