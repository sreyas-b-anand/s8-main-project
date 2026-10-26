import { Poppins } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/app-shell";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "UBSP",
    template: "%s | UBSP",
  },
  description:
    "AI-powered startup analysis — funding insights, success prediction, and intelligent Q&A.",
};

// Inline script runs synchronously before first paint to prevent theme flash.
// Reads localStorage, falls back to OS preference, applies .dark class immediately.
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('ubsp-theme');
    var dark =
      stored === 'dark' ||
      (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Blocking script — prevents dark mode flash on load */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="h-full bg-background text-foreground">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
