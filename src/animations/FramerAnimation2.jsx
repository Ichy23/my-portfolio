import { motion } from "framer-motion";
import UNFIEDMODAL from "../assets/UNIFIED_MODAL.png";
import  { ChevronRight, X } from "lucide-react"; 

const AnimatedCard = ({ onClose, onNext }) => {
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
        className="bg-zinc-900 text-white rounded-3xl overflow-hidden shadow-2xl w-[90%] max-w-[800px] h-[90%] max-h-[700px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-60 md:h-[400px] flex-shrink-0">
          <img
            src={UNFIEDMODAL}
            alt="Usave Modal"
            className="object-fill w-full h-full"
          />
        </div>

        <div className="flex-grow p-5 space-y-4 overflow-y-auto text-sm text-gray-300">
          <h6 className="text-2xl font-bold font-poppins">USAVE</h6> 
          <h2 className="text-xl font-bold font-poppins text-start">Overview</h2>
          <p className="text-left">
            Usave is a smart savings feature embedded in the E-Wallet app, designed to help users grow their money with minimal effort. 
            Users can input a desired amount, choose a maturity period (monthly or yearly), and track their projected earnings—all from 
            an intuitive interface. My role focused on building the frontend UI and integrating APIs to handle secure, real-time transactions and earnings calculations.
          </p>

          <h2 className="text-xl font-bold font-poppins text-start">The Problem</h2>
          <p className="text-left">
            Traditional savings processes are often complex and manual, requiring users to visit physical branches or manage multiple platforms.
            Many digital solutions lack clarity, transparency, and instant feedback—especially when it comes to interest calculations or savings growth. 
            This results in low user engagement and trust.
          </p>

          <h2 className="text-xl font-bold font-poppins text-start">The Solution</h2>
          <p className="text-left">
            Usave offers a seamless, transparent way to save money digitally. With just a few taps, users can set savings goals, 
            select a plan duration, and view expected returns instantly. I contributed by developing responsive UI components and 
            integrating backend APIs to ensure secure submissions, dynamic earnings display, and a smooth user experience across devices.
          </p>
        </div>

     
        <div className="absolute z-50 top-1/2 right-4">
          <button
            onClick={onNext}
            className="p-2 text-black transition bg-white rounded-full shadow-md hover:scale-110"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>

        
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard;
