import Logo from '../../assets/Logo.svg';

export const Footer = () => {
  return (
   <div>  
       <div className='lg:flex '>
         <div className='lg:grid lg:items-center md:'>
             <div className='lg:py-16 md:w-full md:h-full md:items-center md:flex md:flex-col '><img className=' flex justify-center items-center  px-40 p-1' src= {Logo} alt="" /></div>
      
                  {/* <div className='px-5 flex flex-col gap-10 '> */}

                <div className='text-sm py-1 font-semibold flex flex-col items-center lg:mb-80'>
                  <p className=''>Helping small fashion businesses </p>
                  <p>build a strong online brand.</p>
                </div>
        </div> 


        <div className='lg:flex lg:py-40 p-5 lg:gap-10 md:flex  md:gap-2'>
        
                <div className=' text-primary-color py-5'> 
                     <p className='foot1' >Product</p>
                     <ul className='foot2'>
                     <li><a href="#">LandingPage</a></li>
                     <li><a href="#">Services</a></li>
                     <li><a href="#">Testimonials</a></li>
                     <li><a href="#">Referral Program</a></li>
                     <li> <a href="#">Pricing</a></li>
                    </ul>
                </div>

               <div className=' text-primary-color py-5'> 
                   <p className='foot1' >Services</p>
                   <ul className='foot2'> 
                   <li><a href="#">Documentation</a></li>
                   <li><a href="#">Invoice Generator</a></li>
                   <li><a href="#">Catalogue</a></li>
                   <li><a href="#">Quality Assurance</a></li>
                   <li><a href="#">Logistics</a></li>
                 </ul>
               </div>

               <div className=' text-primary-color py-5'> 
                    <p className='foot1' >Company</p>
                    <ul className='foot2'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

               <div className=' text-primary-color py-5'> 
                   <p className='foot1'>More</p>
                   <ul className='foot2'>
                   <li><a href="#">Documentation</a></li>
                   <li><a href="#">Licence</a></li>
                   </ul>
              </div>

         </div>  
        
     {/* </div> */}
   
     </div>
</div>
  )
}
