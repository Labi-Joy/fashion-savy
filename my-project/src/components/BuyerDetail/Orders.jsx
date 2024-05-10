import Image1 from '../../assets/savvy assets/BuyerD/Image1.png'
import Image2 from '../../assets/savvy assets/BuyerD/Image2.png'
import Image3 from '../../assets/savvy assets/BuyerD/Image3.png'
import Image4 from '../../assets/savvy assets/BuyerD/Image4.png'
import carbon_car from '../../assets/savvy assets/BuyerD/carbon_car.svg'
import uil_bill from '../../assets/savvy assets/BuyerD/uil_bill.svg'


export const Orders = () => {
  return (
    <div className='p-6 px-3 bg-tetiary-color bg-opacity-10 mb-12'>

      <div className='grid grid-cols-1 justify-around gap-6'>

          <div >
            <img src={Image1} alt="" className='w-40'/>
            <div >
              <p className='font-bold'>Cold Shoulder Ankakra Top</p>
              <div className='font-semibold'>
               <div className='flex justify-between '><p>Size : </p> <p className='mr-20 px-20'>M</p></div>        
                 <div className='flex justify-between'> <p>Quantity :</p> <button className=' px-2'> <span className=' flex flex-row px-20 mr-16 justify-between gap-8'><p>-</p>5<p>+</p></span> </button></div>
                     <div className='flex'>
                        <p>Shipped :</p> 
                           <div className='flex justify-between'>
                             <button className='bg-button-color flex justify-between gap-12 px-4 rounded border ml-10'>
                               <img src={uil_bill} alt="" className='py-4 w-5 px-0.5' />
                               <span className='text-xs py-4 mr-2 text-text-color'>Invoice</span> 
                             </button>
                             <button className='bg-button-color flex justify-between gap-12 px-4 mr-20 rounded border'>
                               <img src={carbon_car} alt="" className='py-4 w-5 px-0.5' />
                               <span className='text-xs py-4 mr-2 text-text-color'>Logistics</span> 
                             </button>
                           </div> 
                     </div>
              </div>
            </div>
        </div>



        <div>
            <img src={Image2} alt="" className='w-40'/>
            <div >
              <p className='font-bold'>Green Ankakra Top</p>
              <div className='font-semibold'>
               <div className='flex justify-between '><p>Size : </p> <p className='mr-20 px-20'>M</p></div>        
                 <div className='flex justify-between'> <p>Quantity :</p> <button className=' px-2'> <span className=' flex flex-row px-20 mr-16 justify-between gap-8'><p>-</p>5<p>+</p></span> </button></div>
                     <div className='flex'>
                        <p>Shipped :</p> 
                           <div className='flex justify-between'>
                             <button className='bg-button-color flex justify-between gap-12 px-4 rounded border ml-10'>
                               <img src={uil_bill} alt="" className='py-4 w-5 px-0.5' />
                               <span className='text-xs py-4 mr-2 text-text-color'>Invoice</span> 
                             </button>
                             <button className='bg-button-color flex justify-between gap-12 px-4 mr-20 rounded border'>
                               <img src={carbon_car} alt="" className='py-4 w-5 px-0.5' />
                               <span className='text-xs py-4 mr-2 text-text-color'>Logistics</span> 
                             </button>
                           </div> 
                     </div>
              </div>
            </div>
        </div>


        
        <div>
            <img src={Image3} alt="" className='w-40'/>
            <div >
              <p className='font-bold'>Sisi Crochet Set</p>
              <div className='font-semibold'>
               <div className='flex justify-between '><p>Size : </p> <p className='mr-20 px-20'>M</p></div>        
                 <div className='flex justify-between'> <p>Quantity :</p> <button className=' px-2'> <span className=' flex flex-row px-20 mr-16 justify-between gap-8'><p>-</p>5<p>+</p></span> </button></div>
                     <div className='flex'>
                        <p>Shipped :</p> 
                           <div className='flex justify-between'>
                             <button className='bg-button-color flex justify-between gap-12 px-4 rounded border ml-10'>
                               <img src={uil_bill} alt="" className='py-4 w-5 px-0.5' />
                               <span className='text-xs py-4 mr-2 text-text-color'>Invoice</span> 
                             </button>
                             <button className='bg-button-color flex justify-between gap-12 px-4 mr-20 rounded border'>
                               <img src={carbon_car} alt="" className='py-4 w-5 px-0.5' />
                               <span className='text-xs py-4 mr-2 text-text-color'>Logistics</span> 
                             </button>
                           </div> 
                     </div>
              </div>
            </div>
        </div>


        
        <div>
            <img src={Image4} alt="" className='w-40'/>
            <div >
              <p className='font-bold'>Stars Plain Shirt</p>
              <div className='font-semibold'>
               <div className='flex justify-between '><p>Size : </p> <p className='mr-20 px-20'>M</p></div>        
                 <div className='flex justify-between'> <p>Quantity :</p> <button className=' px-2'> <span className=' flex flex-row px-20 mr-16 justify-between gap-8'><p>-</p>5<p>+</p></span> </button></div>
                     <div className='flex'>
                        <p>Shipped :</p> 
                           <div className='flex justify-between'>
                             <button className='bg-button-color flex justify-between gap-12 px-4 rounded border ml-10'>
                               <img src={uil_bill} alt="" className='py-4 w-5 px-0.5' />
                               <span className='text-xs py-4 mr-2 text-text-color'>Invoice</span> 
                             </button>
                             <button className='bg-button-color flex justify-between gap-12 px-4 mr-20 rounded border'>
                               <img src={carbon_car} alt="" className='py-4 w-5 px-0.5' />
                               <span className='text-xs py-4 mr-2 text-text-color'>Logistics</span> 
                             </button>
                           </div> 
                     </div>
              </div>
            </div>
        </div>

        </div>    

    </div>
  )
}
