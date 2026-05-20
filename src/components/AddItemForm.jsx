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
        name: name.trim(),
        price: Number(price),
      };

      updateItem(updatedItem);
    } else {
      const newItem = {
        id: uuidv4(),
        name: name.trim(),
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
      PaperProps={{
        sx: {
          borderRadius: 5,
          p: 1,
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: "1.6rem",
          pb: 1,
        }}
      >
        {editingItem ? "Edit Item" : "Add New Item"}
      </DialogTitle>

      <DialogContent
        sx={{
          pt: 1,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Item Name"
              fullWidth
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                  backgroundColor: "#fff",
                },

                "& .MuiInputLabel-root": {
                  backgroundColor: "#fff",
                  px: 0.5,
                },
              }}
            />

            <TextField
              label="Price"
              type="number"
              fullWidth
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                  backgroundColor: "#fff",
                },

                "& .MuiInputLabel-root": {
                  backgroundColor: "#fff",
                  px: 0.5,
                },
              }}
            />

            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{
                borderRadius: 3,
                py: 1.4,
                textTransform: "none",
                fontWeight: 600,
                boxShadow: "none",
              }}
            >
              {editingItem ? "Update Item" : "Add Item"}
            </Button>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddItemForm;
