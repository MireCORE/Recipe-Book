import RecipeGrid from "../components/RecipeGrid";
import { recipes } from "../data/recipeData";

export default function CategoryIndex() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-950">
        All Recipes
      </h1>
      <p className="mb-7 text-slate-600">
        Choose a category from the sidebar to filter the recipes.
      </p>
      <RecipeGrid recipes={recipes} />
    </div>
  );
}
