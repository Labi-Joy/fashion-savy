import Logo from '../assets/Logo.svg'
// import arrow-right from '../../assets/savvy assets/HomePage/arrow-right.svg'


export const AboutUs = () => {
  return (
    <div>
      <div className="py-4 px-5 flex justify-between bg-text-tetiary-color">
       
       <div className='bg-tetiary-color bg-opacity-10'>
        <div className=' p-3 '>   
       <img className='w-40 bg-button-color rounded-lg' src={Logo} alt="" />
       <p className='text-xs font-semibold mt-3'>Read More </p>
       {/* <img src="arrow-right" alt="" /> */}
       </div>
       </div>

        <div className='font-bold text-primary-color px-1 py-7' >
        <h1 className=''>About Us</h1>
        <p className='mt-3 text-xl'>FashionSavvy</p>
        <p className='text-xl'>helps make</p>
        <p className='text-xl'>business easier!</p>
        </div>

      </div>
    </div>
  );
};
