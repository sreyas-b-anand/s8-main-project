"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function FeatureCard({ item, index }) {
  const Icon = item.icon;

  if (item.disabled) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
        className="relative flex flex-col gap-3 rounded-xl border border-border bg-card p-5 opacity-50 select-none cursor-not-allowed"
        aria-disabled="true"
      >
        <div className="flex items-center justify-between">
          <span className="flex items-center justify-center size-9 rounded-lg bg-muted text-muted-foreground">
            <Icon className="size-4" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
            Coming soon
          </span>
        </div>
        <div>
          <p className="font-semibold text-sm text-card-foreground">{item.label}</p>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link
        href={item.href}
        className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 hover:border-foreground/20 hover:shadow-sm transition-all duration-200 h-full"
      >
        <div className="flex items-center justify-between">
          <span className="flex items-center justify-center size-9 rounded-lg bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
            <Icon className="size-4" />
          </span>
          <ArrowRight className="size-4 text-muted-foreground group-hover:text-muted-foreground transition-all duration-200 -translate-x-1 group-hover:translate-x-0" />
        </div>
        <div>
          <p className="font-semibold text-sm text-card-foreground">{item.label}</p>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
