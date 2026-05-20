import { useState } from "react";

import ShoppingCart from "./components/ShoppingCart";
import AddItemForm from "./components/AddItemForm";

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);
  };

  const editItem = (item) => {
    setEditingItem(item);
  };

  const updateItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item,
    );

    setItems(updatedItems);

    setEditingItem(null);
  };

  return (
    <div>
      <h1>Shopping Cart Application</h1>

      <AddItemForm
        addItem={addItem}
        editingItem={editingItem}
        updateItem={updateItem}
      />

      <ShoppingCart items={items} removeItem={removeItem} editItem={editItem} />
    </div>
  );
}

export default App;
