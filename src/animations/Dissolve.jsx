import { motion } from 'framer-motion';

const PopUp = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px) grayscale(100%)' }}
      animate={{ opacity: 1, filter: 'blur(0px) grayscale(0%)' }}
      transition={{ duration: 0.8 , delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default PopUp;
