import { Link } from "react-router";

export default function RecipeCard({ recipe }) {
  return (
    <article className="flex h-full flex-col rounded-xl bg-white p-7 shadow-md transition-shadow hover:shadow-lg">
      <h2 className="text-xl font-bold leading-snug text-slate-950">
        {recipe.title}
      </h2>

      <p className="mt-3 flex-1 text-base leading-relaxed text-slate-600">
        {recipe.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="rounded-md bg-rose-100 px-3 py-1.5 text-sm font-medium lowercase text-rose-700">
          {recipe.category}
        </span>

        <Link
          to={`/recipes/${recipe.id}`}
          className="text-sm font-semibold text-rose-600 hover:text-rose-700 hover:underline"
        >
          View recipe
        </Link>
      </div>
    </article>
  );
}
