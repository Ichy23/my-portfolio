import FadeInFromTop from '../animations/FadeInFromTop';
import SlideInFromLeft from '../animations/SlideInFromLeft';
import SlideInFromRight from '../animations/SlideInFromRight'
import Dissolve from '../animations/Dissolve';
import PopUp from '../animations/PopUp';
import AnimatedImage from '../animations/AnimatedImage';
import AnimatedLinkGroup from '../animations/AnimatedLinkGroup';
import HeroPic from '../assets/me.png';
import LinkedIn from '../assets/LinkedIn.png';
import Email from '../assets/Email.png';

 const navLinks = [
    { label: "Credits", href: "#footer" },
    { label: "My Journey", href: "#experiences" },
    { label: "Resume", href: "https://christopher-buluran.short.gy/resume" },
  ];

const Hero = () => {
    return (
      <section id="home"  className="flex flex-col items-center justify-around px-4 space-y-10 text-white lg:flex-row sm:px-8 lg:px-16 pt-28 lg:space-y-0">
        <div className="w-full px-2 lg:w-1/3">
          <FadeInFromTop>
          <p className="mb-2 text-[36px] sm:text-4xl  lg:text-[45px] text-white font-extralight font-poppins">
            Hello World!
            <span className="text-[36px] sm:text-4xl  lg:text-[45px] font-normal"> I am</span>
          </p>
          </FadeInFromTop>
            <div className='mt-2 text-left'> 
             <SlideInFromLeft><h2 className="mt-4 text-[46px] sm:text-[54px] lg:text-[54px] font-semibold text-left
              text-white font-poppins leading-[19.74px] tracking-widest">Christopher</h2></SlideInFromLeft>
             <SlideInFromLeft>
              <div className="flex items-center space-x-4">
                <h2 className="text-[46px] sm:text-[54px]  lg:text-[54px] font-semibold tracking-widest text-white font-poppins">
                  Buluran
                </h2>
                <div className="w-28 sm:w-28 h-[2px] bg-white" />
              </div>
            </SlideInFromLeft>
             </div>
            

                <a href={`mailto:buluran.c.work@gmail.com?subject=${encodeURIComponent("Let's Connect")}&body=${encodeURIComponent("Hi Christopher,\nI'm interested in your work...")}`}
                 className="block w-full max-w-xs sm:max-w-sm h-14 relative rounded-[10px] group transition-transform duration-200 hover:scale-105">
               <PopUp> <button className="w-full py-3 text-xl text-center text-blue-300 sm:text-2xl font-poppins group-hover:text-white">
                 Contact Me
                </button> 
                <div className="absolute w-full h-14 left-0 top-0 rounded-[10px] border-[3px] border-blue-300 group-hover:bg-blue-300/10" /></PopUp>
              </a>

            <div className="mt-10"/>

            <Dissolve>
              <div className="flex flex-col gap-1 px-5 mt-4 text-white font-poppins">
                <a href="https://www.linkedin.com/in/christopherbuluran/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <img className="w-10 h-10" src={LinkedIn} alt="LinkedIn" />
                  <span className="text-base">christopherbuluran</span>
                </a>
                <a href={`mailto:buluran.c.work@gmail.com?subject=${encodeURIComponent("Let's Connect")}&body=${encodeURIComponent("Hi Christopher,\nI'm interested in your work...")}`}
                className="flex items-center space-x-3">
                  <img className="w-8 h-8 ml-1" src={Email} alt="Email" />
                  <span className="px-1 text-base">buluran.c.work@gmail.com</span>
                </a>
              </div>
            </Dissolve> 
        </div>

        <div className="flex justify-center w-fit lg:w-1/2">
          <AnimatedImage src={HeroPic} alt="Hero Pic" className="w-40 sm:w-60 md:w-72" />
        </div>

        <div className="relative max-w-sm px-6 mx-auto my-8 space-y-2">
        <div className="flex flex-col text-left">
            <SlideInFromRight>
              <span className="text-4xl font-semibold font-['Poppins'] text-white">
                Junior
              </span>
            </SlideInFromRight>
          </div>

        <div className="flex flex-col text-left">
          <SlideInFromRight>
            <span className="text-4xl font-extrabold font-poppins text-[#92BEFF] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]">
              Mobile Developer
            </span>
          </SlideInFromRight>
        </div>

        <SlideInFromRight>
          <p className="px-2 text-base text-right text-white font-poppins">
            I learn fast by doing risky things, merging without double-checking, chasing bugs in production, and embracing chaos. Otherwise, how would I grow?
          </p>
        </SlideInFromRight>

        <div className="flex flex-wrap justify-center gap-4 px-2 mt-1 text-xs text-sm font-normal text-white sm:text-sm md:text-base font-poppins text-opacity-65 sm:text-base">
            <AnimatedLinkGroup links={navLinks} className="mt-2 mb-5" />
        </div>
        <div className="mb-14"/>
        </div>

      </section>
    )
} 

export default Hero