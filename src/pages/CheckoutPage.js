import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext) || { cart: [] };
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    pincode: "",
    mobile: "",
  });
  const navigate = useNavigate();

  const totalAmount = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const handleChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    const { name, address, pincode, mobile } = customerDetails;

    if (!name || !address || !pincode || !mobile) {
      alert("Please fill all details before placing an order.");
      return;
    }

    try {
      const response = await fetch("https://mithilaeat/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          address,
          pincode,
          mobile,
          paymentMethod,
          totalAmount,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(`Order placed successfully!\nOrder ID: ${result.orderId}`);
        clearCart();
        navigate("/#");
      } else {
        alert("Failed to place order. Please try again.");
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <a href="/products">Continue Shopping</a></p>
      ) : (
        <>
          <div className="order-summary">
            <h3>Order Summary</h3>
            {cart.map((item) => (
              <p key={item.id}>
                {item.name} x {item.quantity || 1} - ₹{item.price * (item.quantity || 1)}
              </p>
            ))}
            <h3>Total: ₹{totalAmount}</h3>
          </div>

          <div className="customer-details">
            <h3>Delivery Details</h3>
            <label>Name:</label>
            <input type="text" name="name" value={customerDetails.name} onChange={handleChange} required />

            <label>Address:</label>
            <input type="text" name="address" value={customerDetails.address} onChange={handleChange} required />

            <label>Pincode:</label>
            <input type="number" name="pincode" value={customerDetails.pincode} onChange={handleChange} required />

            <label>Mobile Number:</label>
            <input type="tel" name="mobile" value={customerDetails.mobile} onChange={handleChange} required />
          </div>

          <div className="payment-method">
            <h3>Select Payment Method</h3>
            <label>
              <input type="radio" value="cod" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
              Cash on Delivery
            </label>
            <label style={{ color: "grey", cursor: "not-allowed", opacity: 0.6 }}>
              <input type="radio" name="payment" value="online" disabled />
              Online Payment (Coming Soon)
            </label>
          </div>

          <button className="btn btn-success" onClick={handlePayment}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
