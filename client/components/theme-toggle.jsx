"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Standalone theme toggle. Reads from localStorage on mount and
 * writes both to localStorage and the `html.dark` class directly.
 * No prop drilling — can be placed anywhere in the tree.
 */
export default function ThemeToggle({ className }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read persisted preference, fall back to OS preference
    const stored = localStorage.getItem("ubsp-theme");
    const prefersDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
    setMounted(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("ubsp-theme", next ? "dark" : "light");
  }

  // Avoid icon flash before mount
  if (!mounted) {
    return (
      <span
        className={cn(
          "inline-flex size-8 items-center justify-center rounded-md",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-md",
        "text-muted-foreground hover:text-foreground hover:bg-accent",
        "transition-colors duration-150",
        className
      )}
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
