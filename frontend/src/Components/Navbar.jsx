import React, { useEffect, useState } from 'react'
import Icon from './icon'
import bell from '../assets/bell.svg'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectIsHr, selectIsLogin } from '../../store/authSlice'
import logicon from "../assets/logout.svg"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import axiosInstance from '../../axiosConfig'

const Navbar = () => {
    const dispatch =useDispatch();
  const nav =useNavigate()
  const [isPopupOpen,setIsPopupOpen] =useState(false);
  const [notificationMessage, setNotificationMessage] = useState(null);
  const ishr = useSelector(selectIsHr)

    const handleLogout = () => {
        dispatch(logout())
    }
    const isLogin = useSelector(selectIsLogin);
    useEffect(()=>{
        if(!isLogin){
            nav('/login')
        }
    },[isLogin])

    const getNotigication = async () => {
        try {
         
        const id = localStorage.getItem('empid')
        const res = await axiosInstance.get(`/projects/getnotification/${id}`);
            console.log(res.data);
            setNotificationMessage(res.data)
            
          } catch (error) {
            toast.error("Failed to add notification");
          }
    }


    useEffect(()=>{
    
        
       
      if(!ishr){
          getNotigication()
      }
      
    },[])


  return (
    <div> 
         <nav className=' bg-white/100 flex items-center w-full h-16 '>
         {
            isPopupOpen && (
              <div className="fixed  z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 w-96 rounded-lg">
                   <h1 className=' text-Primary font-poppins font-bold'>Notifications</h1>
                     

                     {
                        notificationMessage  && notificationMessage.map((item,index)=>(
                          <div key={index} className='flex flex-col bg-Primary m-1 font-poppins text-white p-3 rounded-md gap-2 '>
                            <h1 >{item.message}</h1>
                            <h1>{item.suggestion}</h1>
                          </div>
                        ))
                     }

                     {
                       !notificationMessage && (
                        <div className=' p-10'>
                            <h1 className=' text-Primary font-poppins  font-bold'> No Notification</h1>
                        </div>
                       )
                     }
                  
                 <button className=' px-2 py-1 ' onClick={()=> setIsPopupOpen(false)}>Cancel</button>
                </div>
              </div>
            )
          }
            <div>
            <Icon/>
            </div>
           <div className=' fixed flex  gap-3 right-3 top-3 '>
            <img onClick={()=>{
                setIsPopupOpen(true)
            }} className='  cursor-pointer transition-all scale-105 duration-150    w-7' src={bell} alt="notification"/>
            <img onClick={()=>{
                toast.success('Logged out successfully')
                handleLogout()
            }} className='  cursor-pointer transition-all scale-105 duration-150  w-7' src={logicon} alt="notification"/>
                
          </div>
        
          </nav>
    </div>
 
  )
}

export default Navbar