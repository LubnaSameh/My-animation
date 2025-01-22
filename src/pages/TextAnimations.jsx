import React from "react";
import { motion } from "framer-motion";
import "./TextAnimations.css";
import { Footer, Navbar } from "../components";

const TextAnimations = () => {
  const sentences = [
    "Welcome to My Animated World!",
    "Create amazing animations with React.",
    "Interactive designs that captivate users.",
    "Boost user engagement with stunning effects.",
    "Enjoy exploring our animations!",
  ];

  const sentenceAnimations = [
    {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
    },
    {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    {
      initial: { opacity: 0, rotate: 45 },
      animate: { opacity: 1, rotate: 0 },
    },
    {
      initial: { opacity: 0, skew: 15 },
      animate: { opacity: 1, skew: 0 },
    },
  ];

  return (
    <>
      <Navbar />
      <div className="text-animation-page pt-4  ">
        <div className="container text-center">
          <h1 className="text-animation-title mb-4">Text Animations</h1>
          <div className="row">
            {sentences.map((sentence, index) => (
              <motion.div
                key={index}
                className="col-12 fs-3 mb-3"
                initial={sentenceAnimations[index % sentenceAnimations.length].initial}
                animate={sentenceAnimations[index % sentenceAnimations.length].animate}
                transition={{ delay: index * 0.8, duration: 0.8 }}
              >
                {sentence.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="text-char"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: charIndex * 0.05 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TextAnimations;
