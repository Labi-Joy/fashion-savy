import Checkmark from '../../assets/savvy assets/CartPage/Checkmark.svg'


const CheckoutProps = ({formTitle, labelName, placeholderName, firstEdit, edit}) => {
    return (
        <div className="">
             <p className="text-xl font-bold py-5">{formTitle}</p>
             <form action="" className="py-3">
                <div className={firstEdit}>
                  <label htmlFor="" className="font-bold" >{labelName}</label> <br />
                  <div className="py-2"><input type="text" name="" id="" placeholder={placeholderName} className={edit} /></div>
                </div>
             </form>
        </div>
    )
}


export const CheckOutForm = () => {
  return (
    <div className="hidden lg:block px-16 py-10">
        <div className="py-3 ">
           <h1 className="text-4xl font-bold py-3">Checkout</h1>
           <div>
              <p className="text-xl font-bold py-5">Customer Email</p>
              <form action="" className="py-3">
                <label htmlFor="" >Email Address</label> <br />
                <div className="py-2"><input type="text" name="" id="" placeholder="Enter address" className="border rounded-md py-1 w-[900px] px-4 h-12" /></div>
              </form>
              <div className="mt-[-15px]"><p>Already have an account? <span><a href="">Sign in</a></span></p></div>
           </div>
        </div>
        
      <div className="flex justify-between">
    
        <CheckoutProps formTitle="Shipping Address" labelName="First Name" placeholderName="First name" edit="border border:0.5 rounded-md py-1 w-[440px] px-4 h-12" />
        <CheckoutProps  firstEdit="pt-7"  labelName="First Name" placeholderName="First name" edit="border border:0.5 rounded-md py-1 w-[440px] px-4 h-12 mr-[250px]" />
      </div>

        <CheckoutProps labelName="Address Line" placeholderName="Address line" edit="border border:0.5 rounded-md py-1 w-[900px] px-4 h-40"  />
        <CheckoutProps labelName="Country" placeholderName="Nigeria" edit="border border:0.5 rounded-md py-1 w-[900px] px-4 h-12" />
    
     <div className="flex justify-between">
    
        <CheckoutProps labelName="Postal Code" placeholderName="Postal code" edit="border border:0.5 rounded-md py-1 w-[440px] px-4 h-12" />
        <CheckoutProps  labelName="Phone Number" placeholderName="Phone code" edit="border border:0.5 rounded-md py-1 w-[440px] px-4 h-12 mr-[250px]" />
      </div>

      <div className='py-10'>
        <p className='text-2xl font-bold'>Billing Address</p>
        <div className='flex items-center py-10'><img src={Checkmark} alt="" className='w-8' /><p className='text-xl ml-4 font-semibold'>Same as shipping address</p></div>
        <button className='py-3 bg-tetiary-color w-[900px] rounded-lg font-bold'>Continue</button>
      </div>
   
    </div>
  )
}
