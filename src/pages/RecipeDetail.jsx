import { Link, useParams } from "react-router";
import { recipes } from "../data/recipeData";
import NotFound from "./NotFound";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = recipes.find((item) => item.id === recipeId);

  if (!recipe) {
    return <NotFound />;
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-7 sm:py-8">
      <article className="rounded-xl bg-white p-6 shadow-md sm:p-8">
        <Link
          to="/recipes"
          className="inline-flex items-center gap-2 text-base font-medium text-rose-600 transition-colors hover:text-rose-700 hover:underline"
        >
          <span aria-hidden="true">←</span>
          Back to Recipes
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {recipe.title}
          </h1>
          <span className="rounded-md bg-rose-100 px-3 py-1.5 text-sm font-medium lowercase text-rose-700">
            {recipe.category}
          </span>
        </div>

        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
          {recipe.description}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Ingredients
            </h2>
            <ul className="mt-5 list-inside list-disc space-y-3 text-base leading-relaxed text-slate-800">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={`${recipe.id}-ingredient-${index}`}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Instructions
            </h2>
            <ol className="mt-5 list-inside list-decimal space-y-3 text-base leading-relaxed text-slate-800">
              {recipe.instructions.map((instruction, index) => (
                <li key={`${recipe.id}-instruction-${index}`}>
                  {instruction}
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </section>
  );
}
