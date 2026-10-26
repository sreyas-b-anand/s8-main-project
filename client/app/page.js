"use client";

import { motion } from "motion/react";
import { NAV_ITEMS } from "@/lib/nav";
import FeatureCard from "@/components/feature-card";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-col gap-2"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Welcome to UBSP
        </h2>
        <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
          An AI-powered toolkit for startup analysis. Explore funding opportunities,
          predict startup success, and get instant answers through our RAG-powered assistant.
        </p>
      </motion.div>

      {/* Feature grid */}
      <div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4"
        >
          Features
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {NAV_ITEMS.map((item, i) => (
            <FeatureCard key={item.key} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
