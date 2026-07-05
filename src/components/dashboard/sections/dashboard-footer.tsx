import { FOOTER_LINKS } from "@/lib/dashboard-data";

export function DashboardFooter() {
  return (
    <footer className="mt-4 border-t border-[color:var(--border)]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-[color:var(--muted)] sm:flex-row sm:px-6 lg:px-8">
        <p>© 2026 Globify Tech Institute. All rights reserved.</p>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              data-cursor-hover=""
              className="transition-colors hover:text-[#7FD3FF]"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
