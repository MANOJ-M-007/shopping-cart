import { Paper, Typography, Box } from "@mui/material";

import CartItem from "./CartItem";

function ShoppingCart({ items, removeItem, editItem }) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Shopping Cart
      </Typography>

      {items.length === 0 ? (
        <Box py={4}>
          <Typography align="center">Your shopping cart is empty.</Typography>
        </Box>
      ) : (
        <>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              editItem={editItem}
            />
          ))}

          <Typography variant="h6" sx={{ mt: 3 }}>
            Total: ₹ {totalPrice}
          </Typography>
        </>
      )}
    </Paper>
  );
}

export default ShoppingCart;
