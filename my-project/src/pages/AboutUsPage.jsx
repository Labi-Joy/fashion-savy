import { SearchBar } from "../components/BuyerDash/SearchBar"
import { Footer } from "../components/Footer/Footer"
import { FooterTop } from "../components/Footer/FooterTop"
import { Header } from "../components/Header"
import { Testimonial } from "../components/Testimonial"
import { AboutUs } from "../components/AboutVision/AboutUs"
import { OurVision } from "../components/AboutVision/OurVision"
import { OurTeam } from "../components/AboutVision/OurTeam"


export const AboutUsPage = () => {
  return (
    <div>
        <Header/>
        <SearchBar/>
        <AboutUs/>
        <OurVision/>
        <OurTeam/>
        <Testimonial />
        <FooterTop/>
        <Footer/>
    </div>
  )
}
