import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        setError("Failed to load categories");
        console.error(err);
      }
    };

    loadCategories();
  }, []);

  return (
    <div>
      <h2>Categories</h2>

      {error && <p>{error}</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {categories.map(cat => (
          <div key={cat._id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={cat.image} alt={cat.name} width="100%" />
            <h3>{cat.name}</h3>
            <p>{cat.items} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;