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
    { label: "Made With", href: "#footer" },
    { label: "See My Journey", href: "#experiences" },
    { label: "Get My Resume", href: "https://christopher-buluran.short.gy/resume" },
  ];

const Hero = () => {
    return (
      <section id="home" className='flex items-center justify-around mx-16 text-white pt-28 lg:flex-row ssm:flex-col ssm:space-y-10'>
        <div classname='lg:1/3 ssm:w-fit'>
            <FadeInFromTop><p className='mb-5 text-4xl font-light text-white font-poppins'>Let’s Create Together!</p></FadeInFromTop>
            <div>
             <SlideInFromLeft><span className="text-5xl font-light text-white font-poppins">I am </span>
              <span className="text-5xl font-semibold text-white font-poppins">Christopher</span></SlideInFromLeft> 
            </div>
             <SlideInFromLeft><div className="px-32 mb-5 text-5xl font-semibold text-white font-poppins">Buluran</div></SlideInFromLeft>
                <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" className="block w-96 h-14 relative rounded-[10px] group transition-transform duration-200 hover:scale-105">
               <PopUp> <button className="w-36 h-7 left-[115px] top-[13px] absolute justify-center text-blue-300 text-2xl font-normal font-['Poppins'] group-hover:text-white">
                 Contact Me
                </button> 
                <div className="w-96 h-14 left-0 top-0 absolute rounded-[10px] border-[3px] border-blue-300 group-hover:bg-blue-300/10" /></PopUp>
              </a>
            <div className="mb-10"/>
        <Dissolve>
          <div className="flex flex-col gap-4 mt-4 text-white font-poppins">
          
            <a href="https://www.linkedin.com/in/christopherbuluran/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
              <img className="w-10 h-10" src={LinkedIn} alt="LinkedIn" />
              <span className="text-base">christopherbuluran</span>
            </a>

           
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" className="flex items-center space-x-3">
              <img className="w-8 h-8 ml-1" src={Email} alt="Email" />
              <span className="text-base">buluran.c.work@gmail.com</span>
            </a>
          </div>
        </Dissolve> 
        </div>
        <div className="items-center w-1/3 pb-0 mb-0 ssm:w-fit">
            <AnimatedImage src={HeroPic} alt="" width={603} height={699}/>
        </div>
        <div className="relative h-auto space-y-2 w-96">
            <div className="flex flex-col px-16 text-left">
             <SlideInFromRight> <span className="text-4xl font-semibold font-['Poppins']" style={{ color: '#FFFFFF' }}>
                Junior
              </span></SlideInFromRight> 
              </div>
              <div className="flex flex-col text-right">
            <SlideInFromRight> <span className="text-right text-4xl font-extrabold font-poppins text-[#92BEFF] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]">
                Mobile Developer
            </span></SlideInFromRight>
            </div>  

            <SlideInFromRight> <p className="justify-center h-24 mt-4 text-right text-white w-96 text-l font-poppins">
              I learn fast by doing risky things, merging without double-checking, chasing bugs in production, and embracing chaos. Otherwise, how would I grow?
            </p></SlideInFromRight>

          {/* <button className="px-10 py-2 my-3 text-black bg-white rounded-full full hover:bg-indigo-800 hover:text-white">
            Explore More...
          </button> */}

           <div className="flex justify-center gap-4 mt-1 font-normal text-white font-poppins text-opacity-65">
           <AnimatedLinkGroup links={navLinks} className="mt-1" />
           </div>
           <div className="mb-14"/>
        </div>

      </section>
    )
} 

export default Hero