import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Home } from './page/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

{/* <div className='w-full'>
      <Navbar />
      <HeroSection/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div> */}