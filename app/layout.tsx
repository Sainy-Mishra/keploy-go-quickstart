import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { TableOfContents } from "@/components/TableOfContents";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Record and replay Go API tests with Keploy",
  description:
    "A beginner-friendly walkthrough of the Keploy Echo + PostgreSQL quickstart: install Keploy, record real API calls as tests, and replay them without a database.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
              <span className="text-sm font-semibold tracking-tight">
                Keploy for Go developers
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://keploy.io/docs/quickstart/samples-echo/"
                  className="hidden text-sm text-[var(--muted)] hover:text-[var(--fg)] sm:block"
                >
                  Official quickstart
                </a>
                <ThemeToggle />
              </div>
            </div>
          </header>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-10 lg:grid-cols-[minmax(0,1fr)_14rem]">
            <main className="doc min-w-0 max-w-3xl">{children}</main>
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents />
              </div>
            </aside>
          </div>
          <footer className="mx-auto max-w-6xl px-5 py-10 text-sm text-[var(--muted)]">
            Written as part of the Keploy DevRel assignment. Built with Next.js and MDX.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
