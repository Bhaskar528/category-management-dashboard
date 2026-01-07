import "./CategoryCard.css";

function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <div className="image-wrapper">
        <img src={category.image} alt={category.name} />
        <button className="edit-btn">✏ Edit</button>
      </div>

      <div className="card-info">
        <h4>{category.name}</h4>
        <p>{category.items} items</p>
      </div>
    </div>
  );
}

export default CategoryCard;
