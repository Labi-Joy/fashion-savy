import CartHero from '../../assets/savvy assets/ShopPage/CartHero.png'

export const BuyerHero = () => {
  return (
    <div className='bg-tetiary-color bg-opacity-[10%] py-2' >
             <div className='flex bg-tetiary-color justify-between px-4 '>
          <img src={CartHero} alt="" className='w-40 px-1' />
          <div className='py-8 font-semibold text-xl mr-10'>
          <p>Shop your Style</p>
          <p>With ease!</p>
          </div>
          </div>
    </div>
  )
}
