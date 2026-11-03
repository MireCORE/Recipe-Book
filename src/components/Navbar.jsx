import { NavLink } from "react-router";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "Recipes", to: "/recipes" },
  { label: "Categories", to: "/categories" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-100 bg-white shadow-sm">
      <div className="mx-auto flex min-h-20 max-w-5xl flex-col items-center justify-between gap-3 px-5 py-4 sm:flex-row">
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight text-rose-600"
        >
          Recipe Book
        </NavLink>

        <nav aria-label="Main navigation" className="flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `text-base font-medium transition-colors hover:text-rose-600 ${
                  isActive ? "text-rose-600" : "text-slate-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
