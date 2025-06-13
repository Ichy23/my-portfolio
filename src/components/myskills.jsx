import ReactNative from "../assets/react_native.png";
import Flutter from "../assets/flutter.png";
import JavaScript from "../assets/JavaScript.png";
import XCode from "../assets/Xcode.png";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import { motion } from "framer-motion";

const skills = [
  { name: "Flutter", image: Flutter },
  { name: "React\nNative", image: ReactNative },
  { name: "Java\nScript", image: JavaScript },
  { name: "XCode", image: XCode },
];

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.6,
      duration: 1.2,
      ease: "easeOut",
    },
  }),
};

export default function MySkills() {
  return (
    <FadeInWhenVisible>
      <div id="skills" className="px-10 py-16 text-center">
        <h1 className="mb-8 text-2xl text-white font-poppins tracking-[10.08px] font-medium">
          My Skills
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-40">
          {skills.map((skill, index) => (
            <motion.div
            key={index}
            className="flex flex-col items-center"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} 
            variants={skillVariants}
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-24 h-24 rounded-xl"
            />
            <p className="mt-4 text-cyan-300 text-1xl font-poppins tracking-[4.8px] whitespace-pre-line text-center">
              {skill.name}
            </p>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
