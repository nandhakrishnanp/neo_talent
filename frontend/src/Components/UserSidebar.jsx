import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserSidebar = () => {
  const nav = useNavigate();
  return (
    <div className="  z-40 min-h-screen w-[20%] pt-4  bg-slate-50 me-2">
      <div onClick={()=> { 
        nav("/home")
      }} className="  py-2 px-3 hover:bg-Primary/15  m-1 rounded-lg   cursor-pointer font-poppins ">
        My Profile
      </div>
      <div
       onClick={ ()=>{
        nav("/pathway")
       }}
        className="  py-2 px-3 hover:bg-Primary/15  m-1 rounded-lg   cursor-pointer font-poppins "
      >
        PathWay <span className=" bg-Primary text-white px-1 py1">Ai</span>
      </div>
    </div>
  );
};

export default UserSidebar;
