import { motion } from "framer-motion";
import UNFIEDMODAL from "../assets/UNIFIED_MODAL.png";
import { ChevronLeft } from "lucide-react";

const AnimatedCard3 = ({  onClose, onBack }) => {
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
        className="bg-zinc-900 text-white rounded-3xl overflow-hidden shadow-2xl w-[90%] max-w-[800px] h-[90%] max-h-[700px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden md:h-[400px]">
          <img
            src={UNFIEDMODAL}
            alt="Travel App"
            className="object-fill w-[1000px] h-full"
          />
        </div>

        

       
        <div className="h-full p-5 space-y-3 overflow-y-auto text-sm text-gray-300 ">
          <h6 className="text-2xl font-bold font-poppins">Cebuana International</h6> 
          <h2 className="text-xl font-bold font-poppins text-start">Overview</h2>
          <p className="text-left">
           I contributed to the frontend development of the international payout flow by designing and implementing the entire user
           interface in Figma and translating it into responsive, production-ready React components. The interface allows users to 
           search for remittance partners, enter transaction details, and upload identification for compliance. I also integrated 
           the necessary APIs to handle dynamic data such as partner lists, remittance information, and secure form submissions.
           This ensured a smooth, real-time experience for users sending and receiving funds internationally, with clear navigation 
           and seamless backend connectivity.
          </p>
          <h2 className="text-xl font-bold font-poppins text-start">The Problem</h2>
          <p className="text-left">
          Sending international remittances can often be a frustrating experience due to scattered partner information, unclear 
          transaction steps, and lack of transparency in the process. Users frequently encounter complex forms, slow validation 
          processes, and limited feedback on the status of their submissions. For developers, bridging user interface expectations 
          with backend data validation and compliance requirements (like ID verification) is equally challenging.
          </p>
          <h2 className="text-xl font-bold font-poppins text-start">The Solution</h2>
          <p className="text-left">
            To solve the complexity of international remittances, our team built a mobile payout experience using React Native. 
            The flow allows users to select remittance partners, enter sender and beneficiary details, and upload identification 
            documents in a clear, step-by-step process. While the design was handled by our UI/UX team, I contributed by implementing
            the frontend in React Native—translating the designs into interactive, production-ready components. I also integrated 
            backend APIs to retrieve real-time partner data, validate form inputs, and securely manage image uploads. This resulted 
            in a smooth, responsive, and compliant user experience on mobile devices.
          </p>
        </div>

       <div className="absolute z-50 top-1/2 left-4">
  <button
    onClick={onBack}
    className="p-2 text-black transition bg-white rounded-full shadow-md hover:scale-110"
  >
    <ChevronLeft className="w-10 h-10" />
  </button>
</div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard3;
