import Outfit1 from '../assets/savvy assets/HomePage/Outfit1.png'
import Outfit2 from '../assets/savvy assets/HomePage/Outfit2.png'
import Outfit3 from '../assets/savvy assets/HomePage/Outfit3.png'
import Outfit4 from '../assets/savvy assets/HomePage/Outfit4.png'
import Outfit5 from '../assets/savvy assets/HomePage/Outfit5.png'
import Outfit6 from '../assets/savvy assets/HomePage/Outfit6.png'

export const Collection = () => {
  return (
    <div className='grid grid-cols-2 p-5 gap-6 py-8'>
       <div><img src={Outfit1} alt="" /> <div className='leading-5 px-7 py-2 font-semibold text-primary-color'>
       <p>Asante Beach</p> <p className='px-0.5'>Ladies' Wear</p></div></div> 
       <div><img src={Outfit2} alt="" /> <div className='leading-5 px-7 py-2 font-semibold text-primary-color'>
       <p>Amara Green</p> <p className='px-0.5'>Cozy Jacket</p></div></div> 
       <div><img src={Outfit3} alt="" /> <div className='leading-5 px-2 py-2 font-semibold text-primary-color'>
       <p className='px-4' >Complete Black</p> <p className='px-9'>Men Suit</p></div></div> 
       <div><img src={Outfit4} alt="" /> <div className='leading-5 px-7 py-2 font-semibold text-primary-color'>
       <p>Men's Agbada</p> <p className='px-0.5'>Complete Set</p></div></div> 
       <div><img src={Outfit5} alt="" /> <div className='leading-5 px-2 py-2 font-semibold text-primary-color'>
       <p className='px-3'>Ankara Backless</p> <p className='px-7'>Max Gown</p></div></div> 
       <div><img src={Outfit6} alt="" /> <div className='leading-5 px-2 py-2 font-semibold text-primary-color'>
       <p className='px-1'>Couple Traditional</p> <p className='px-12'>Wear</p></div></div> 

    </div>
  )
}
