import React from "react";
import { Link, useLocation } from "react-router-dom"; // استيراد useLocation
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation(); // الحصول على المسار الحالي

  return (
    <motion.nav
      className="navbar navbar-expand-lg py-3"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        {/* شعار الموقع */}
        <motion.div className={`navbar-brand text-uppercase`}>
          <Link
            to="/hover-animations"
            className={`nav-link ${
              location.pathname === "/hover-animations" ? "active" : ""
            }`}
          >
            My Animations 🚀
          </Link>
        </motion.div>

        {/* زر التنقل للشاشات الصغيرة */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "white" }}
        >
          <span className="navbar-toggler-icon"  style={{
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
    }}></span>
        </button>

        {/* الروابط */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { name: "Home", path: "/" },
              { name: "Hover Animations", path: "/hover-animations" },
              { name: "3D Animations", path: "/3d-animations" },
              { name: "TextAnimations", path: "/Text-animations" },
            ].map((item, index) => (
              <motion.li
                className="nav-item"
                key={index}
                whileHover={{
                  scale: 1.1,
                  color: "#ffd700",
                }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
