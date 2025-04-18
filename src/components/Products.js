import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./Products.css";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const products = [
  {
    id: 1,
    name: "Classic Roasted Makhana",
    price: 1999,
    image: `${process.env.PUBLIC_URL}/assets/makhana1.jpg`,
  },
  {
    id: 2,
    name: "Peri Peri Flavored Makhana",
    price: 2099,
    image: `${process.env.PUBLIC_URL}/assets/makhana2.jpeg`,
  },
  {
    id: 3,
    name: "Tandoori Spiced Makhana",
    price: 1199,
    image: `${process.env.PUBLIC_URL}/assets/makhana3.jpg`,
  },
  {
    id: 4,
    name: "Cow Ghee Roasted Makhana",
    price: 200 ,
    image: `https://m.media-amazon.com/images/I/51vXbe20-cL.jpg`,
    description: "Premium makhana roasted in pure cow ghee.",
    nutrition: "Good for digestion, full of healthy fats."
  },
];

const Products = () => {
  const { cart, addToCart, increaseQuantity, removeFromCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <section className="products">
      <h2>Our Premium Makhanas</h2>
      <div className="product-container">
        {products.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);

          return (
            <div className="product-card" key={product.id}>
  <Link to={`/product/${product.id}`} className="product-link">
    <img src={product.image} alt={product.name} className="product-img" />
    <h3>{product.name}</h3>
  </Link>
  <p className="price">₹{product.price}</p>

  {cartItem ? (
    <div className="quantity-controls">
      <button onClick={() => removeFromCart(product.id)}>-</button>
      <span>{cartItem.quantity}</span>
      <button onClick={() => increaseQuantity(product.id)}>+</button>
    </div>
  ) : (
    <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
      Add to Cart
    </button>
  )}
</div>

          );
        })}
      </div>
      {/* Toast Container (Placed at Root Level) */}
      <ToastContainer />
    </section>
  );
};

export default Products;
