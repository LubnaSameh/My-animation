import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer py-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container text-center">
        {/* عنوان الفوتر */}
        <motion.h2
          className="footer-title mb-3"
          whileHover={{ scale: 1.1, color: "#ffd700" }}
        >
          My Animations 🚀
        </motion.h2>
        {/* وصف الفوتر */}
        <p className="footer-description mb-4">
          Designed with <span className="text-danger">💖</span> using React and Framer Motion
        </p>
        {/* روابط الفوتر */}
        <div className="footer-links d-flex flex-wrap justify-content-center g-1 mb-3">
  {[
    { name: "Home", path: "/" },
    { name: "Hover Animations", path: "/hover-animations" },
    { name: "3D Animations", path: "/3d-animations" },
    { name: "Text Animations", path: "/text-animations" },
  ].map((link, index) => (
    <motion.a
      key={index}
      href={link.path}
      className="footer-link mx-2" // استخدام mx-2 لتقليل المسافة الأفقية
      whileHover={{ scale: 1.1, color: "#ffd700" }}
      transition={{ duration: 0.3 }}
    >
      {link.name}
    </motion.a>
  ))}
</div>

        {/* حقوق النشر */}
        <p className="footer-copy text-muted">
          &copy; 2025 My Animations. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
