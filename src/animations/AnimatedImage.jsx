import React from 'react';
import { motion } from 'framer-motion';

const AnimatedImage = ({ src, alt }) => {
  return (
   <motion.img
  src={src}
  alt={alt}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.1, ease: "easeOut" }}
/>

  );
};

export default AnimatedImage;
