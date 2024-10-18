import React, { useEffect } from 'react'
import Icon from './icon'
import bell from '../assets/bell.svg'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectIsLogin } from '../../store/authSlice'
import logicon from "../assets/logout.svg"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
 
const Navbar = () => {
    const dispatch =useDispatch();
  const nav =useNavigate()
    const handleLogout = () => {
        dispatch(logout())
    }
    const isLogin = useSelector(selectIsLogin);
    useEffect(()=>{
        if(!isLogin){
            nav('/login')
        }
    },[isLogin])

  return (
    <div> 
         <nav className=' bg-white/80 flex items-center w-full h-16 '>
            <div>
            <Icon/>
            </div>
           <div className=' fixed flex  gap-3 right-3 top-3 '>
            <img className='  cursor-pointer transition-all scale-105 duration-150    w-7' src={bell} alt="notification"/>
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