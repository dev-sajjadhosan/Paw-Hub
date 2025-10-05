import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./layouts/layout";
import { ThemeProvider } from "./components/custom/theme-provider";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
