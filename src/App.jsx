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
import { Route, Routes } from 'react-router-dom'
import Home from './screen/Home'
import Login from './screen/Login'
import SignUp from './screen/SignUp'
import Hotels from './components/Hotels'
import HotelDetail from './components/HotelDetails'
import HotelList from './components/HotelList'
import BookingForm from './components/BookingForm'
import AdminLogin from './components/AdminLogin'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path="/hotels/:id" element={<HotelDetail />} />


        <Route path="/hotels/city/:city" element={<HotelList />} />
      <Route path="/booking/:id" element={<BookingForm />} />
      <Route path="/admin" element={<AdminLogin />} />
        
      </Routes>
  

    </>
  )
}

export default App
