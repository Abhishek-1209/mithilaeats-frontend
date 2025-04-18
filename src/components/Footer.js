import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>MithilaEats</h3>
        <p>Authentic & Fresh Makhana from Bihar</p>
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/profile.php?id=61574971977224" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mithilaeats_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abhishek-kumar-521059227/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MithilaEats | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
