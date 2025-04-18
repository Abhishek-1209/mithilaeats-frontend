import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext) || { cart: [] }; // Ensures cart is never undefined

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Continue Shopping</Link></p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price} x {item.quantity || 1}</p>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <Link to="/checkout" className="btn btn-primary checkout-btn">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
