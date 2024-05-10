import { SearchBar } from "../components/BuyerDash/SearchBar"
import { Footer } from "../components/Footer/Footer"
import { FooterTop } from "../components/Footer/FooterTop"
import { Header } from "../components/Header"
import { PDHero } from "../components/ProductDetail/PDHero"
import { ReviewPage } from "../components/ProductDetail/ReviewPage"


export const CartPDPage = () => {
  return (
    <div>
    <Header/>
    <SearchBar/>
    <PDHero/>
    <ReviewPage/>
    <FooterTop/>
    <Footer/>  
    </div>
  )
}
