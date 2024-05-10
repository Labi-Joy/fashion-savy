import FooterPic from '../../assets/FooterPic.png';


export const FooterTop = () => {
  return (
    <div className="bg-tetiary-color p-10">

       <div className=' lg:flex lg:justify-around lg:gap-9 lg:items-center lg:px-10'>

            <div><img src={FooterPic} alt="" className='hidden lg:block lg:w-80 lg:mt-6 md:block md:w-60 ' /></div>
           
            <div className='flex flex-col justify-between gap-5  lg: '>
                <h1 className=" lg:text-2xl lg:w-1/2 lg:break-all  lg:text-left lg:font-bold md:w-1/2 md:text-left flex text-center font-bold text-primary-color poppins-regular text-xl">
                     Build a strong online presence, enhanced brand reputation, and
                     sustainable growth
                </h1>
               <button className='rounded-md bg-button-color p-3 lg:w-40 md:w-40 '> <span className="font-bold"><a href="#">Signup Now</a></span></button>
            </div>

        </div>
     </div>
  );
};

