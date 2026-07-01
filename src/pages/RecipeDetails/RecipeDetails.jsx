import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { getRecipeById } from "../../services/recipeService";
import { useCart } from "../../context/CartContext";

const RecipeDetails = () => {
    const { addToCart } = useCart();

  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {

    loadRecipe();

  }, []);

  const loadRecipe = async () => {

    const data = await getRecipeById(recipeId);

    setRecipe(data);

  };

  if (!recipe) {

    return <h2>Loading...</h2>;

  }

  return (

    <>

      <Header/>

      <div style={{padding:"30px"}}>

        <img
          src={recipe.imageUrl}
          width="350"
          alt={recipe.name}
        />

        <br/><br/>

        <h1>{recipe.name}</h1>

        <h3>{recipe.categoryName}</h3>

        <h2>₹ {recipe.price}</h2>

        <br/>

        <h2>Ingredients</h2>

        <ul>

          {recipe.ingredients.map((item,index)=>(

            <li key={index}>
              {item}
            </li>

          ))}

        </ul>

        <br/>

        <h2>Preparation</h2>

        <p>{recipe.instructions}</p>

        <br/>
<button
  onClick={() => {
    addToCart(recipe);
    alert("Added to cart");
  }}
>
  Add To Cart
</button>

      </div>

      <Footer/>

    </>

  );

};

export default RecipeDetails;