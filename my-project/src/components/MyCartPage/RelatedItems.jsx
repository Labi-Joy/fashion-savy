import Image from '../../assets/savvy assets/CartPage/Image.png'
import Image1 from '../../assets/savvy assets/CartPage/Image1.png'
import Image2 from '../../assets/savvy assets/CartPage/Image2.png'
import Image3 from '../../assets/savvy assets/CartPage/Image3.png'
import HeartIcon from '../../assets/savvy assets/CartPage/HeartIcon.svg'
import Ratings from '../../assets/savvy assets/CartPage/Ratings.svg'


const RelatedProps = ({picture, like, outfit, starImg, promo,  companyName, amount }) => {
    return (
       
          <div> 
                 <div className='relative'>
                     <img src={picture} alt="" className='w-60 rounded-lg  relative' />
                     <img src={like} alt="" className=' w-7 absolute top-5 left-40 ml-8' />
                       <p className='text-Secondary-Color font-semibold absolute top-5 px-2 left-5 bg-button-color rounded-md'>{promo}</p>
                       <div className='absolute text-center bottom-4 bg-button-color py-3 px-10 left-6 '>
                           <p className='font-bold text-xl'>{outfit} </p>
                           <img src={starImg} alt=""  className='w-20 ml-4'/>
                            <p className='text-xs'> {companyName}</p>
                         <p className='text-Secondary-Color text-xs'>{amount}</p>
                    </div>
          </div>

      </div>
    )
}

export const RelatedItems = () => {
  return (
    <div>
    <div className="hidden lg:block py-5 px-16 mb-20 " >
    <p className="font-bold text-5xl py-10 ">Related Items</p> 

    <div className='flex justify-between px-10'> 
    <RelatedProps picture={Image} like={HeartIcon} outfit="Bridal Dress" starImg={Ratings} promo="Sale" companyName="Aluko Fashions" amount="N5,699" />
    <RelatedProps picture={Image1} like={HeartIcon} outfit="Sims Gown" starImg={Ratings} promo="Sale" companyName="Enako Clothing Store" amount="N15,699" />
    <RelatedProps picture={Image2} like={HeartIcon} outfit="Pinky Kiddy" starImg={Ratings} promo="Sale" companyName="Lil Princesses Store" amount="N15,699" />
    <RelatedProps picture={Image3} like={HeartIcon} outfit="Men Suits" starImg={Ratings} promo="Sale" companyName="Classic Men's Wear" amount="N77,430" />
    </div>

    </div>
    </div>
  )
}
