import { useParams } from "react-router";
import RecipeGrid from "../components/RecipeGrid";
import { categories, recipes } from "../data/recipeData";
import NotFound from "./NotFound";

export default function CategoryDetail() {
  const { categoryId } = useParams();

  const category = categories.find((item) => item.id === categoryId);

  if (!category) {
    return <NotFound />;
  }

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === categoryId
  );

  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight text-slate-950">
        {category.name}
      </h1>
      <p className="mb-7 mt-2 text-slate-600">
        {category.description}
      </p>

      <RecipeGrid recipes={filteredRecipes} />
    </section>
  );
}
