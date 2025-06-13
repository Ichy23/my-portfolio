
import LOGO from '../assets/Vector.png'
import LinkedInVector from '../assets/LinkedInVector.png';
import EmailVector from '../assets/EmailVector.png';
import FadeInFromBottom from '../animations/FadeInFromBottom';

export default function Footer() {
  return (
   
    <div id="footer" className="relative mt-32 z-10 bg-[#00112B] w-full h-full">
      <div className="px-6 py-16 mx-16 text-center md:px-10">
         <FadeInFromBottom  delay={0.1}>
          <h2 className="mb-10 text-sm text-white font-poppins opacity-60 text-center justify-center font-bold uppercase tracking-[2.80px] ">
              BUILD TODAY. LEAD TOMORROW
            </h2>
         </FadeInFromBottom>
          <div className="justify-start mx-auto space-y-6 text-lg leading-relaxed tracking-wide text-center text-white font-poppins">
            <FadeInFromBottom  delay={0.3}>
            <h1 className="text-5xl font-semibold ">Get In Touch!</h1>
            </FadeInFromBottom>

            <FadeInFromBottom delay={0.5}>
            <p className="opacity-80 text-center justify-start text-white text-lg font-normal 
            font-['Poppins'] leading-loose">Feel free to reach out anytime to discuss how we can collaborate.
            <br/>Let's create something amazing together!</p>
            </FadeInFromBottom>
          </div>

          <div className="flex justify-center">
             <FadeInFromBottom delay={0.7}>
            <a href="mailto:buluran.c.work@gmail.com?subject=Let's%20Connect&body=Hi%20Christopher,%0D%0AI'm%20interested%20in%20your%20work..." className="block w-96 h-14 relative justify-center rounded-[10px] group transition-transform duration-200 hover:scale-105">
              <button className="bg-[#92BEFF] group-hover:text-blue-900 text-white px-10 py-2 my-3 rounded-[30px] ">
                  Contact Me
              </button>
            </a>
            </FadeInFromBottom>
          </div> 

          <div className="justify-start mt-20 text-center">
            <FadeInFromBottom delay={0.9}>
            <p className="text-sm italic text-white font-extralight font-poppins opacity-80">
              Non Copyrighted © 2025 Designed by Ckloie A. and Programmed by Christopher Buluran
            </p>
            </FadeInFromBottom>
          </div>

          <div className="mt-14 justify-self-center  w-[1246px] h-px opacity-20 bg-white outline outline-1 outline-offset-[-0.50px] outline-white" />
          
         <div className="relative flex items-center justify-between w-full px-4 mt-5 sm:px-6 md:px-9">
            <img 
              src={LOGO} 
              className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[40px] lg:h-[40px]" 
              alt="Logo" 
            />

            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.linkedin.com/in/christopherbuluran/"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-200 group hover:scale-105"
              >
              <img
                src={LinkedInVector}
                className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[40px] lg:h-[40px]"
                alt="LinkedIn"
              />
            </a>

          <a
            href={`mailto:buluran.c.work@gmail.com?subject=${encodeURIComponent("Let's Connect")}&body=${encodeURIComponent("Hi Christopher,\nI'm interested in your work...")}`}
            className="block transition-transform duration-200 group hover:scale-105"
          >
            <img
              src={EmailVector}
              className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[40px] lg:h-[40px]"
              alt="Email"
            />
          </a>
        </div>
      </div>

      </div>
    </div>
  );
}
