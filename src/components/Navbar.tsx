import { Flag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/teams", label: "Teams" },
  { to: "/drivers", label: "Drivers" },
  { to: "/calendar", label: "Calendar" },
  { to: "/results", label: "Results" },
  { to: "/standings", label: "Standings" },
  { to: "/glossary", label: "Glossary" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-black tracking-tight" onClick={() => setOpen(false)}>
          <span className="rounded-xl bg-[#E10600] p-2 shadow-[0_0_32px_rgba(225,6,0,0.35)]">
            <Flag size={18} />
          </span>
          F1 Rookie Guide
        </Link>

        <div className="hidden gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? "text-white" : "text-white/55 hover:text-white"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/90 px-4 py-4 md:hidden">
          <div className="grid gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 px-4 py-3 text-white/75"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
