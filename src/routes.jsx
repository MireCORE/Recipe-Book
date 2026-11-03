import { Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout";
import CategoriesLayout from "./layouts/CategoriesLayout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import CategoryIndex from "./pages/CategoryIndex";
import CategoryDetail from "./pages/CategoryDetail";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />

        <Route path="/categories" element={<CategoriesLayout />}>
          <Route index element={<CategoryIndex />} />
          <Route path=":categoryId" element={<CategoryDetail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
