"use client";

import { usePathname } from "next/navigation";
import { Menu, PanelLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { ALL_NAV_ITEMS } from "@/lib/nav";
import ThemeToggle from "./theme-toggle";

function getPageTitle(pathname) {
  // Exact match first (catches "/")
  const exact = ALL_NAV_ITEMS.find((item) => item.href === pathname);
  if (exact) return exact.label;
  // Prefix match for nested routes
  const prefix = ALL_NAV_ITEMS.find(
    (item) => item.href !== "/" && pathname.startsWith(item.href)
  );
  return prefix ? prefix.label : "UBSP";
}

export default function AppHeader({ onMobileOpen, onSidebarToggle }) {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-10 flex items-center h-14 px-3 gap-2 border-b border-border bg-background/80 backdrop-blur-sm shrink-0">

      {/* Mobile: hamburger */}
      <button
        className="md:hidden inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        onClick={onMobileOpen}
        aria-label="Open navigation menu"
        title="Open navigation"
      >
        <Menu className="size-4" />
      </button>

      {/* Desktop: sidebar collapse toggle */}
      <button
        className="hidden md:inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        onClick={onSidebarToggle}
        aria-label="Toggle sidebar"
        title="Toggle sidebar"
      >
        <PanelLeft className="size-4" />
      </button>

      {/* Divider */}
      <div className="w-px h-5 bg-border mx-1 shrink-0" />

      {/* Page title */}
      <h1 className="flex-1 text-sm font-semibold text-foreground tracking-tight truncate">
        {title}
      </h1>

      {/* Right actions */}
      <div className="flex items-center gap-1">
        <ThemeToggle />
      </div>
    </header>
  );
}
