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
      <Box
        sx={{
          display: "flex",

          flexDirection: {
            xs: "column",
            sm: "row",
          },

          alignItems: {
            xs: "flex-start",
            sm: "center",
          },

          justifyContent: "space-between",

          gap: 2,
        }}
      >
        {/* LEFT */}
        <Box
          sx={{
            width: "100%",
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",

              fontWeight: 600,

              color: "#111827",

              wordBreak: "break-word",
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
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={1.5}
          sx={{
            width: {
              xs: "100%",
              sm: "auto",
            },

            flexShrink: 0,
          }}
        >
          <Button
            variant="outlined"
            startIcon={<EditOutlinedIcon />}
            onClick={() => editItem(item)}
            fullWidth
            sx={{
              borderRadius: "12px",

              textTransform: "none",

              fontWeight: 600,

              borderColor: "#dbe3ea",

              color: "#111827",

              minHeight: "42px",
            }}
          >
            Edit
          </Button>

          <Button
            variant="contained"
            startIcon={<DeleteOutlineOutlinedIcon />}
            onClick={() => removeItem(item.id)}
            fullWidth
            sx={{
              borderRadius: "12px",

              textTransform: "none",

              fontWeight: 600,

              minHeight: "42px",

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
