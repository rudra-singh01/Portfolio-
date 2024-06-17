import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}
