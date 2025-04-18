import React, { createContext, useState, useEffect } from "react";

// Create CartContext
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Ensure cart is an array

  // Debugging: Log cart changes
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  // Function to add an item to the cart or increase quantity
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // If item exists, update its quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If item does not exist, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to increase quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove only when quantity is 0
    );
  };

  // Function to clear the cart after checkout
  const clearCart = () => {
    setCart([]); // Empty the cart
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
