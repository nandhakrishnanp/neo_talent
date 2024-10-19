import React, { useEffect, useState } from "react";
import skill from "../assets/skill.svg";
import emplogo from "../assets/emp.svg";
import Dash from "../assets/Dash.svg";
import { useNavigate } from "react-router-dom";
import hire from "../assets/hire.svg"
const SIdebar = () => {
    const nav = useNavigate();
     
    const [current ,setCurrent] = useState("");
       
    useEffect(()=>{
         
    },[])
  return (
    <div className=" z-40 min-h-screen w-[20%] pt-4  bg-slate-50 me-2">
      <div className=" flex flex-col items-start">
        <div  onClick={()=>{setCurrent("Dashboard")
            nav('/dashboard')
        }} className={ `flex items-center justify-start py-3   cursor-pointer ${ current=="Dashboard" ? "bg-Primary/15" :""}  transition-all duration-150  hover:bg-Primary/15 rounded-lg  w-full px-4`}>
          <img src={Dash} className=" w-6 mx-2 " alt="" />
          <h1 className="text-lg  font-poppins text-accent text-center ps-2">
            Dashboard
          </h1>
        </div>
        <div onClick={()=>{ setCurrent("Employees")
            nav('/employees')
        }} className={ `flex items-center py-3 cursor-pointer  transition-all duration-150 ${ current=="Employees" ? "bg-Primary/15" :"" }   hover:bg-Primary/15 rounded-lg justify-start w-full px-4`}>
          <img src={emplogo} className=" w-8 mx-2 " alt="" />
          <h1 className="text-lg  font-poppins text-accent text-center">
            Employees
          </h1>
        </div>
        <div onClick={()=>{setCurrent("Upskill")
            nav('/upskill')
        }} className={` flex items-center py-3 cursor-pointer  transition-all duration-150 ${ current=="Upskill" ? "bg-Primary/15" :"" }   hover:bg-Primary/15 rounded-lg justify-start w-full px-4`}>
          <img src={skill} className=" w-6 mx-2 " alt="" />

          <h1 className="text-lg  font-poppins text-accent text-center ps-2">
            Upskill
          </h1>
        </div>
        <div onClick={()=>{setCurrent("Hire")
            nav('/hire')
        }} className={` flex items-center py-3 cursor-pointer  transition-all duration-150 ${ current=="Hire" ? "bg-Primary/15" :"" }   hover:bg-Primary/15 rounded-lg justify-start w-full px-4`}>
          <img src={hire} className=" w-8 mx-2 " alt="" />

          <h1 className="text-lg  font-poppins text-accent text-center ps-2">
            Hire
          </h1>
        </div>
        
        
      </div>
    </div>
  );
};

export default SIdebar;
