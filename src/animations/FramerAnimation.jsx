// components/AnimatedCard.jsx
import { motion } from "framer-motion";
import GPTTBG from "../assets/GPTT BG.png";

const AnimatedCard = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-zinc-900 text-white rounded-3xl overflow-hidden shadow-2xl w-[90%] max-w-[800px] h-[90%] max-h-[800px]"
        onClick={(e) => e.stopPropagation()}
      >
      
        <div className="relative h-56 overflow-hidden md:h-[400px]">
          <img
            src={GPTTBG} 
            alt="Travel App"  
            className="object-cover w-full h-full"
          />
         
        </div>

        <div className="p-5 space-y-3 text-sm text-gray-300">
          <h2 className="font-bold text-start font-poppins font-xl">Overview</h2>
          <p className="text-left">
          Planning a trip should feel exciting—not stressful. I contribute to this travel app to help users organize everything in one place, 
          from booking flights and hotels to finding cool local spots and managing their budgets. Whether you're a casual traveler or a frequent flyer, 
          the app makes planning feel like part of the adventure.
          </p>
          <h2 className="font-bold text-start font-poppins font-xl">The Problem</h2>
          <p className="text-left">
          Travelers often bounce between apps and websites just to plan a single trip. It’s messy and time-consuming. There wasn’t a simple, 
          all-in-one app that felt intuitive and personal.  
          </p>
          <h2 className="font-bold text-start font-poppins font-xl">The Solution</h2>
          <p className="text-left">
            This mobile app brings everything together. With real-time booking, personalized recommendations, and an integrated travel wallet, 
            users can plan their trips start to finish without ever leaving the app.
          </p>
        </div>

     
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard;
