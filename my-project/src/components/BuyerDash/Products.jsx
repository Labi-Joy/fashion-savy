import Image1 from "../../assets/savvy assets/ShopPage/Image1.png";
import Image2 from "../../assets/savvy assets/ShopPage/Image2.png";
import Image3 from "../../assets/savvy assets/ShopPage/Image3.png";
import Image4 from "../../assets/savvy assets/ShopPage/Image4.png";
import Image5 from "../../assets/savvy assets/ShopPage/Image5.png";
import Image6 from "../../assets/savvy assets/ShopPage/Image6.png";
import Image7 from "../../assets/savvy assets/ShopPage/Image7.png";
import Image8 from "../../assets/savvy assets/ShopPage/Image8.png";
import SearchIcon from '../../assets/savvy assets/ShopPage/SearchIcon.svg'
import Ratings from "../../assets/savvy assets/ShopPage/Ratings.svg";

export const Products = () => {
  return (

 <div>   

<div className=' py-8 justify-center flex'> 
      <button className='bg-button-color flex justify-between gap-12 px-2 rounded border'>
           <span className='text-xs py-2 text-text-color'>Search Products</span> 
            <img src={SearchIcon} alt="" className='py-2 w-3 mt-0.5' />
        </button>
      </div>

    <div className="p-5 grid grid-cols-2 justify-between gap-3">
      <div>
      <img src={Image1} alt="" className="z-1" />
      <div className="bg-tetiary-color text-center p-2 ">
        <p>Urbano Jacket</p>
        <img src={Ratings} alt=""  className="ml-7"/>
        <p className="text-xs">Aluko fashions</p>
        <p className="text-Secondary-Color">N5,699</p>
      </div>
      </div>

      <div>
      <img src={Image2} alt="" className="z-1" />
      <div className="bg-tetiary-color text-center p-2 ">
        <p>Bella Mini Skirt</p>
        <img src={Ratings} alt=""  className=" ml-7"/>
        <p className="text-xs">Bella Store</p>
        <p className="text-Secondary-Color">N7,200</p>
      </div>
      </div>

      <div>
      <img src={Image3} alt="" className="z-1" />
      <div className="bg-tetiary-color text-center p-2 ">
        <p>Kiki Bridal Gown</p>
        <img src={Ratings} alt=""  className="ml-7"/>
        <p className="text-xs">Kiki Mia Collections</p>
        <p className="text-Secondary-Color">N10,000</p>
      </div>
      </div>

      <div>
      <img src={Image4} alt="" className="z-1" />
      <div className="bg-tetiary-color text-center p-2 ">
        <p>Wu Orange Dress</p>
        <img src={Ratings} alt=""  className="ml-7"/>
        <p className="text-xs">Wumi Fashion House</p>
        <p className="text-Secondary-Color">N25,340</p>
      </div>
      </div>

      <div>
      <img src={Image5} alt="" className="z-1" />
      <div className="bg-tetiary-color text-center p-2 ">
        <p>Jab Kimono Set</p>
        <img src={Ratings} alt=""  className="ml-7"/>
        <p className="text-xs">Sabelinia Fashion House</p>
        <p className="text-Secondary-Color">N19,345</p>
      </div>
      </div>

      <div>
      <img src={Image6} alt="" className="z-1" />
      <div className="bg-tetiary-color text-center p-2 ">
        <p>Stripped Summer</p>
        <img src={Ratings} alt=""  className=" ml-7"/>
        <p className="text-xs">Beauty Tailor</p>
        <p className="text-Secondary-Color">N2,950</p>
      </div>
      </div>

      <div>
      <img src={Image7} alt="" className="z-1" />
      <div className="bg-tetiary-color text-center p-2 ">
        <p>CF Simple Shirt</p>
        <img src={Ratings} alt=""  className="ml-7"/>
        <p className="text-xs">Quality Dressing Store</p>
        <p className="text-Secondary-Color">N3,954</p>
      </div>
      </div>

      <div>
      <img src={Image8} alt="" className="z-1" />
      <div className="bg-tetiary-color text-center p-2 ">
        <p>Long Sleeved</p>
        <img src={Ratings} alt=""  className=" ml-7"/>
        <p className="text-xs">Premium Clothing Line</p>
        <p className="text-Secondary-Color">N2,504</p>
      </div>
      </div>
      
    </div>
<div className="py-5 flex justify-center">
<button className="bg-tetiary-color py-3 px-8 font-semibold ">See More</button>
</div>
 </div>
  );
};
