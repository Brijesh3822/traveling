import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import PopularPlaces from './components/PopularPlaces'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <Header/>
      <HeroSection/>
      <AboutUs/>
      <PopularPlaces/>

      <Testimonials/>
      <ContactUs/>
      <Footer/>

    </>
  )
}

export default App
