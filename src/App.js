//npm install react@18 react-dom@18
//npm install bootstrap
//npm install framer-motion gsap
//npm install zustand@4.5.6
//npm install  @react-three/fiber @react-three/drei    =>3D


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { // name of function
  CollectComponents,
  HoverAnimations,
  ThreeDAnimations,
  TextAnimations

     
} from "./pages";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>                  {/* name of function */}
        <Route path="/" element={<CollectComponents />} />
        <Route path="/hover-animations" element={<HoverAnimations />} />
        <Route path="/3d-animations" element={<ThreeDAnimations />} />
        <Route path="/Text-animations" element={<TextAnimations />} />
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;
