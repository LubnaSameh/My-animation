import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate(); // استخدام useNavigate للتنقل

  const handleClick = () => {
    navigate("/hover-animations"); // التوجيه إلى صفحة Hover Animations
  };
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5,
    });
  };

  return (
    <header
      className="header-container"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Circles */}
      <motion.div
        className="floating-circle circle1"
        style={{
          transform: `translate(${mousePosition.x * 50}px, ${
            mousePosition.y * 50
          }px)`,
        }}
      ></motion.div>
      <motion.div
        className="floating-circle circle2"
        style={{
          transform: `translate(-${mousePosition.x * 40}px, -${
            mousePosition.y * 40
          }px)`,
        }}
      ></motion.div>
      <motion.div
        className="floating-circle circle3"
        style={{
          transform: `translate(${mousePosition.x * 30}px, -${
            mousePosition.y * 30
          }px)`,
        }}
      ></motion.div>

      {/* Title */}
      <motion.h1
  className="header-title display-3 fw-bold"
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    y: [0, -20, 10, 0], // حركة النص من الأعلى للأسفل ثم يعود لموضعه الطبيعي
  }}
  transition={{
    duration: 2, // مدة الأنيميشن
    ease: "easeInOut",
  }}
>
  Welcome to My Animation World
</motion.h1>



      {/* Subtitle */}
      <motion.p
        className="header-subtitle lead mt-3"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      >
        Discover amazing animations created with React and Framer Motion
      </motion.p>

      {/* Button */}
      <motion.button
        className="header-button btn btn-light btn-lg mt-4 px-4 py-3"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)",
        }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick} // استدعاء handleClick عند النقر
      >
        Get Started 🚀
      </motion.button>
    </header>
  );
};

export default Header;
