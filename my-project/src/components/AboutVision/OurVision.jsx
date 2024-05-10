import Map from '../../assets/savvy assets/AboutUsPage/Map.png'

export const OurVision = () => {
  return (
    <div className="py-10">
      
        <div className="py-10 text-center px-5 bg-tetiary-color lg:flex lg:px-20 lg:py-4 lg:items-centern md:px-12" >
          <div className='lg:text-left lg:py-20'>
            <p className="text-primary-color font-semibold text-3xl lg:6xl lg:font-bold ">Our Vision</p> 
            <p className="py-5 lg:text-[10px] md:">To help small fashion businesses tackle their challenges in managing customer details, measurements, and paperwork. Our website makes it easy for you to keep track of everything, from booking orders to generating invoices. With our catalogue of outfit sketches and easy payment options, your customers will love shopping with you. Plus, we make sure orders are right and offer a feedback system to keep improving. Partnering with a delivery company means your clothes get to your customers hassle-free. Say hello to a simpler way of running your fashion business with FashionSavvy!</p>
            </div>
            <img src={Map} alt="" className='hidden lg:block lg:py-3 lg:px-8 md:block md:p-20' />
        </div>
        
      
    </div>
  )
}
