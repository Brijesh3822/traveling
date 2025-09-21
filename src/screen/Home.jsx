import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PopularPlaces from "../components/PopularPlaces";
import Testimonials from "../components/Testimonials";






function Home (){
    return (
        <div>
                <Header/>
      <HeroSection/>


      <AboutUs/>

      <PopularPlaces/>

      <Testimonials/>
      <ContactUs/>
      <Footer/>
        </div>
    )
}

export default Home;