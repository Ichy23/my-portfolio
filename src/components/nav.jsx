import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from "react";


const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const openMenu = () => setToggle(true);
  const closeMenu = () => setToggle(false);

  const handleNavClick = () => {
    closeMenu(); 
  };

  return (
    <>

      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full px-6 py-4 backdrop-blur-sm">
     


       <div className="hidden space-x-4 lg:flex">
         <a href="#home"className="px-5 py-2 text-white transition duration-200 opacity-70 hover:opacity-100 font-poppins hover:font-bold hover:underline hover:decoration-white"
            style={{ textUnderlineOffset: '6px' }}>Home</a>
         <a href="#about"className="px-5 py-2 text-white transition duration-200 opacity-70 hover:opacity-100 font-poppins hover:font-bold hover:underline hover:decoration-white"
            style={{ textUnderlineOffset: '6px' }}>About Me</a>
         <a href="#projects"className="px-5 py-2 text-white transition duration-200 opacity-70 hover:opacity-100 font-poppins hover:font-bold hover:underline hover:decoration-white"
            style={{ textUnderlineOffset: '6px' }}>Projects</a>
         <a href="#experiences"className="px-5 py-2 text-white transition duration-200 opacity-70 hover:opacity-100 font-poppins hover:font-bold hover:underline hover:decoration-white"
            style={{ textUnderlineOffset: '6px' }}>Experiences</a>
        </div>

     
        <div className="lg:hidden">
          {toggle ? (
            <AiOutlineClose onClick={closeMenu} size={30} className="text-white cursor-pointer" />
          ) : (
            <HiMenuAlt1 onClick={openMenu} size={30} className="text-white cursor-pointer" />
          )}
        </div>
      </div>

      {toggle && (
        <div className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-[#6BC2FF] to-[#357EC7] lg:hidden">
          <a onClick={handleNavClick} href="#home" className="mb-6 text-2xl text-white font-poppins">Home</a>
          <a onClick={handleNavClick} href="#about" className="mb-6 text-2xl text-white font-poppins">About Me</a>
          <a onClick={handleNavClick} href="#projects" className="mb-6 text-2xl text-white font-poppins">Projects</a>
          <a onClick={handleNavClick} href="#experiences" className="mb-6 text-2xl text-white font-poppins">Experiences</a>
        </div>
      )}
    </>
  );
};

export default Nav;
