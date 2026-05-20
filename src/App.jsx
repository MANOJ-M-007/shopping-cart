import { useState } from "react";

import ShoppingCart from "./components/ShoppingCart";
import AddItemForm from "./components/AddItemForm";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Shopping Cart Application</h1>

      <AddItemForm addItem={addItem} />

      <ShoppingCart items={items} removeItem={removeItem} />
    </div>
  );
}

export default App;