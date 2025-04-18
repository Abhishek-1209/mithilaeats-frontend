import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./ProductDetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const products = [
    {
      id: 1,
      name: "Classic Roasted Makhana",
      price: { "100gm": 199, "500gm": 799 },
      image: `${process.env.PUBLIC_URL}/assets/makhana1.jpg`,
      description: "Delicious roasted makhana with a crunchy texture.",
      nutrition: "Rich in protein, low in calories, gluten-free.",
    },
    {
      id: 2,
      name: "Peri Peri Flavored Makhana",
      price: { "100gm": 209, "500gm": 899 },
      image: `${process.env.PUBLIC_URL}/assets/makhana2.jpeg`,
      description: "Spicy Peri Peri makhana, perfect for snacking.",
      nutrition: "Contains high fiber, low fat, and rich antioxidants.",
    },
    {
      id: 3,
      name: "Tandoori Spiced Makhana",
      price: { "100gm": 119, "500gm": 499 },
      image: `${process.env.PUBLIC_URL}/assets/makhana3.jpg`,
      description: "Authentic Tandoori flavored makhana with a smoky taste.",
      nutrition: "Rich in iron, calcium, and protein.",
    },
    {
      id: 4,
      name: "Cow Ghee Roasted Makhana",
      price: { "100gm": 200, "500gm": 850 },
      image: `https://m.media-amazon.com/images/I/51vXbe20-cL.jpg`,
      description: "Premium makhana roasted in pure cow ghee.",
      nutrition: "Good for digestion, full of healthy fats.",
    },
  ];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState("100gm");

  if (!product) return <h2 className="not-found">Product Not Found</h2>;

  const handleAddToCart = () => {
    const selectedProduct = {
      ...product,
      price: product.price[selectedSize],
      size: selectedSize,
    };

    addToCart(selectedProduct);
    toast.success(`${product.name} (${selectedSize}) added to cart!`, {
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
    <div className="product-detail">
      <div className="detail-container">
        <img src={product.image} alt={product.name} className="detail-img" />
        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>
          <h3>Nutrition Facts:</h3>
          <p>{product.nutrition}</p>

          {/* Size Selection */}
          <div className="size-selection">
            <label>Choose Size:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {Object.keys(product.price).map((size) => (
                <option key={size} value={size}>
                  {size} - ₹{product.price[size]}
                </option>
              ))}
            </select>
          </div>

          {/* Add to Cart Button */}
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart (₹{product.price[selectedSize]})
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
