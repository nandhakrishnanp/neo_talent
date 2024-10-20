import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import SIdebar from "../Components/SIdebar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllApplicant } from "../../store/HiringSlice";

const Application = () => {
  let id = useParams().id;
  const allApplication = useSelector(selectAllApplicant);
  const [application, setApplication] = useState(null);
  useEffect(() => {
    setApplication(allApplication.filter((item) => item._id === id));
    console.log(application);
  }, []);
  return (
    <div>
      <Navbar />
      <div className=" flex">
        <SIdebar />
        <div className=" w-[80%] min-h-screen">
          <h2 className="px-4 py-3 text-lg font-poppins text-Primary font-semibold">
            Application Detail :
          </h2>
          {application &&
            application.map((item) => (
              <div className=" py-4 px-4  flex ">
                <div className="bg-gray-200 p-6 rounded-lg ">
                  <h1 className=" font-poppins font-semibold p-2">
                    Name : {item.name}
                  </h1>
                  <h1 className=" font-poppins font-semibold p-2">
                    Email : {item.email}
                  </h1>
                  <h1 className=" font-poppins font-semibold p-2">
                    Mobile Number : {item.mobilenumber}
                  </h1>
                  <h1 className=" font-poppins font-semibold p-2">
                    About : {item.about}
                  </h1>
                  <h1 className=" font-poppins font-semibold p-2">
                    Skills :{" "}
                    {item.skills.map((skill) => (
                      <span className=" bg-Primary text-white p-1 m-1 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </h1>
                </div>
                
                  <div className=" w-1/2">
                    <iframe
                      src={item.ressumeUrl}
                      width="100%"
                      className=" border-none"
                      height="600"
                      allow="autoplay"
                      title="Google Drive PDF Viewer"
                    />
               
                </div>
              </div>
            ))}

<h2 className="px-4 py-3 text-lg font-poppins text-Primary font-semibold">
             Skill Gap Analysis : 
          </h2>
             
           
         

          
        </div>
      </div>
    </div>
  );
};

export default Application;
