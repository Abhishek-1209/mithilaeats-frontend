// Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";

const images = [
  "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/05/makhana-1296x728-header.jpg?w=1155&h=1528",
  "https://m.media-amazon.com/images/I/51vXbe20-cL.jpg",
   "/assets/package.jpg",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Hero = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prev, _]) => [(prev + 1) % images.length, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const paginate = (newDirection) => {
    setCurrent(([prev, _]) => {
      const newIndex = (prev + newDirection + images.length) % images.length;
      return [newIndex, newDirection];
    });
  };

  return (
    <section className="hero">
      <div className="slider-container">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            className="slide-image"
            style={{ backgroundImage: `url(${images[current]})` }}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          />
        </AnimatePresence>
        <div className="overlay" />
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Premium Makhana from Bihar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Fresh, crunchy, and full of nutrients. Experience the taste of tradition!
          </motion.p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/products" className="hero-btn">
              Shop Now
            </Link>
          </motion.div>
        </div>

        {/* Arrows */}
        <button className="arrow left" onClick={() => paginate(-1)}>
          ❮
        </button>
        <button className="arrow right" onClick={() => paginate(1)}>
          ❯
        </button>

        {/* Dots */}
        <div className="dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent([idx, idx > current ? 1 : -1])}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
