export const Shoppers = () => {
  return (
<>

<div className=" bg-button-color p-5 py-10 flex flex-col gap-8">

      <div className="flex flex-col text-center justify-center ">
        <p className=" font-bold text-xl text-primary-color poppins-regular">
        How it Works for Shoppers
        </p>
        <p className="text-xs px-4 py-1">
          Step-by-Step Guide on Using FashionSavvy as a customer/buyer
        </p>
      </div>

<div className="flex flex-col gap-5">
     
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
        <div className="shop1">
          <p>Step 01:</p>
          <p>Browse Catalogue</p>
        </div>

        <div className="shop1">
          <p>Step 02:</p>
          <p>Select Style & Size</p>
        </div>
        <div className="shop1">
          <p>Step 03:</p>
          <p>Add to Cart & Pay</p>
        </div>
        <div className="shop1">
          <p>Step 04:</p>
          <p>Receive Order </p>
        </div>
   </div>

</div>

</div> 



<div className="px-12"><hr /></div>



  <div className="Fashion-designers bg-button-color p-5 py-10 flex flex-col gap-8">
    
      <div className="flex flex-col text-center justify-center ">
        <p className=" font-bold px-1 text-xl text-primary-color poppins-regular">
          How it Works for Fashion Designers
        </p>
        <p className="text-xs px-9 py-1">
          Step-by-Step Guide on Using FashionSavvy as fashion designers/seller
        </p>
      </div>

<div className="flex flex-col gap-5">
     
   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
      
        <div className=" fash fashion">
          <p>Step 01:</p>
          <p>Upload Catalogue</p>
        </div>
      

        <div className="fashion1">
          <p>Step 02:</p>
          <p>Add Style Info & Chart</p>
        </div>
        <div className="fashion2">
          <p>Step 03:</p>
          <p>Sell live on website</p>
        </div>
        <div className="fashion">
          <p>Step 04:</p>
          <p>Receive Payment </p>
        </div>
   </div>

</div>

</div>

</>
  );
};
