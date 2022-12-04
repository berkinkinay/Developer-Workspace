import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function App() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
  
    </>
  );
} 
