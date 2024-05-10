import Yellow from '../../assets/savvy assets/ProductDetailPage/Yellow.png'
import Yellow1 from '../../assets/savvy assets/ProductDetailPage/Yellow1.png'
import Yellow2 from '../../assets/savvy assets/ProductDetailPage/Yellow2.png'
import Yellow3 from '../../assets/savvy assets/ProductDetailPage/Yellow3.png'
import Yellow4 from '../../assets/savvy assets/ProductDetailPage/Yellow4.png'
import Rate from '../../assets/savvy assets/ProductDetailPage/Rate.svg'
import Ratings from '../../assets/savvy assets/ProductDetailPage/Ratings.svg'
import John from '../../assets/savvy assets/ProductDetailPage/John.png'
import John1 from '../../assets/savvy assets/ProductDetailPage/John1.png'
import John2 from '../../assets/savvy assets/ProductDetailPage/John2.png'
import John3 from '../../assets/savvy assets/ProductDetailPage/John3.png'
import John4 from '../../assets/savvy assets/ProductDetailPage/John4.png'
import Ada from '../../assets/savvy assets/ProductDetailPage/Ada.png'
import Ada1 from '../../assets/savvy assets/ProductDetailPage/Ada1.png'
import Ada2 from '../../assets/savvy assets/ProductDetailPage/Ada2.png'
import Ada3 from '../../assets/savvy assets/ProductDetailPage/Ada3.png'
import WunF from '../../assets/savvy assets/ProductDetailPage/WunF.png'
import WunF1 from '../../assets/savvy assets/ProductDetailPage/WunF1.png'
import WunF2 from '../../assets/savvy assets/ProductDetailPage/WunF2.png'
import WunF3 from '../../assets/savvy assets/ProductDetailPage/WunF3.png'
import WunF4 from '../../assets/savvy assets/ProductDetailPage/WunF4.png'



export const ReviewPage = () => {
  return (
    <div className='p-6 '>
         <p className='p-1 text-2xl font-bold'>Reviews (4)</p>

         <div className='flex items-center justify-around gap-3'>
            <img src={Yellow} alt="" className='mb-40 py-5 w-10' />

            <div className='mb-6'>
                <div className='flex '>
                <p className='font-semibold  text-lg'>Jane Doe</p>
                <img src={Ratings} alt=""  className='w-20 ml-6'/>
                </div>
                <p className='font-semibold text-sm'>"Absolutely Stunning Quality!"</p>
                <div className='flex justify-around gap-2 w-10 py-2'>
                    <img src={Yellow1} alt="" />
                    <img src={Yellow2} alt="" />
                    <img src={Yellow3} alt="" />
                    <img src={Yellow4} alt="" />
                </div>
                <p className='text-xs'>I recently purchased a dress from this seller and I am beyond impressed! The fabric is luxurious and the stitching is impeccable.</p>
                <p className='py-2 text-xs'>24 March 2024 at 01.55 pm</p>

            </div>
         </div>

         <div className='flex items-center justify-around gap-3'>
            <img src={John} alt="" className='mb-40 py-5 w-10' />

            <div className='mb-6'>
                <div className='flex '>
                <p className='font-semibold  text-lg'>John Rich</p>
                <img src={Ratings} alt=""  className='w-20 ml-6'/>
                </div>
                <p className='font-semibold text-sm'>"Absolutely Stunning Quality!"</p>
                <div className='flex justify-around gap-2 w-10 py-2'>
                    <img src={John1} alt="" />
                    <img src={John2} alt="" />
                    <img src={John3} alt="" />
                    <img src={John4} alt="" />
                </div>
                <p className='text-xs'>From the packaging to the quality of the garments, it's clear that this company takes pride in their products. Each piece I've ordered has exceeded my expectations.</p>
                <p className='py-2 text-xs'>24 March 2024 at 01.55 pm</p>

            </div>
         </div>

         <div className='flex items-center justify-around gap-3'>
            <img src={Ada} alt="" className='mb-40 py-5 w-10' />

            <div className='mb-6'>
                <div className='flex '>
                <p className='font-semibold  text-lg'>Ada Smith</p>
                <img src={Rate} alt=""  className='w-20 ml-6'/>
                </div>
                <p className='font-semibold text-sm'>"Absolutely Stunning Quality!"</p>
                <div className='flex justify-around gap-2 w-10 py-2'>
                    <img src={Ada1} alt="" />
                    <img src={Ada2} alt="" />
                    <img src={Ada3} alt="" />
                </div>
                <p className='text-xs'>As someone who shops online frequently, I really appreciate how quickly my orders arrive from this website.</p>
                <p className='py-2 text-xs'>24 March 2024 at 01.55 pm</p>

            </div>
         </div>


        <div className='flex items-center justify-around gap-3'>
            <img src={WunF} alt="" className='mb-40 py-5 w-10' />

            <div className='mb-6'>
                <div className='flex '>
                <p className='font-semibold  text-lg'>Wunmi F.</p>
                <img src={Rate} alt=""  className='w-20 ml-6'/>
                </div>
                <p className='font-semibold text-sm'>"Absolutely Stunning Quality!"</p>
                <div className='flex justify-around gap-2 w-10 py-2'>
                    <img src={WunF1} alt="" />
                    <img src={WunF2} alt="" />
                    <img src={WunF3} alt="" />
                    <img src={WunF4} alt="" />
                </div>
                <p className='text-xs'>The variety of styles is amazing, and the prices are so affordable. I've ordered multiple times and have never been disappointed.</p>
                <p className='py-2 text-xs'>24 March 2024 at 01.55 pm</p>

            </div>
         </div>


    </div>
  )
}
