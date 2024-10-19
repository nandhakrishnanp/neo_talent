import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllHiring,
  getHiringData,
  addHiring,
} from "../../store/HiringSlice";
import SIdebar from "../Components/SIdebar";
import mail from "../assets/mail.svg";
import axiosInstance from "../../axiosConfig";
import { toast } from "react-toastify";


const Hire = () => {
  const dispatch = useDispatch();
  const allHirings = useSelector(selectAllHiring);
  const [isOpen, setIsOpen] = useState(false);

  //   {
  //     "applicantId": "12345",
  //     "name": "Mark",
  //     "jobId": "job-001",
  //     "status": "Ongoing" ,
  //     "email":"nandhakrishnandev@gmail.com"
  // }
  const [name, setName] = useState("");
  const [jobId, setJobId] = useState("");
  const [email, setEmail] = useState("");
  const [issendmail, setIssendmail] = useState(false);

  const sendMail = async (email) => {
    if(email && jobId){
        let userId = Math.floor(Math.random() * 100000);
        const response = await axiosInstance.post("/email", {
             email,
             jobId,
             userId
        });
     
     if (response) {
         toast.success("Mail Sent Successfully");
     }
     else {
         toast.error("Mail not sent");
     }
    }
    else{
        toast.error("Please fill the email field")
    }
    

  }
  
  useEffect(() => {
    dispatch(getHiringData());
  }, [allHirings]);

  return (
    <div className="">
      <Navbar />
      <div>
        <div className="flex ">
          <SIdebar />
          <div>
            {issendmail && (
              <div className=" rounded-xl  flex flex-col items-center justify-center fixed top-[30%] left-[30%]  backdrop-blur-xl  z-40 w-1/2  h-1/2 bg-Primary">
                <h1 className=" text-white font-poppins text-xl capitalize p-3">
                  Confirm to send the Details requesting Mail to the Candidate{" "}
                </h1>
                <button
                  type="submit"
                  onClick={() => {
                    setIssendmail(false);
                    sendMail(email);
                   
                  }}
                  className="bg-slate-50 w-1/2 mt-2  text-Primary font-poppins font-bold p-2 rounded-lg m-2"
                >
                  Send
                </button>
                <button
                  onClick={() => {
                    setIssendmail(false);
                  }}
                  className="bg-slate-50  text-Primary font-poppins font-bold w-1/2 p-2 rounded-lg m-2"
                >
                  Cancel
                </button>
              </div>
            )}
            {isOpen && (
              <div className=" rounded-xl  fixed top-[30%] left-[30%]  backdrop-blur-xl  z-40 w-1/2  bg-purple-400/80">
                <h1 className=" text-center  text-white p-4 text-xl font-poppins font-bold ">
                  Add Your Candidate
                </h1>

                <div className="flex flex-col p-4">
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 rounded-lg m-2"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Job ID"
                    value={jobId}
                    onChange={(e) => setJobId(e.target.value)}
                    className="p-2 rounded-lg m-2"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 rounded-lg m-2"
                  />
                  <button
                    type="submit"
                    onClick={() => {
                      let applicantId = Math.floor(Math.random() * 100000);
                      let status = "Ongoing";
                      dispatch(
                        addHiring({ applicantId, name, jobId, status, email })
                      );
                      setIsOpen(false);
                    }}
                    className="bg-Primary text-white p-2 rounded-lg m-2"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-200 text-Primary p-2 rounded-lg m-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
            <h1 className="text-2xl font-bold text-gray-700 p-5">Hire</h1>

            <div className=" flex items-center ">
              <h2 className="px-4 py-3 text-lg font-poppins text-Primary font-semibold">
                Available Candidates
              </h2>
              <div className=" ">
                <button
                  onClick={() => {setIsOpen(true)
                    setEmail("")
                    setJobId("")
                  }}
                  className=" bg-Primary text-white font-poppins px-2 py-1 rounded-lg"
                >
                  Create New{" "}
                </button>
              </div>
            </div>

            <div className=" flex gap-2 flex-wrap w-full pt-0 ">
              {allHirings.map((hiring) => (
                <div className="bg-slate-200 p-5 min-w-[40%] m-2 rounded-lg ring-1 ring-black ">
                  <p className="text-lg  font-bold  font-poppins">
                    Name : {hiring.name}
                  </p>
                  <p className="font-poppins  text-accent text-sm">
                    {hiring.email}
                  </p>
                  <div className=" flex gap-3 mt-2">
                    <p className="  bg-secondary px-2 my-1 font-poppins w-fit py-1 rounded-full">
                      {hiring.status}
                    </p>
                    <img
                      onClick={() => {
                        setEmail(hiring.email);
                        setJobId(hiring.jobId);
                        setIssendmail(true)
                    }
                    }
                      className=" cursor-pointer w-7"
                      src={mail}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
