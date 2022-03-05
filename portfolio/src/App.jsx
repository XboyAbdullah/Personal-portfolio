import React from 'react'
import Header from './componenrts/header/Header'
import Nav from './componenrts/nav/Nav'
import About from './componenrts/about/About'
import Experience from './componenrts/experience/Experience'
import Services from './componenrts/services/Services'
import Portfolio from   './componenrts/portfolio/Portfolio'
import Testimonials from './componenrts/testimonials/Testimonials'
import Footer from '../src/componenrts/footer/Footer'
import Contact from '../src/componenrts/contact/Contact'
const App = () => {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App