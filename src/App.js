import React from 'react'
import Header from "./components/header/header";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Testimonials from "./components/testmonials/testimonials";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";


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

export default App