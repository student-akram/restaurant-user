import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

import { getRecipes } from "../../services/recipeService";

const CategoryRecipes = () => {
  const { categoryId } = useParams();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    const data = await getRecipes();

    const filtered = data.filter(
      (recipe) => recipe.categoryId === categoryId
    );

    setRecipes(filtered);
  };

  return (
    <>
      <Header />

      <div style={{ padding: "30px" }}>
        <h1>Recipes</h1>

        <br />

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CategoryRecipes;