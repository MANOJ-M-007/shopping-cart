import { AppBar, Toolbar, Typography } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <ShoppingCartIcon sx={{ mr: 2 }} />

        <Typography variant="h6">Shopping Cart Application</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
