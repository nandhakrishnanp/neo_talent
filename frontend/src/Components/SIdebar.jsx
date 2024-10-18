
import React from 'react'

const SIdebar = () => {
  return (
     <div className=' min-h-screen w-[25%] bg-white'>
         <div  className=' flex flex-col items-start'>
             
             <div className=' flex items-center py-3 cursor-pointer  transition-all duration-150  hover:bg-Primary/15 rounded-lg justify-center w-full px-4'>
                    <h1 className='text-lg  font-poppins text-accent text-center'>Dashboard</h1>
             </div>
             <div className=' flex items-center py-3 cursor-pointer  transition-all duration-150  hover:bg-Primary/15 rounded-lg justify-center w-full px-4'>
                    <h1 className='text-lg  font-poppins text-accent text-center'>Employees</h1>
             </div>
             <div className=' flex items-center py-3 cursor-pointer  transition-all duration-150  hover:bg-Primary/15 rounded-lg justify-center w-full px-4'>
                    <h1 className='text-lg  font-poppins text-accent text-center'>Upskill</h1>
             </div>
        </div>  
     </div>
  )
}

export default SIdebar