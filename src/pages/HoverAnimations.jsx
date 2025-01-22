import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "./HoverAnimations.css";
import { Footer } from "../components";

const HoverAnimations = () => {
  const animations = [
    { title: "Hover Me!", animation: { scale: 1.2, rotate: 10 } },
    {
      title: "Slide Up!",
      animation: { scale: 1.1, y: -10, backgroundColor: "#89459d", color: "white" },
    },
    {
      title: "Circle Effect!",
      animation: { scale: 1.3, borderRadius: "50%", backgroundColor: "#ff8a00" },
    },
    {
      title: "Wobble!",
      animation: { scale: [1, 1.2, 1.1], rotate: [0, 10, -10, 0] },
    },
    {
      title: "Fade Effect!",
      animation: { scale: 1.2, opacity: 0.8, backgroundColor: "#1d3557", color: "#fff" },
    },
    {
      title: "Rotate Effect!",
      animation: { scale: 1.05, rotate: 15, borderRadius: "20%" },
    },
    {
      title: "Slide Right!",
      animation: { scale: 1.1, x: 20, backgroundColor: "#06d6a0", color: "#000" },
    },
    {
      title: "Bounce!",
      animation: { scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] },
    },
  ];

  return (
    <>
      <Navbar />
      <div className="hover-page  py-5 mt-5 px-2 pt-md-5 ">
        <h1 className="page-title">Hover Animations</h1>
        <p className="page-description">
          Explore a variety of hover animations to enhance user interaction.
        </p>
        <div className="hover-container container pt-3">
          {animations.map((item, index) => (
            <motion.div
              key={index}
              className="hover-box"
              whileHover={item.animation}
              transition={{ duration: 0.4 }}
            >
              {item.title}
            </motion.div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HoverAnimations;
