import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Product Provider
import ProductProvider from "./context/ProductContext";
// import Sidebar Provider
import SidebarProvider from "./context/SidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </SidebarProvider>
);
