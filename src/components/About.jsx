import React from 'react';

function About() {
    let data = [
        { skill: "HTML" },
        { skill: "CSS" },
        { skill: "TAILWIND" },
        { skill: "JAVASCRIPT" },
        { skill: "REACT" },
        { skill: "NODE JS" },
        { skill: "PYTHON" },
        { skill: "DJANGO" },
        { skill: "MYSQL" },
        { skill: "MONGODB" },
        { skill: "GIT" },
        { skill: "GITHUB" },
    ];
    const scrollToContact = () => {
        const ContactSection = document.getElementById('Contacts');
        if (ContactSection) {
          ContactSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <section id='About'>
            <div id='about' className='w-full min-h-screen bg-[#FAFAFA]'>
                <div className="me w-full h-[40vh] flex flex-col items-center justify-center gap-5 text-center">
                    <h1 className='text-3xl md:text-5xl font-bold'>ABOUT ME</h1>
                    <span className='w-6 h-1 bg-[#7843E9] rounded-[2vw]'></span>
                    <p className='w-full md:w-[50%] text-sm md:text-base'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                </div>
                <div className="myself flex flex-col md:flex-row justify-center md:justify-evenly">
                    <div className="know w-full md:w-[40%] h-full flex flex-col justify-center gap-2 p-5 text-center md:text-left">
                        <h3 className='text-2xl md:text-3xl'>Get to know me!</h3>
                        <p className='text-sm md:text-base tracking-tighter'>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                        <p className='text-sm md:text-base tracking-tighter'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="#"><span className='text-[#7866EF] font-bold hover:underline'>LinkedIn</span></a> and <a href="#"><span className='text-[#7866EF] font-bold hover:underline'>Instagram</span></a>  where I post useful content related to Web Development and Programming</p>
                        <p className='text-sm md:text-base tracking-tighter'>I'm open to <span className='text-[#717171] font-bold'>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span className='text-[#717171] font-bold'>Contact me</span>.</p>
                        <button onClick={scrollToContact }  className='px-2 py-2 w-[30%] md:w-[20%] mt-5 rounded-lg bg-[#7843E9] text-white font-bold duration-300 ease-in-out transform hover:-translate-y-1'>CONTACT</button>
                    </div>
                    <div className="skill w-full md:w-[40%] h-full mt-5 md:mt-0  flex flex-wrap items-center justify-center md:justify-start gap-2">
                        <h3 className='text-2xl md:text-3xl w-full'>My Skills</h3>
                        {data.map((value, index) => (
                            <div key={index} className='w-[45%] flex items-center justify-center md:w-[20%] px-5 py-2 rounded-lg bg-gray-400 text-center text-sm md:text-base tracking-tighter md:tracking-tighter'>{value.skill}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
