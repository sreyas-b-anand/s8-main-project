"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { HOME_ITEM, NAV_ITEMS } from "@/lib/nav";

export default function MobileDrawer({ open, onClose }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            role="dialog"
            aria-label="Navigation"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-border flex flex-col md:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between h-14 px-4 border-b border-border shrink-0">
              <Link
                href="/"
                className="flex items-center gap-2.5"
                onClick={onClose}
                aria-label="UBSP home"
              >
                <span className="flex items-center justify-center size-7 rounded-md bg-primary text-primary-foreground font-bold text-sm select-none">
                  U
                </span>
                <span className="font-semibold text-sm text-sidebar-foreground">
                  UBSP
                </span>
              </Link>
              <button
                onClick={onClose}
                className="inline-flex size-7 items-center justify-center rounded-md text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                aria-label="Close navigation"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Home */}
            <div className="px-3 pt-3 shrink-0">
              <DrawerLink
                item={HOME_ITEM}
                active={pathname === HOME_ITEM.href}
                onClick={onClose}
              />
            </div>

            <div className="mx-3 my-2 border-t border-border shrink-0" />

            {/* Feature links */}
            <nav className="flex-1 px-3 flex flex-col gap-0.5 overflow-y-auto" aria-label="Features">
              {NAV_ITEMS.map((item) => (
                <DrawerLink
                  key={item.key}
                  item={item}
                  active={!item.disabled && pathname.startsWith(item.href)}
                  onClick={onClose}
                />
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function DrawerLink({ item, active, onClick }) {
  const { href, icon: Icon, label, disabled } = item;

  const inner = (
    <span
      className={cn(
        "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm w-full transition-colors",
        active
          ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
          : disabled
          ? "text-sidebar-foreground/30 cursor-not-allowed"
          : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      )}
      aria-disabled={disabled || undefined}
    >
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      <span className="flex-1">{label}</span>
      {disabled && (
        <span className="text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground leading-none">
          Soon
        </span>
      )}
    </span>
  );

  if (disabled) return <div className="w-full">{inner}</div>;

  return (
    <Link
      href={href}
      onClick={onClick}
      className="w-full"
      aria-current={active ? "page" : undefined}
    >
      {inner}
    </Link>
  );
}
