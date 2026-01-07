import { useState } from "react";
import "./AddEditCategoryModal.css";

function AddEditCategoryModal({ onClose, onSubmit, initialData }) {
  const [name, setName] = useState(initialData?.name || "");
  const [items, setItems] = useState(initialData?.items || "");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("items", items);
    if (image) formData.append("image", image);
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{initialData ? "Edit" : "Add"} Category</h3>

        <input
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Item Count"
          type="number"
          value={items}
          onChange={(e) => setItems(e.target.value)}
        />

        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <div className="actions">
          <button onClick={handleSubmit}>Save</button>
          <button className="cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddEditCategoryModal;