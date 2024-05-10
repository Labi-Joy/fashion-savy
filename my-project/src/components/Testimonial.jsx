export const Testimonial = () => {
  return (
    <>
<div className=" bg-tetiary-color bg-opacity-[10%] p-5 py-10 flex flex-col gap-8">


 <div className="flex flex-col text-center justify-center ">
        <p className=" font-bold  text-2xl text-primary-color poppins-regular">
        Customer Testimonials
        </p>
        <p className="text-xs">
        This is what our users have to say!
        </p>
      </div>

<div className="flex flex-col gap-5">
     
     <div className="grid grid-cols-1 p-3  md:grid-cols-4 gap-4 items-center justify-center">
      <div className="flex flex-col">
         <div className="bg-primary-color col-span-2  text-button-color text-center p-4 rounded-md">
           <p>Finding fashionable clothing in plus sizes can be a challenge, but this website has a fantastic selection! I've purchased several items from their plus-size range and have
         been thrilled with the fit and quality every time.</p>
         </div>
         <p className="text-primary-color font-bold text-center py-3 ">Customer 1</p>
    </div>
    <div>
         <div className="bg-primary-color py-7 col-span-2 text-button-color h-40 text-center p-3 rounded-md">
           <p>Each piece I've ordered has exceeded my expectations, and the little touches like personalized thank you notes make me feel like a valued customer. </p>
         </div>
         <p className="text-primary-color font-bold text-center py-3 ">Customer 2</p>
    </div>
    <div>
         <div className="bg-primary-color h-40 py-10 col-span-2 text-button-color text-center p-3 rounded-md">
           <p>As someone who shops online frequently, I really appreciate how quickly my orders arrive from this website.</p>
         </div>
         <p className="text-primary-color font-bold text-center py-3 ">Customer 3</p>
    </div>
    <div>
         <div className="bg-primary-color h-40 py-8 col-span-2 text-button-color text-center p-3 rounded-md">
           <p>The variety of styles is amazing, and the prices are so affordable. I've ordered multiple times and have never been disappointed. </p>
         </div>
         <p className="text-primary-color font-bold text-center py-3 ">Customer 4</p>
    </div>
    </div>
 
 </div>  
 </div>
 </>
  
 )
}
