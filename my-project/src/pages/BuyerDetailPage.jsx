import { SearchBar } from "../components/BuyerDash/SearchBar"
import { Orders } from "../components/BuyerDetail/Orders"
import { Footer } from "../components/Footer/Footer"
import { FooterTop } from "../components/Footer/FooterTop"
import { Header } from "../components/Header"


export const BuyerDetailPage = () => {
  return (
    <div>
        <Header/>
        <SearchBar/>
        <Orders/>
        <FooterTop/>
        <Footer/>
        
    </div>
  )
}
