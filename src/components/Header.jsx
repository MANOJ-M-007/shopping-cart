import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        color: "#111827",
        borderBottom: "1px solid #eef2f7",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "70px !important",
        }}
      >
        <Box display="flex" alignItems="center" gap={1.2}>
          <ShoppingCartIcon
            sx={{
              color: "#111827",
            }}
          />

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            Shopping Cart App
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
