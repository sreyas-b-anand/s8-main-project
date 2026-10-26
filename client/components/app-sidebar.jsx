"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { HOME_ITEM, NAV_ITEMS } from "@/lib/nav";

const EXPANDED = 220;
const COLLAPSED = 56;

export default function AppSidebar({ collapsed }) {
  const pathname = usePathname();

  return (
    <motion.aside
      animate={{ width: collapsed ? COLLAPSED : EXPANDED }}
      transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      className="hidden md:flex flex-col shrink-0 h-screen sticky top-0 border-r border-border bg-sidebar overflow-hidden z-20"
    >
      {/* Brand */}
      <div className="flex items-center h-14 px-3 border-b border-border shrink-0">
        <Link href="/" className="flex items-center gap-2.5 min-w-0" aria-label="UBSP home">
          <span className="flex items-center justify-center size-7 rounded-md bg-primary text-primary-foreground font-bold text-sm shrink-0 select-none">
            U
          </span>
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.span
                key="brand"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.15 }}
                className="font-semibold text-sm tracking-tight text-sidebar-foreground whitespace-nowrap"
              >
                UBSP
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* Home */}
      <div className="px-2 pt-3 shrink-0">
        <NavLink
          item={HOME_ITEM}
          active={pathname === HOME_ITEM.href}
          collapsed={collapsed}
        />
      </div>

      <div className="mx-3 my-2 border-t border-border shrink-0" />

      <nav className="flex-1 px-2 flex flex-col gap-0.5 overflow-y-auto" aria-label="Features">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.key}
            item={item}
            active={!item.disabled && pathname.startsWith(item.href)}
            collapsed={collapsed}
          />
        ))}
      </nav>
    </motion.aside>
  );
}

function NavLink({ item, active, collapsed }) {
  const { href, icon: Icon, label, disabled } = item;

  const inner = (
    <span
      className={cn(
        "flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm w-full transition-colors",
        collapsed && "justify-center",
        active
          ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
          : disabled
          ? "text-sidebar-foreground/30 cursor-not-allowed"
          : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      )}
      aria-disabled={disabled || undefined}
    >
      <Icon className="size-4 shrink-0" aria-hidden="true" />

      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.span
            key={`lbl-${label}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="flex-1 flex items-center justify-between whitespace-nowrap overflow-hidden"
          >
            {label}
            {disabled && (
              <span className="ml-2 text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground leading-none">
                Soon
              </span>
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );

  if (disabled) return <div className="w-full">{inner}</div>;

  return (
    <Link href={href} className="w-full" aria-current={active ? "page" : undefined}>
      {inner}
    </Link>
  );
}
