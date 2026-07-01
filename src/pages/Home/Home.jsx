import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import CategoryCard from "../../components/CategoryCard/CategoryCard";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

import { getCategories } from "../../services/categoryService";
import { getRecipes } from "../../services/recipeService";

const Home = () => {

  const [categories, setCategories] = useState([]);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    const categoryData = await getCategories();

    const recipeData = await getRecipes();

    setCategories(categoryData);

    setRecipes(recipeData);

  };

  return (

    <>

      <Header/>

      <div style={{padding:"30px"}}>

        <h1>Welcome to Cafe Mehak</h1>

        <p>Fresh Food Delivered to Your Doorstep</p>

        <br/>

        <h2>Categories</h2>

        <br/>

        <div
          style={{
            display:"flex",
            gap:"20px",
            flexWrap:"wrap"
          }}
        >

          {categories.map(category=>(
            <CategoryCard
              key={category.id}
              category={category}
              onClick={()=>{}}
            />
          ))}

        </div>

        <br/><br/>

        <h2>Popular Recipes</h2>

        <br/>

        <div
          style={{
            display:"flex",
            gap:"20px",
            flexWrap:"wrap"
          }}
        >

          {recipes.map(recipe=>(
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}

        </div>

      </div>

      <Footer/>

    </>

  );

};

export default Home;