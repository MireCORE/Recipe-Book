import RecipeGrid from "../components/RecipeGrid";
import { recipes } from "../data/recipeData";

export default function Recipes() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-8 sm:py-10">
      <h1 className="mb-7 text-3xl font-bold tracking-tight text-slate-950">
        All Recipes
      </h1>

      <RecipeGrid recipes={recipes} />
    </section>
  );
}
