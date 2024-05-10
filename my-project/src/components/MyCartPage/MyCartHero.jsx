import Hero1 from '../../assets/savvy assets/CartPage/Hero1.png'
import Hero2 from '../../assets/savvy assets/CartPage/Hero2.png'
import Hero3 from '../../assets/savvy assets/CartPage/Hero3.png'
import Hero4 from '../../assets/savvy assets/CartPage/Hero4.png'

import Delete from '../../assets/savvy assets/CartPage/Delete.svg'
import Blackheart from '../../assets/savvy assets/CartPage/Blackheart.svg'

const CartProps = ({imageSrc, cartTitle, size, quantity, amount}) => {
  return (
    <div className='py-1 px-5 lg:px-12 '>

            <div className='flex gap-5 lg:items-center lg:gap-10 '>
               <img className='w-40 lg:w-40' src={imageSrc} alt=""/>

               <div className='font-semibold lg:font-normal '>

               <div className='lg:text-xl lg:mt-4'>
                 <p className='font-bold lg:text-2xl lg:font-semibold '>{cartTitle}</p>
                 <div className='lg:py-1'>
                    <p>Size  :       {size} </p>
                    <p>Quantity  : {quantity}</p>
                 </div>
                 <div className='lg:flex gap-4'>
                    <p className='font-bold lg:text-3xl lg:font-bold'>{amount}</p>
                    <div className='flex gap-2 py-2 lg:py-5 lg:gap-3'>
                       <div> <img src={Delete} alt="" className='border border-tetiary-color p-1 w-7 rounded-lg lg:w-10 lg:border-2' /> </div> 
                      <div className='flex border border-tetiary-color h-full justify-center p-1 px-2 rounded-lg lg:border-2 lg:px-4'><p className='text-xs lg:text-lg lg:font-semibold'>Wishlist</p><img src={Blackheart} alt="" className='px-1 w-5 lg:w-8 ' /></div>  
                    </div>
                 </div>
              </div>

               </div>
             
            </div>
            
        </div>
        
  )
}

export const MyCartHero = () => {
  return (
    <div className='bg-tetiary-color bg-opacity-10 lg:p-2'>
        <div className=''>
            <div className=' flex ml-[8px] text-xs justify-around lg:justify-center lg:gap-10 lg:mr-[700px] lg:font-semibold lg:text-lg'> 
                <p className='font-semibold lg:font-bold '>1. Shopping Cart</p>
                <p>2. Checkout</p>
                <p>3. Order Successed!</p>
            </div>
            <h1 className=' py-5 px-7 font-bold text-2xl lg:px-12 lg:text-4xl lg:mt-5' >My Cart</h1>
        </div>

  <div className='flex justify-between'>
      <div className='flex flex-col justify-between gap-5 mb-6 lg:gap-5 lg:mt-5'>
      <CartProps imageSrc={Hero1} cartTitle="Lil Girl Dress" size="M" quantity="1" amount="N5,000" />
      <CartProps imageSrc={Hero2} cartTitle="Couple Wedding Combo" size="M" quantity="1" amount="N150,000" />
      <CartProps imageSrc={Hero3} cartTitle="Sunset Bubu" size="M" quantity="1" amount="N11,000" />
      <CartProps imageSrc={Hero4} cartTitle="Men Black Jacket" size="L" quantity="1" amount="N70,000" />
      </div>
<div className='grid grid-cols-1 gap-10 lg:px-20'>
      <div className='hidden lg:block lg:bg-button-color lg:px-6 lg:py-4 lg:rounded-lg '>
        <form action="" className='h-20'>
          <h1 className='text-2xl font-semibold'>Have a Coupon?</h1> <br />
          <input type="text" placeholder='Input your email here' className='border border-tetiary-color rounded-md p-2 w-[400px]' /> <br /><br />
          <button className='bg-tetiary-color py-2 px-4 rounded-md font-semibold'>Apply</button>
        </form>
      </div>

      <div className='hidden lg:block lg:mb-[250px] lg:py-2'>
        
          <p className='text-xl font-bold'>Cart Totals</p>
          <div className='flex justify-between py-5'>
            <p className='font-bold'>Subtotal</p>
            <p className='mr-[250px] font-bold'>N236,000</p>
          </div>

          <div className='flex justify-between '>
            <p className='font-bold'>Shipping</p>
            <div className='flex flex-col justify-between mr-[90px]  '>
              <p>Free shipping</p>
           <div className='flex justify-around gap-12  py-4'><p>Shipping to Lagos</p> <p className='font-bold  '>Change</p></div>
            </div> 
            
          </div>
        
          <div className='flex justify-between py-3 '>
            <p className='font-bold '>Total</p>
            <p className='font-bold mr-[250px]'>N236,000</p>
          </div>

         <div className='py-4 '><button className='bg-tetiary-color w-[400px] py-3 rounded-lg font-bold'>
          Checkout
         </button></div>
          
      </div>    
</div>

    </div>
    </div>

    

  )
}
