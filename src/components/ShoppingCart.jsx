import {
  Paper,
  Typography,
  Box,
  Divider,
} from "@mui/material";

import CartItem from "./CartItem";

function ShoppingCart({
  items,
  removeItem,
  editItem,
}) {
  const totalPrice = items.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <Paper
      elevation={0}
      sx={{
        height: "70vh",
        borderRadius: "24px",
        border: "1px solid #eef2f7",
        backgroundColor: "#ffffff",

        display: "flex",
        flexDirection: "column",

        overflow: "hidden",
      }}
    >
      {/* TOP HEADER */}
      <Box
        sx={{
          p: 4,
          pb: 2,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Cart Items
          </Typography>

          <Typography
            sx={{
              fontSize: "0.95rem",
              color: "#6b7280",
              fontWeight: 500,
            }}
          >
            {items.length} Items
          </Typography>
        </Box>

        <Divider sx={{ mt: 3 }} />
      </Box>

      {/* SCROLLABLE PRODUCT AREA */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          px: 4,

          "&::-webkit-scrollbar": {
            width: "6px",
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#d1d5db",
            borderRadius: "10px",
          },
        }}
      >
        {items.length === 0 ? (
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              Your shopping cart is empty
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "#6b7280",
              }}
            >
              Add your first item to begin
            </Typography>
          </Box>
        ) : (
          items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              editItem={editItem}
            />
          ))
        )}
      </Box>

      {/* FIXED TOTAL SECTION */}
      <Box
        sx={{
          p: 4,
          pt: 2,
        }}
      >
        <Divider sx={{ mb: 3 }} />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            sx={{
              color: "#6b7280",
              fontWeight: 500,
            }}
          >
            Total Amount
          </Typography>

          <Typography
            sx={{
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            ₹ {totalPrice}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default ShoppingCart;