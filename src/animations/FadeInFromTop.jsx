import { motion } from 'framer-motion';


const FadeInFromTop = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay }}
    >
      {children}
    </motion.div>
  );
};
export default FadeInFromTop;