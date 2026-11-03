import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }) {
  if (recipes.length === 0) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          No recipes found
        </h2>
        <p className="mt-2 text-slate-600">
          There are no recipes in this category yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
