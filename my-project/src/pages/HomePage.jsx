
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer/Footer'
import { FooterTop } from '../components/Footer/FooterTop'
import { Shoppers } from '../components/Shoppers'
import { Testimonial } from '../components/Testimonial'
import { OurServices } from '../components/OurServices'
import { AboutUs } from '../components/AboutUs'
import { Collection } from '../components/Collection'


const HomePage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Collection/>
        <AboutUs/>
        <OurServices/>
        <Testimonial/>
        <Shoppers/>
        <FooterTop/>
        <Footer />
        <h1></h1>
    </div>
  )
}

export default HomePage