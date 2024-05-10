
import { BuyerHero } from "../components/BuyerDash/BuyerHero"
import { Products } from "../components/BuyerDash/Products"
import { SearchBar } from "../components/BuyerDash/SearchBar"
import { Footer } from "../components/Footer/Footer"
import { FooterTop } from "../components/Footer/FooterTop"
import { Header } from "../components/Header"

export const DashPage = () => {
  return (
    <div>
<Header/>
<SearchBar/>
<BuyerHero/>
<Products/>
<FooterTop/>
<Footer/> 
    </div>

  )
}
