import React from 'react';
import 'remixicon/fonts/remixicon.css';

function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('Projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id='Home'>
      <div id='hero' className="w-full min-h-screen bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-cover bg-center relative">
        <div className="absolute w-full h-full bg-[#ffffff90]"></div>

        {/* Left section with conditional responsive classes */}
        <div className="left hidden md:flex md:flex-col md:absolute md:w-16 md:h-[40vh] bg-white mt-[17vw] flex-col items-center justify-evenly gap-5 text-3xl">
          <a className='transition duration-300 ease-in-out transform hover:bg-[#E4D9FB] rounded-lg px-2' target='_blank' href="https://github.com/rudra-singh01"><i class="ri-github-fill"></i></a>
          <a className='transition duration-300 ease-in-out transform hover:bg-[#E4D9FB] rounded-lg px-2' target='_blank' href="https://x.com/kunal__singh01"><i class="ri-twitter-x-line"></i></a>
          <a className='transition duration-300 ease-in-out transform hover:bg-[#E4D9FB] rounded-lg px-2' target='_blank' href="https://www.linkedin.com/in/rudra-singh-5a6399298/"><i class="ri-linkedin-box-fill"></i></a>
        </div>

        {/* Centered content */}
        <div className="center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl px-6 text-center">
          <div className="cont gap-10 flex flex-col items-center justify-center text-black">
            <h1 className='text-4xl md:text-7xl '>HEY, I'M RUDRA SINGH</h1>
            <p className='text-lg md:text-xl'>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
            <button onClick={scrollToProjects} className='px-6 py-3 rounded-lg bg-[#7843E9] text-white font-bold duration-300 ease-in-out transform hover:-translate-y-1'>PROJECT</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
