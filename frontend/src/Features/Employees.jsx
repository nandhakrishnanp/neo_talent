import React, { useEffect, useState } from "react";
import SIdebar from "../Components/SIdebar";
import Navbar from "../Components/Navbar";
import {
  getAllEmployeesData,
  selectAllEmployees,
} from "../../store/employeeSlice";

import { useDispatch, useSelector } from "react-redux";
import { all } from "axios";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const dispatch = useDispatch();
  const [AllEmployess, setAllEmployee] = useState([]);
  const [Search, setSearch] = useState(""); 
  const nav =useNavigate();
  const allEmployess = useSelector(selectAllEmployees);
  useEffect(() => {
    dispatch(getAllEmployeesData());
  }, []);
  useEffect(()=>{
       
    if(Search === ""){
        setAllEmployee(allEmployess);
    }
    else{
        const filtered = allEmployess.filter((employee)=>{
            return employee.skills.includes(Search);
        })
        setAllEmployee(filtered);
    }
  },[Search])

  useEffect(() => {
    setAllEmployee(allEmployess);
  }, [allEmployess]);

  return (
    <div className=" h-screen  text-xl   ">
      <Navbar />
      <div className=" flex ">
        <SIdebar />
        <div className=" w-[80%]">
          <h1 className=" ps-5 text-xl font-semibold  font-poppins  ">
            {" "}
            Available Employees :{" "}
          </h1>
          
            <div className=" my-2">
                <input value={Search} onChange={(e)=>{
                    setSearch(e.target.value);
                }} placeholder="Search By Skills" className=" ring-1 ring-Primary h-8 w-1/3 p-3 placeholder:text-md rounded-lg ms-3 my-2" type="text" />
            </div>
           
          <div className=" flex gap-4 flex-wrap justify-evenly pt-3">
            {AllEmployess &&
              AllEmployess.map((employee) => {
                return (
                  <div className=" hover:ring-1 hover:ring-Primary bg-gray-100 w-[30%] p-7 rounded-lg shadow-sm cursor-pointer">
                    <div className="flex items-center  gap-2">
                      <img
                        src={employee.profileurl}
                        className=" w-16 rounded-full"
                        alt=""
                      />
                      <div>
                        <h1 className=" fonr-bold font-poppins  text-accent">
                          {employee.name}
                        </h1>

                        <p className=" font-poppins  font-fold text-Primary text-sm">
                          {" "}
                          Role:{" "}
                          <span className=" text-accent">
                            {employee.position}
                          </span>
                        </p>


                      </div>
                 

                    </div>
                    <div className=" flex items-center justify-center">
                    <button onClick={()=>{
                        nav(`/profile/${employee._id}`)
                    }} className=" bg-Primary rounded-md text-md font-poppins p-2  w-1/2 m-2 py-1 text-white   duration-100 hover:scale-105 transition-all ">View Profile</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
