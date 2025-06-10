import L2Support from '../assets/L2.png';
import AppDev from '../assets/appdev.png';
import FadeInWhenVisible from  '../animations/FadeInWhenVisible';
import LeftTriggered from '../animations/LeftTriggered';
import RightTriggered from '../animations/RightTriggered';
import FadeInFromBottom from '../animations/FadeInFromBottom';


export default function MyExperiences() {
  return (
    <div id="experiences" className="flex flex-col items-center m-10 mx-16">
    <FadeInWhenVisible> 
      <h1 className="mb-20 text-2xl font-medium text-white font-poppins tracking-[10.08px]">
        My Experiences
      </h1>
    </FadeInWhenVisible>
 
      <div className="grid w-full grid-cols-1 gap-8 mb-12 max-w-8xl md:grid-cols-2">
        <div className="w-full overflow-hidden rounded-xl">
          <LeftTriggered delay={0.1}> 
          <img
            src={AppDev}
            alt="Experience Image"
            className="object-cover w-full h-full rounded-xl"
          />
          </LeftTriggered>
        </div>

        <div className="bg-[#0A2856] rounded-xl shadow-md flex flex-col justify-center p-6 text-white">
          <RightTriggered delay={0.3}> 
          <h2 className="mb-12 text-2xl font-semibold text-right md:text-3xl font-poppins">Mobile Developer</h2>
          <p className="text-base font-light text-right md:text-xl font-poppins">
          Collaborated with cross-functional teams to deliver high-quality mobile app solutions from design to deployment. 
          Enhanced performance and user experience by troubleshooting issues and optimizing existing features. Managed patch deployments via App Center, 
          improving security and ensuring seamless updates with minimal disruption to users.
          </p>
          </RightTriggered>
        </div>
      </div>

      
      <div className="grid w-full grid-cols-2 gap-7 max-w-8xl ">
        <div className="bg-[#0A2856] rounded-xl shadow-md flex flex-col justify-center p-6 text-white">
           <LeftTriggered> 
          <h2 className="mb-16 text-2xl font-semibold md:text-3xl font-poppins">L2 Application Support</h2>
          <p className="text-base md:text-xl font-poppins">
            Delivered timely technical support by resolving signature validation, bill payment, OTP, and user data issues in mobile applications.
            Ensured smooth user experience across account management, authentication, and payment processing systems. Collaborated on patch
            deployments and enhancements to meet customer needs and improve app reliability.
          </p>
          </LeftTriggered>
        </div>

        <div className="w-full overflow-hidden rounded-xl">
          <RightTriggered> 
          <img
            src={L2Support}
            alt="Experience Image"
           className="object-cover w-full h-full rounded-xl"
          />
          </RightTriggered>
        </div>
      </div>
      <div className='justify-center mt-20 text-center text-white'>
        <FadeInFromBottom delay={0.1}> 
      <h2 className='text-2xl font-medium md:text-3xl font-poppins'>Front-End and Back-End Mobile Developer Intern </h2>
      </FadeInFromBottom>

      <FadeInFromBottom delay={0.3}> 
        <p className="mt-10 text-base font-light text-white md:text-xl font-poppins">
        Worked on both front-end and back-end development to build functional and user-friendly mobile interfaces. 
        Developed login and registration features with seamless navigation, and integrated backend APIs to retrieve and 
        display data from the database. Utilized tools like Visual Studio, XAMPP, and Postman to test and validate backend 
        functionalities, ensuring a smooth development workflow.
        </p>
      </FadeInFromBottom>
      </div>
    </div>
  );
}
