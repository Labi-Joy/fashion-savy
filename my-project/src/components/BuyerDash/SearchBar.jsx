import SearchIcon from '../../assets/savvy assets/ShopPage/SearchIcon.svg'


export const SearchBar = () => {
  return (
    <div className='bg-tetiary-color bg-opacity-[10%]'>

      <div className=' py-8 flex  ml-20 lg:px-[300px] lg:ml-20'> 
      <input type="text" placeholder='Search' className='py-1 px-5 text-sm w-60 lg:py-3 lg:w-[500px] lg:text-lg' />
      <img src={SearchIcon}alt='' className='ml-[-35px] w-5' />
      </div>
    
        </div>
  )
}


