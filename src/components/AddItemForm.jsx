import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import toast from "react-hot-toast";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Stack,
} from "@mui/material";

function AddItemForm({
  addItem,
  editingItem,
  updateItem,
  openModal,
  setOpenModal,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setPrice(editingItem.price);
    } else {
      setName("");
      setPrice("");
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Item name is required");

      return;
    }

    if (!price || Number(price) <= 0) {
      toast.error("Price must be greater than 0");

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
    <Dialog
      open={openModal}
      onClose={() => setOpenModal(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>{editingItem ? "Edit Item" : "Add Item"}</DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Item Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              label="Price"
              type="number"
              variant="outlined"
              fullWidth
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <Button variant="contained" type="submit">
              {editingItem ? "Update Item" : "Add Item"}
            </Button>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddItemForm;
