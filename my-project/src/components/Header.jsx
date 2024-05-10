import HeaderLogo from '../assets/savvy assets/HomePage/HeaderLogo.svg'
import menu from '../assets/menu.svg'
import right from '../assets/savvy assets/ProductDetailPage/right.png'
export const Header = () => {
  return (
    < div className='p-5 text-primary-color bg-button-color '>
            <div className='flex justify-between gap-20'>
              {/* <p className='hidden lg:block lg:py-5'>FashionSavvy</p> */}
                 <img className='w-20 px-1 lg:ml-10' src={HeaderLogo} alt="" />

                        <nav className='hidden lg:block  lg:items-center lg:py-7 lg:ml-40'>
                        <ul className='hidden lg:flex lg:flex-row lg:justify-around lg:gap-10 lg:font-semibold'>
                        {/* <ul className=' flex flex-col justify-between gap-8 p-5 top-[-100%]'> */}
                        <li><a href="#" className='lg:hover:opacity-60'>Home</a></li>
                        <li><a href="#" className='lg:hover:opacity-60 lg:flex lg:items-center lg:gap-2'>Shop <img src={right} alt="" className='lg:rotate-90'/></a></li>
                        <li><a href="#" className='lg:hover:opacity-60'>Account</a></li>
                        <li><a href="#" className='lg:hover:opacity-60 lg:flex lg:items-center lg:gap-2'>AboutUs <img src={right} alt="" className='lg:rotate-90'/></a></li>
                        <li><a href="#" className='lg:hover:opacity-60'>Support</a></li>
                        </ul>
                        </nav>
                  <div className='justify-between gap-4 flex px-14 '>
                       <div className='py-4 lg:px-12 '><button className=' rounded-lg border-2 border-tetiary-color  h-8 lg:border-[#a5a4a4] lg:w-40 lg:h-12'> <span className=' font-bold p-5'>Cart</span> </button> </div> 
                       <img className='w-7 text-primary-color lg:hidden' src={menu} alt="" /> 
                       
                  </div>
            </div>  
                
    </div>
  )
}
