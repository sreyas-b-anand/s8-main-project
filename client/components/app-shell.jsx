"use client";

import { useState } from "react";
import AppSidebar from "./app-sidebar";
import AppHeader from "./app-header";
import MobileDrawer from "./mobile-drawer";

/**
 * AppShell owns only layout state: sidebar collapsed + mobile drawer open.
 * Theme (dark/light) is fully handled by ThemeToggle — no state here.
 */
export default function AppShell({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleSidebar() {
    setCollapsed((c) => !c);
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop sidebar */}
      <AppSidebar collapsed={collapsed} />

      {/* Mobile drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Main column */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <AppHeader
          onMobileOpen={() => setMobileOpen(true)}
          onSidebarToggle={toggleSidebar}
        />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-8 md:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
