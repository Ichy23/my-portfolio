import FadeInWhenVisible from  '../animations/FadeInWhenVisible';

export default function AboutMe() {
  return (
    <div id="about" className="relative -mt-3 z-10 bg-[#0A2856] w-full">
      <div className="px-6 py-16 mx-16 text-center md:px-10">
 
        <FadeInWhenVisible>
          <h2 className="mb-10 text-3xl text-white font-poppins tracking-[10.08px]">
            About Me
          </h2>
        </FadeInWhenVisible>

        <div className="mx-auto space-y-6 text-lg leading-relaxed tracking-wide text-center text-white font-poppins">
          <FadeInWhenVisible>
            <p>
              I’m a <span className='italic font-bold'> Junior Mobile Developer</span> who enjoys bringing mobile app ideas to life clean, simple, and smooth (just how users like it). I have hands-on experience building and maintaining apps with React Native. While my experience with Flutter is more basic and focused on frontend development, I’m eager to grow my skills in both frameworks. I'm early in my career, but fully committed to learning, improving, and making things work.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <p>
              Debugging doesn’t scare me (most days), and I’m always <span className='italic font-bold'> always up for a challenge</span>, especially if it means solving tricky problems or expanding my skills. I aim to write code that not only works, but actually makes life smoother for users and easier for the team.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <p>
              Outside of coding, I believe a good playlist and a strong cup of <span className='italic font-bold'> coffee </span> can fix almost anything—including stubborn UI bugs. Let’s build something awesome together!
            </p>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
}

