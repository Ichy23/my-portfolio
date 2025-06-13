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
import PopBounce from '../animations/PopBounce';

export default function Project() {
const [activeCard, setActiveCard] = useState({ type: null, step: 1 });


  return (
    <div id="projects" className="flex flex-col items-center py-16 text-center">
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

      <div id="projects-section" className="project-section">
        <div className="relative flex flex-col items-center ">
            <img
              src={ProjectBackground}
              className="relative top-0 left-0 z-0 w-auto h-auto"
              alt="Project Background"
              style={{ objectFit: 'cover' }}
            />
          <div className="absolute inset-0 z-20 flex flex-col items-center px-4 sm:px-8">
            <p
              className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-sm sm:text-base md:text-lg lg:text-xl text-blue-300 font-bold font-poppins tracking-[6.40px] cursor-pointer flex items-center gap-2"
              onClick={() => setActiveCard({ type: 'gptt', step: 1 })}
            >
              GPTT APP <span className="text-sm text-blue-200 animate-pulse">(Click)</span>
            </p>
            <PopBounce delay={0.6}><img
                src={GPTT}
                alt="GPTT project"
                className="object-contain h-auto max-w-full mt-4 sm:mt-8 md:mt-10 lg:mt-2"
              />
            </PopBounce> 
          </div>
        </div>

        <div className="relative flex flex-col items-center mx-4 mt-12 sm:mx-8">
          <p
            className="sm:text-lg md:text-xl text-blue-300 font-bold font-poppins tracking-[6.40px] sm:tracking-[6.40px] cursor-pointer flex items-center gap-2 z-20 text-center"
           onClick={() => setActiveCard({ type: 'ewallet', step: 1 })}
          >
            Unified App <span className="text-sm text-blue-200 animate-pulse">(Click)</span>
          </p>
         <PopBounce delay={0.6}><img
            src={UNIFIED}
            alt="E-wallet App"
            className="object-contain h-auto max-w-full mt-3 "
          />
          </PopBounce> 
        </div>

        <div className="relative flex flex-col items-center mt-36">
          <img src={LogoVector} className="" alt="" />
        </div>
      </div>
    </div>
  );
}
