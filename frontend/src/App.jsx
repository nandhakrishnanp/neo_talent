import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Landing from './Features/Landing'
import Login from './Features/Login'
import { ToastContainer } from 'react-toastify'
import Dashboard from './Features/Dashboard'
import Home from './Features/Home'
import Employees from './Features/Employees'
import Profile from './Components/Profile'
import PathWay from './Features/PathWay'
import Upskill from './Features/Upskill'
import Hire from './Features/Hire'
import Form from './Features/Form'
import Application from './Features/Application'
import Analysis from './Components/Analysis'

const App = () => {
  return (
    <>
     <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={2}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Slide
      />
    <Routes>
     <Route path="/" element={<Landing/>}/>
     <Route path="/login" element={<Login/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/employees' element={<Employees/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
      <Route path="/pathway" element={<PathWay/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/upskill" element={<Upskill/>}/>
      <Route path="/hire" element={<Hire/>}/>
       <Route path="/apply/:jobid/:userId" element={<Form/>}/>
       <Route path="/Application/:id" element={<Application/>}/>
       <Route path="/analysis" element={<Analysis/>}/>
      <Route path="*" element={<div className=' w-full h-screen bg-purple-800 flex text-white  items-center justify-center'><h1 className=' text-4xl'>404 Not Found</h1></div>} />
       
</Routes>
    </>

  )
}

export default App