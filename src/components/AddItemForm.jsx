import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddItemForm({
  addItem,
  editingItem,
  updateItem,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setPrice(editingItem.price);
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price) {
      return;
    }

    if (editingItem) {
      const updatedItem = {
        id: editingItem.id,
        name,
        price: Number(price),
      };

      updateItem(updatedItem);
    } else {
      const newItem = {
        id: uuidv4(),
        name,
        price: Number(price),
      };

      addItem(newItem);
    }

    setName("");
    setPrice("");
  };

  return (
    <div>
      <h2>
        {editingItem ? "Edit Item" : "Add Item"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter item price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">
          {editingItem
            ? "Update Item"
            : "Add Item"}
        </button>
      </form>
    </div>
  );
}

export default AddItemForm;