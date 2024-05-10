import right from '../../assets/savvy assets/ProductDetailPage/right.png';
import HeroPic1 from '../../assets/savvy assets/ProductDetailPage/HeroPic1.png';
import HeroPic2 from '../../assets/savvy assets/ProductDetailPage/HeroPic2.png';
import HeroPic3 from '../../assets/savvy assets/ProductDetailPage/HeroPic3.png';
import HeroPic5 from '../../assets/savvy assets/ProductDetailPage/HeroPic5.png';
import Rate from '../../assets/savvy assets/ProductDetailPage/Rate.svg';
import ShoppingCart from '../../assets/savvy assets/ProductDetailPage/ShoppingCart.svg';
import SizeGuide from '../../assets/savvy assets/ProductDetailPage/SizeGuide.png';

export const PDHero = () => {
  return (
    <div className='p-6 py-3s bg-tetiary-color bg-opacity-10'>
        <div className='flex  justify-around gap-1 px-2'><p className='Cat'>Catalogue</p> <img className='w- h-4 mt-2'  src={right} alt="" /> <p className='Cat'>Women's Wear</p> <img className='w- h-4 mt-2' src={right} alt="" /> <p className='Cat'>Casual</p> </div>
        <div className='py-4 lg:px-6'>
          <img src={HeroPic1} alt="" className='lg:w-[400px] lg:rounded-lg'/>
          <div className='grid grid-cols-3 py-3 justify-between gap-3 lg:w-[400px]'>
          <img src={HeroPic2} alt="" />
          <img src={HeroPic3} alt="" />
          <img src={HeroPic5} alt="" /> 
          </div>
        </div>
          
           <div>
            <p className='Amari'>Amari Dress</p>
            <img src={Rate} alt="" />
            <p className='Amari'>N1,500 - N3,000</p>
           </div>

           <div>
            <p className='Product'>Product Details</p>
            <p className='Details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
            <p className='py-4'>reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           </div>

           <div className='flex justify-between px-3 py-4'>
            <p className='font-semibold'>Quantity</p>
            <div className='flex justify-around gap-4 bg-button-color px-4 font-medium rounded-sm'><p className=''>-</p> <p>2</p> <p>+</p> </div>
            <p className='font-semibold text-Secondary-Color'>Add note</p>
           </div>

           <div className='py-4'><button className='flex justify-around gap-2 bg-tetiary-color px-3 py-3 rounded-md '>Add to cart <img src={ShoppingCart} alt="" /></button></div>

           <div>
            <p className='font-bold text-xl mt-3 py-3'>Style info</p>
            <p className='Detail '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className='py-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.</p>
           </div>

           <img src={SizeGuide} alt="" />

    </div>
  )
}
