import { NavLink, Outlet } from "react-router";
import { categories } from "../data/recipeData";

export default function CategoriesLayout() {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-5 py-8 md:grid-cols-[230px_minmax(0,1fr)] md:py-10">
      <aside className="h-fit rounded-xl bg-white p-5 shadow-md">
        <h1 className="text-xl font-bold text-slate-950">
          Categories
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Browse recipes by category.
        </p>

        <nav aria-label="Recipe categories" className="mt-5 flex flex-col gap-2">
          <NavLink
            to="/categories"
            end
            className={({ isActive }) =>
              `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-rose-50 text-rose-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-rose-600"
              }`
            }
          >
            All recipes
          </NavLink>

          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={`/categories/${category.id}`}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-rose-50 text-rose-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-rose-600"
                }`
              }
            >
              {category.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="min-w-0">
        <Outlet />
      </div>
    </section>
  );
}
