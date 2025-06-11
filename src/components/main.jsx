import Nav from "./nav";
import Hero from "./hero";
import AboutMe from "./about_me";
import MySkills from "./myskills";
import Project from "./project";
import MyExperiences from "./myexperiences";
import Footer from "./footer";

const Main = () => {
  return (

    <div
      style={{
        background: "linear-gradient(180deg, #92BEFF -20%, #3A7BDD 20%, #1F4277 35%)",
      }}
    >
      
      <Nav />
      <Hero />
      <AboutMe/>
      <MySkills/>
      <Project/>
      <MyExperiences/>
      <Footer/>
    </div>

  );
};

export default Main;
