"use client";
import { useState, useEffect } from "react";

export default function ColorSchemeSelector() {
  const [scheme, setScheme] = useState("light");

  function syncScheme(scheme: string) {
    document.documentElement.setAttribute("data-scheme", scheme);
    window.localStorage.setItem("scheme", scheme);
  }

  useEffect(() => {
    const localscheme =
      window.localStorage.getItem("scheme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    if (localscheme) {
      setScheme(localscheme);
      syncScheme(localscheme);
    }
  }, []);

  function onClick() {
    setScheme((t) => {
      const newscheme = t === "light" ? "dark" : "light";
      syncScheme(newscheme);
      return newscheme;
    });
  }

  return (
    <button onClick={onClick}>
      Switch to {scheme === "light" ? "dark" : "light"} scheme
    </button>
  );
}
