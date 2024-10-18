import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Landing from './Features/Landing'
import Login from './Features/Login'
import { ToastContainer } from 'react-toastify'
import Dashboard from './Features/Dashboard'
import Home from './Features/Home'

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
     <Route path="/dashboard" element={<Dashboard/>}/>
     <Route path="/home" element={<Home/>} />
</Routes>
    </>

  )
}

export default App