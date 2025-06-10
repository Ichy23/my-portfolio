import { motion } from "framer-motion";

const linkVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const AnimatedLinkGroup = ({ links = [], className = "" }) => {
  return (
    <div className={`flex justify-center gap-4 ${className}`}>
      {links.map((link, i) => (
        <motion.a
          key={i}
          href={link.href || "#"}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={linkVariants}
          className="font-normal text-white font-poppins text-opacity-65"
        >
          {link.label}
          {i < links.length - 1 && " |"}
        </motion.a>
      ))}
    </div>
  );
};

export default AnimatedLinkGroup;