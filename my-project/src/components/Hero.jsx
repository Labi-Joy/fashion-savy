import Herobg from '../assets/savvy assets/HomePage/Herobg.png'

export const Hero = () => {
  return (
    <div className="p-5 py-10 justify-between gap-10  bg-tetiary-color bg-opacity-[10%]  bg-button-Color grid grid-cols-2">
    <div>
      <div>
      <hr className="bg-tetiary-color w-12 h-3"/>
       <div className="text-2xl font-bold py-3 text-primary-color">
        <h1>Discover Your</h1>
        <h1>Style With</h1> 
        <h1>FashionSavvy</h1>
        </div>
        {/* <div className='text-xs grid grid-cols-1 py-2 text-primary-color'>
          <p><span></span>Attract Customers</p>
          <p><span></span>Drive Sales</p>
          <p><span></span>Tracking Customer Details</p>
          <p><span></span>Stay Organized</p>
        </div> */}

        <form action="" className='py-2'>
          <div className='flex justify-between gap-1'>
          <label htmlFor="" className='font-lighter text-xs mt-2'>Insert email</label>
          {/* <button className=' ml-2'><span className="text-xs px-2 py-1 rounded-lg font-semibold bg-tetiary-color">
            Shop Now</span> </button> */}
          </div>
          <input type="text" className='mt-2'/>
        </form>
        
    </div>


      </div>
      <img className='w-30 h-40' src={Herobg} alt="" />
      
    </div>
  )
}
