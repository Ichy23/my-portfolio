import { motion } from "framer-motion";

const wordVariant = {
  hidden: { opacity: 0, y: "0.5em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const SplitText = ({ text, className = "" }) => {
  const words = text.split(" ");

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={containerVariant}
      style={{ display: "inline-block", overflow: "hidden", flexWrap: "wrap" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          style={{
            display: "inline-block",
            marginRight: "0.35em",
            whiteSpace: "nowrap",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;
