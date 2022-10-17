import React from 'react'
import Experience from './components/Experiance/Experience';
import Header from './components/Header/Header';
import About from './components/About/About';
import Nav from './components/Nav/Nav'
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonial/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/> 
    </>
  )
}

export default App;