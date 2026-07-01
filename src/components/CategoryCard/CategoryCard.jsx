import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category, onClick }) => {
    const navigate = useNavigate();
  return (
    <div
  className="category-card"
  onClick={() =>
    navigate(`/category/${category.id}`)
  }
>
      <img
        src={category.imageUrl}
        alt={category.name}
      />

      <h3>{category.name}</h3>
    </div>
  );
};

export default CategoryCard;