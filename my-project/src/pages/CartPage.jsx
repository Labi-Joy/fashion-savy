import { SearchBar } from "../components/BuyerDash/SearchBar"
import { Footer } from "../components/Footer/Footer"
import { FooterTop } from "../components/Footer/FooterTop"
import { Header } from "../components/Header"
import { CheckOutForm } from "../components/MyCartPage/CheckOutForm"
import { MyCartHero } from "../components/MyCartPage/MyCartHero"
import { RelatedItems } from "../components/MyCartPage/RelatedItems"


export const CartPage = () => {
  return (
    <div>
        <Header/>
        <SearchBar/>
        <MyCartHero/>
        <CheckOutForm/>
        <RelatedItems/>
        <FooterTop/>
        <Footer/>
    </div>
  )
}
