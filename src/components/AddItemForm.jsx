import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddItemForm({ addItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      name,
      price: Number(price),
    };

    addItem(newItem);

    setName("");
    setPrice("");
  };

  return (
    <div>
      <h2>Add Item</h2>

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

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItemForm;
