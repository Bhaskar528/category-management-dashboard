import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { getCategories } from "../../services/categoryService";
import "./Dashboard.css";

function Dashboard() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);                  
    } catch (error) {
      console.error("Failed to load categories", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <div className="header">
            <h2>Categories</h2>
            <button className="add-btn">+ Add Category</button>
          </div>

          <div className="grid">
            {categories.map((cat) => (
              <CategoryCard key={cat._id} category={cat} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;