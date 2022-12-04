import React from 'react';
import { motion } from 'framer-motion';

const animations = {
    initial: { opacity: 0, y:40 },
    animate: { opacity: 1, x:0 },
    exit: { opacity: 2, x:-10 },
    
};

const AnimatedPages = ({children}) => {
    
  return (
    <motion.div
      variants={animations} 
      initial="initial"
      animate="animate"
      exit="exit" 
      >
        {children}
    </motion.div>
  );
};

export default AnimatedPages;