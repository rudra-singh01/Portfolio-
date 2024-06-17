import React from 'react';

function Footer() {
    return (
        <div className='w-full min-h-[50vh] bg-black'>
            {/* Social Icons Section */}
            <div className="social bg-gray-900 text-white py-5">
                <div className="container mx-auto flex justify-center gap-5 text-2xl">
                    <a href="#"><i className="ri-github-fill"></i></a>
                    <a href="#"><i className="ri-linkedin-box-fill"></i></a>
                    <a href="#"><i className="ri-youtube-fill"></i></a>
                    <a href="#"><i className="ri-instagram-fill"></i></a>
                    <a href="#"><i className="ri-twitter-x-fill"></i></a>
                </div>
            </div>

            {/* Footer Content */}
            <div className="footer-content bg-black text-white py-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5">
                    {/* Name and Description */}
                    <div className="name w-full md:w-[50%] flex flex-col p-2 justify-center text-white gap-5">
                        <h3 className='uppercase text-center md:text-left'>rudra singh</h3>
                        <p className='text-center md:text-left tracking-tighter'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bottom bg-black py-5">
                <div className="container mx-auto text-white text-center">
                    <p>&copy; 2024 created by <a className='underline' href="/">Rudra Singh</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
