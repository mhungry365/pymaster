import Link from "next/link";

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/playground", label: "Playground" },
  { href: "/practice", label: "Practice" },
  { href: "/projects", label: "Projects" },
  { href: "/notes", label: "Notes" },
  { href: "/profile", label: "Profile" },
];

export function AppHeader() {
  return (
    <header className="border-b border-slate-200 bg-slate-100/90">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400 text-sm font-black text-slate-950">
            Py
          </span>
          <span className="text-xl font-bold tracking-tight text-slate-950">
            PyMaster
          </span>
        </Link>

        <nav className="flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-emerald-300/50 hover:bg-white hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
