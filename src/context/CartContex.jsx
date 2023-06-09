import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);

  // item amout state
  const [itemAmount, setItemAmount] = useState(0);

  // total price state
  const [total, setTotal] = useState(0);

  // total price
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // update item amount
  useEffect(() => {
    // reduce akan menghitung jumlah total yang ada di cart
    const amount = cart.reduce((accumulator, currentItem) => {
      //  dan mengembalikan nil ai sementara(accumator) ditambah dengan currentItem sesuai yang use inginkan(amount)
      return accumulator + currentItem.amount;

      // dengan nilai default 0 di awal
    }, 0);

    // dan setItemAmout di berikan amout untuk mengubah nilai itemAmount menjadi amount
    setItemAmount(amount);

    // hanya di jalankan pada state cart
  }, [cart]);

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
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //  clear cart
  const clearCart = () => {
    // ketika di klik hapus semua data yang ada di setCart
    setCart([]);
  };

  // increase amout
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);

      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
