import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./layouts/layout";
import { ThemeProvider } from "./components/custom/theme-provider";
import { BrowserRouter } from "react-router";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors position="top-right" />
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
