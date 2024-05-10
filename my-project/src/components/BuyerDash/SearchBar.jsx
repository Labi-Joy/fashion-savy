import SearchIcon from '../../assets/savvy assets/ShopPage/SearchIcon.svg'


export const SearchBar = () => {
  return (
    <div className='bg-tetiary-color bg-opacity-[10%]'>

      <div className=' py-8 justify-center flex '> 
      <button className='bg-button-color flex justify-between gap-12 px-2 rounded lg:gap-80 lg:h-12 lg:'>
           <span className='text-xs py-2 text-text-color lg:mt-0.5 lg:text-lg'>Search what you need</span> 
            <img src={SearchIcon} alt="" className='py-2 w-3 mt-0.5 lg:mt-2 lg:w-5' />
        </button>
      </div>
    
        </div>
  )
}


