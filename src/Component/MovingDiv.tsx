import React from 'react';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
  initial: { x: '-100%' }, // Start position off-screen to the left
  animate: {
    x: ['-100%', '0%', '0%', '100%'], // Move from left to middle, pause, then move to right
    transition: {
      duration: 20, // Total duration for the entire cycle
      times: [0, 0.4, 0.6, 1], // Define when each keyframe occurs
      ease: "linear", // Linear easing for movement
      repeat: Infinity, // Repeat indefinitely
    }
  },
};

interface MovingDivProps {
  children: React.ReactNode; // Accepts any valid React node as children
}

const MovingDiv: React.FC<MovingDivProps> = ({ children }) => {
  return (
    <div className='w-full inline-block overflow-hidden '>
  <motion.div
    className='overflow-hidden '
      variants={variants}
      initial="initial"
      animate="animate"
      
    >
      {children} {/* Render the children here */}
    </motion.div>
    </div>
  
  );
};

export default MovingDiv;