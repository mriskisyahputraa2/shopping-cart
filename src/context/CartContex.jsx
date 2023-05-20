import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);

  // add cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // mencari item sesuai dengan id nya
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // jika cart sudah ada di keranjang
    if (cartItem) {
      // membuat salinan data (...) dan di ubah menjadi array (map) disimpan dalam newCart
      const newCart = [...cart].map((item) => {
        // jika id item sesuai dengan id nya
        if (item.id === id) {
          // maka properti amout akan di tambah 1
          return { ...item, amount: cartItem.amount + 1 };

          // jika tidak maka item tetap sama
        } else {
          return item;
        }
      });

      // akan mengubah state setCart dengan nilai yang ada pada newCart
      setCart(newCart);

      // jika tidak maka cart (keranjang) tidak tejadi apa-apa
    } else {
      setCart([...cart, newItem]);
    }

    console.log(`${product.title} item ${id} added to cart`);
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
