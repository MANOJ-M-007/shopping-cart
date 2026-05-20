import React from "react";
import ReactDOM from "react-dom/client";

import { Toaster } from "react-hot-toast";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import App from "./App";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },

  palette: {
    background: {
      default: "#f8fafc",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Toaster position="top-right" />

      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
