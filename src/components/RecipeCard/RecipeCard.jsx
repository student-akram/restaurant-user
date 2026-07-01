import "./RecipeCard.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate();
  return (
    <div className="recipe-card">

      <img
        src={recipe.imageUrl}
        alt={recipe.name}
      />

      <div className="recipe-content">

        <h3>{recipe.name}</h3>

        <p>{recipe.categoryName}</p>

        <h2>₹ {recipe.price}</h2>

        <button
  onClick={() =>
    navigate(`/recipe/${recipe.id}`)
  }
>
  View Details
</button>

      </div>

    </div>
  );
};

export default RecipeCard;