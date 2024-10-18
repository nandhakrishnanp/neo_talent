import React from 'react'
import icon from '../Assets/icon.png'
const Icon = () => {
  return (
    <div className='flex items-center '>

    <img src={icon} alt="icon" className=' w-[70px] h-18 p-3' />
    <p className=' bg-Primary  px-1   text-white  '>Talent</p>
    </div>
  )
}

export default Icon