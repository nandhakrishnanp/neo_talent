import React from "react";
import Navbar from "../Components/Navbar";
import SIdebar from "../Components/SIdebar";

import ReactDOM from 'react-dom/client';

// React Chart Component
import { AgCharts } from 'ag-charts-react';
import { ChartExample } from "../Components/Chart";
const Dashboard = () => {
  return (
    <main className=" bg-gray-100 pb-12">
      <Navbar />
      <div className="flex">
        <SIdebar />
        <div>
          <h1 className="text-2xl font-bold text-gray-700 p-5">Dashboard</h1>

          <div className=" p-3 flex gap-4">
            <h1 className=" bg-Primary font-poppins  text-white rounded-md p-4">
              Total Employees : 12
            </h1>
            <h1 className=" bg-Primary font-poppins  text-white rounded-md p-4">
              Number User Applicants : 23
            </h1>
            <h1 className=" bg-Primary font-poppins  text-white rounded-md p-4">
              Number of Projects: 2
            </h1>
            <h1 className=" bg-Primary font-poppins  text-white rounded-md p-4">
              Full Time Employees: 10
            </h1>
            <h1 className=" bg-Primary font-poppins  text-white rounded-md p-4">
              Part Time Employees: 2
            </h1>
          </div>

          <div className=" flex items-center ">
            <div className=" ">
              <h3 className=" font-poppins  text-lg p-4 text-Primary font-bold">
                Meetings
              </h3>

              <div className=" ">
                <ol className=" flex">
                  <li className=" bg-Primary/95 rounded-md w-[30%] p-4 text-white font-poppins m-2">
                    <p>Meeting With James</p>
                    <p>
                      {" "}
                      <span>Time : 12:00 PM</span>
                    </p>
                    <p>
                      {" "}
                      <span>Agenda : Discussing the new project</span>
                    </p>
                  </li>
                  <li className="bg-Primary/95 rounded-md w-[30%] p-4 text-white font-poppins m-2">
                    <p>HR Meeting</p>
                    <p>
                      <span>Time: 11:00 AM</span>
                    </p>
                    <p>
                      <span>Agenda: Discuss employee onboarding process</span>
                    </p>
                  </li>
                  <li className="bg-Primary/95 rounded-md w-[30%] p-4 text-white font-poppins m-2">
                    <p>Performance Review</p>
                    <p>
                      <span>Time: 2:00 PM</span>
                    </p>
                    <p>
                      <span>
                        Agenda: Evaluating employee performance and feedback
                      </span>
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            
          </div>

          <h1 className="text-xl   font-bold text-Primary p-5">Analysis</h1>
          
          <div className=" flex flex-col items-center justify-center">
                <ChartExample/>
                <h1 className=" text-Primary font-bold font-poppins text-center">Employees Working Hours Vs Day</h1>
            </div>
  
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
