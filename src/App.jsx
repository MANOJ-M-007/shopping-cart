import { useState } from "react";

import { Container, Box, Button, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

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

      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #f8fafc, #eef2f7)",
          py: 5,
        }}
      >
        <Container maxWidth="lg">
          {/* TOP SECTION */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            {/* LEFT */}
            <Box>
              <Typography
                sx={{
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "#111827",
                  lineHeight: 1.2,
                }}
              >
                Shopping Cart
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: "0.95rem",
                  color: "#6b7280",
                }}
              >
                Manage your shopping items easily
              </Typography>
            </Box>

            {/* RIGHT */}
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddClick}
              sx={{
                height: "48px",
                px: 3,
                borderRadius: "14px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
                backgroundColor: "#111827",
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#1f2937",
                  boxShadow: "none",
                },
              }}
            >
              Add Item
            </Button>
          </Box>

          {/* MODAL */}
          <AddItemForm
            addItem={addItem}
            editingItem={editingItem}
            updateItem={updateItem}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />

          {/* CART */}
          <ShoppingCart
            items={items}
            removeItem={removeItem}
            editItem={editItem}
          />
        </Container>
      </Box>
    </>
  );
}

export default App;
