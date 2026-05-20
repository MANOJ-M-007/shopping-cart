import { Box, Typography, Button, Stack } from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function CartItem({ item, removeItem, editItem }) {
  return (
    <Box
      sx={{
        py: 2.5,
        borderBottom: "1px solid #eef2f7",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* LEFT */}
        <Box>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "#111827",
            }}
          >
            {item.name}
          </Typography>

          <Typography
            sx={{
              mt: 0.5,
              fontSize: "0.9rem",
              color: "#6b7280",
            }}
          >
            ₹ {item.price}
          </Typography>
        </Box>

        {/* RIGHT */}
        <Stack direction="row" spacing={1.5}>
          <Button
            variant="outlined"
            startIcon={<EditOutlinedIcon />}
            onClick={() => editItem(item)}
            sx={{
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              borderColor: "#dbe3ea",
              color: "#111827",
              minWidth: "100px",
            }}
          >
            Edit
          </Button>

          <Button
            variant="contained"
            startIcon={<DeleteOutlineOutlinedIcon />}
            onClick={() => removeItem(item.id)}
            sx={{
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              minWidth: "110px",
              backgroundColor: "#ef4444",
              boxShadow: "none",

              "&:hover": {
                backgroundColor: "#dc2626",
                boxShadow: "none",
              },
            }}
          >
            Remove
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default CartItem;
