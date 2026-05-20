import { useState } from "react";

import { Container, Box, Button } from "@mui/material";

import toast from "react-hot-toast";

import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import AddItemForm from "./components/AddItemForm";

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const addItem = (newItem) => {
    setItems([...items, newItem]);

    toast.success("Item added successfully");

    setOpenModal(false);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);

    toast.success("Item removed successfully");
  };

  const editItem = (item) => {
    setEditingItem(item);

    setOpenModal(true);
  };

  const updateItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item,
    );

    setItems(updatedItems);

    toast.success("Item updated successfully");

    setEditingItem(null);

    setOpenModal(false);
  };

  const handleAddClick = () => {
    setEditingItem(null);

    setOpenModal(true);
  };

  return (
    <>
      <Header />

      <Container maxWidth="md">
        <Box mt={4}>
          <Button variant="contained" sx={{ mb: 3 }} onClick={handleAddClick}>
            Add Item
          </Button>

          <AddItemForm
            addItem={addItem}
            editingItem={editingItem}
            updateItem={updateItem}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />

          <ShoppingCart
            items={items}
            removeItem={removeItem}
            editItem={editItem}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
