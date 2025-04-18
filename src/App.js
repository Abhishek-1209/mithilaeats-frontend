import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Testimonial from "./components/Testimonial";
import Products from './components/Products';
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import ProductDetails from "./pages/ProductDetails";
import WhyUs from './components/WhyUs';
import CartProvider from "./context/CartContext";
function App() {
  return (
    <CartProvider>
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Testimonial/>
      <WhyUs/>
      <Footer/>
    </Router>
    </CartProvider>
  );
}


export default App;

