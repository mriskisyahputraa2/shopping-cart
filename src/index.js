import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Product Provider
import ProductProvider from "./context/ProductContext";
// import Sidebar Provider
import SidebarProvider from "./context/SidebarContext";
import CartProvider from "./context/CartContex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
