import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectBackground from '../assets/ProjectsBackground.png';
import GPTT from '../assets/GPTT.png';
import ArrowDown from '../assets/ArrowDown.png';
import AnimatedCard from '../animations/FramerAnimation';
import AnimatedCard2 from '../animations/FramerAnimation2';
import AnimatedCard3 from '../animations/FramerAnimation3';
import UNIFIED from '../assets/Unified.png';
import LogoVector from '../assets/LogoVector.png';

export default function Project() {
const [activeCard, setActiveCard] = useState({ type: null, step: 1 });


  return (
    <div id="projects" className="flex flex-col items-center px-10 py-16 text-center">
      <a href="#projects-section" className="block text-center cursor-pointer group">
        <div className="text-center cursor-pointer group">
          <h1 className="mb-2 text-2xl font-medium text-white font-poppins tracking-[10.08px] transition duration-300 group-hover:opacity-80 group-hover:scale-105">
            Featured Projects
          </h1>

          <AnimatePresence>
            {activeCard.type === 'gptt' && (
              <AnimatedCard onClose={() => setActiveCard({ type: null, step: 1 })} />
            )}

            {activeCard.type === 'ewallet' && activeCard.step === 1 && (
              <AnimatedCard2
                onClose={() => setActiveCard({ type: null, step: 1 })}
                onNext={() => setActiveCard({ type: 'ewallet', step: 2 })}
              />
            )}

            {activeCard.type === 'ewallet' && activeCard.step === 2 && (
              <AnimatedCard3
                onClose={() => setActiveCard({ type: null, step: 1 })}
                onBack={() => setActiveCard({ type: 'ewallet', step: 1 })}
              />
            )}
          </AnimatePresence>

          <p className="mb-5 text-white text-xs font-light font-poppins tracking-[6.30px] transition duration-300 group-hover:opacity-80 group-hover:scale-105">
            (VIEW PROJECTS)
          </p>
          <img
            src={ArrowDown}
            alt="Down arrow"
            className="mx-auto mb-10 transition duration-300 transform group-hover:translate-y-2"
          />
        </div>
      </a>

      <div id="projects-section" className="relative z-10 flex flex-col items-center gap-10 mt-20">
        <div className="relative">
          <img
            src={ProjectBackground}
            className=" top-0 left-0 z-0 w-[1392px] h-[1044px]"
            alt="Background"
          />
          <img src={GPTT} className="top-28 absolute w-[1244px] h-[824px] z-20" alt="GPTT Foreground" />
          <p
            className="absolute top-44 left-10 text-xl text-blue-300 font-bold font-poppins tracking-[6.40px] cursor-pointer flex items-center gap-2 z-20"
            onClick={() => setActiveCard({ type: 'gptt', step: 1 })}
          >
            TRAVEL APP <span className="text-sm text-blue-200 animate-pulse">(Click)</span>
          </p>
        </div>

        <div className="relative flex flex-col items-center mt-2 ">
          <p
            className="text-xl text-blue-300 font-bold font-poppins tracking-[6.40px] cursor-pointer flex items-center gap-2 z-20"
           onClick={() => setActiveCard({ type: 'ewallet', step: 1 })}
          >
            E-WALLET APP <span className="text-sm text-blue-200 animate-pulse">(Click)</span>
          </p>
          <img src={UNIFIED} className="w-[1433px] h-[952px]" alt="UPS Foreground" />
        </div>

        <div className="relative flex flex-col items-center mt-7">
          <img src={LogoVector} className="" alt="" />
        </div>
      </div>
    </div>
  );
}
