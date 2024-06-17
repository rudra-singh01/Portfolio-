import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navcomp } from './Navcomp'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [activeLink, setActiveLink] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (comp) => {
    const element = document.getElementById(comp)
    if (element) {
      const margonTop = 0;
      const ScrollTop = element.getBoundingClientRect().top + window.scrollY - margonTop;
      window.scrollTo({ top: ScrollTop, behavior: "smooth" })
    }
  }
  const MobileScroll = (hello) => {
    const element = document.getElementById(hello)
    if (element) {
      const margonTop = 0;
      const ScrollTop = element.getBoundingClientRect().top + window.scrollY - margonTop;
      window.scrollTo({ top: ScrollTop, behavior: "smooth" })
    }
  }

  return (

    <nav role="navigation" className="fixed top-0 left-0 w-full bg-[#ffffff68] z-30">
      <div className="navbar flex items-center justify-between p-5 h-16">
        <div className="logo">
          <h1 className="mx-10 transition duration-300 ease-in-out transform hover:text-[#7866EF]">
            Rudra Singh
          </h1>
        </div>
        <div className="content hidden md:flex items-center justify-center">
          <ul className="flex items-center justify-center gap-4 lg:gap-8 font-normal px-10 uppercase">
            {Navcomp.map((comp, i) => {
              return (
                <li key={i} onClick={() => handleScroll(comp)} className="transition duration-300 ease-in-out transform hover:text-[#7866EF] hover:underline">
                  <Link to="/" className="active">{comp}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:hidden flex items-center justify-end flex-1 relative">
          <button onClick={toggleMobileMenu} className="mobile-menu-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-16 right-0 h-[40vh] w-full bg-[#ffffff] z-20 transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <ul className="flex flex-col items-center justify-center gap-4 font-normal uppercase p-5">
          {Navcomp.map((hello, i) => {
            return (
              <li key={i} onClick={() => MobileScroll(hello)} className="transition text-xl font-bold border-b-2 w-full text-right border-[#dadada] duration-300 ease-in-out transform hover:text-[#7866EF] ">
                <Link to="/" className="active">{hello}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


{/* 
          <li className="transition text-xl font-bold border-b-2 w-full text-right border-[#dadada] duration-300 ease-in-out transform hover:text-[#7866EF] ">
            <a href="#">About</a>
          </li>
          <li className="transition text-xl font-bold border-b-2 w-full text-right border-[#dadada] duration-300 ease-in-out transform hover:text-[#7866EF] ">
            <a href="#">Projects</a>
          </li>
          <li className="transition text-xl font-bold border-b-2 w-full text-right border-[#dadada] duration-300 ease-in-out transform hover:text-[#7866EF] ">
            <a href="#">Contact</a>
          </li> */}