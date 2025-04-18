import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaBars, FaTimes} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext) || { cart: [] };
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ TOGGLE STATE

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;
  
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);
  
  // NEW EFFECT TO CLOSE MOBILE MENU ON NAVIGATION
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // ✅ TOGGLE MENU
  };

  return (
    <nav className={`navbar ${isHomePage ? "sticky-navbar" : "static-navbar"} ${scrolled ? "scrolled" : ""}`}>
      {/* Left Side - Logo */}
      <div className="logo-container">
        <img src="logo4.png" alt="Mithilaeats" className="logo" />
        <h1>MithilaEats</h1>
      </div>

      {/* Right Side - Cart + Hamburger for Mobile */}
      <div className="right-icons">
  <Link to="/cart" className="cart-link mobile-cart-icon" style={{ color: scrolled ? "black" : "white" }}>
    <FaShoppingCart size={22} />
    <span className="cart-count">
      {cart.reduce((total, item) => total + item.quantity, 0)}
    </span>
  </Link>

  <div
  className="menu-toggle"
  onClick={toggleMenu}
  style={{ color: scrolled ? "black" : "white" }} >
  {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
</div>

</div>


      {/* Nav List */}
      <ul className={`nav-menu ${menuOpen ? "mobile-nav-toggle" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>

  {/* Desktop cart icon */}
  <li className="cart-icon">
    <Link to="/cart" className="cart-link">
      <FaShoppingCart size={22} />
      <span className="cart-count">
        {cart.reduce((total, item) => total + item.quantity, 0)}
      </span>
    </Link>
  </li>
</ul>

    </nav>
  );
};

export default Navbar;
