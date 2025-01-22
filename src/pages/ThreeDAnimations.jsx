import { Canvas } from "@react-three/fiber";
import { ArcballControls, Box, Sphere } from "@react-three/drei"; // استيراد ArcballControls
import "./ThreeDAnimations.css";
import Navbar from "../components/Navbar";
import { Footer } from "../components";

const ThreeDAnimations = () => {
  return (
    <>
      <Navbar />
    <div className="threeD-page py-5 mt-5 px-2 pt-md-5">
      <h1 className="threeD-title">3D Animations</h1>
      <p className="threeD-description">
        Explore interactive 3D objects powered by React Three Fiber.
      </p>
      <Canvas className="threeD-canvas" style={{ height: "449px" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <ArcballControls /> {/* استخدام ArcballControls بدلاً من OrbitControls */}

        {/* Rotating Box */}
        <mesh rotation={[0.5, 0.5, 0.5]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#89459d" />
        </mesh>

        {/* Moving Sphere */}
        <mesh position={[2, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#ff8a00" />
        </mesh>
      </Canvas>
    </div>
   <Footer/>
    </>
  );
};

export default ThreeDAnimations;
