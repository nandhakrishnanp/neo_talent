import React, { useEffect, useState } from "react";
import SIdebar from "../Components/SIdebar";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects, selectAllProjects } from "../../store/projectSlice";

const Upskill = () => {
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  const allprojects = useSelector(selectAllProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    dispatch(getAllProjects());
    console.log("called");
  }, []);
  const emp = [
    {
      name: "Alice Johnson",
      mainSkill: "Systems Analysis",
      description: "Alice specializes in analyzing and designing IT systems, ensuring optimal performance and alignment with business goals. She excels at identifying system bottlenecks and proposing effective solutions."
    },
    {
      name: "Bob Williams",
      mainSkill: "JavaScript",
      description: "Bob is a front-end development expert with a deep understanding of JavaScript frameworks. He focuses on building responsive and user-friendly interfaces for the helpdesk portal, ensuring smooth user experience."
    },
    {
      name: "Catherine Lee",
      mainSkill: "Node.js",
      description: "Catherine is proficient in server-side programming with Node.js, responsible for building scalable back-end solutions that handle real-time ticket tracking and communication between users and support teams."
    },
    {
      name: "David Kim",
      mainSkill: "MongoDB",
      description: "David is a database management expert specializing in MongoDB. He designs and maintains the database, ensuring secure storage of ticket information and efficient query performance for real-time tracking."
    },
    {
      name: "Ethan Garcia",
      mainSkill: "IT Infrastructure",
      description: "Ethan manages the IT infrastructure, ensuring the availability and reliability of hardware and network components critical for the smooth operation of the helpdesk system. He is the go-to person for resolving complex infrastructure issues."
    }
  ];
  
  useEffect(() => {
    setProjects(allprojects);
  }, [allprojects]);
  return (
    <div>
      <Navbar />
      <div className=" flex  ">
        <SIdebar />
        <div className=" w-[80%]">
          <h1 className="text-2xl font-bold text-gray-700 p-5">
            Skill Gap Analysis
          </h1>

          {!selectedProject ? (
            <div>
              <h2 className="px-4 py-3 text-lg font-poppins text-Primary font-semibold">
                Available Projects
              </h2>
              <div className=" flex gap-6 px-3">
                {projects &&
                  projects.map((project) => (
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="hover:bg-slate-300 cursor-pointer w-[30%] flex-col flex bg-slate-200 rounded-xl p-5   "
                    >
                      <img
                        className=" w-full "
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                      <p className="pt-2 font-poppins font-semibold">
                        {project.projectname}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div>
              {selectedProject && (
                <div>
                  <h2 className="px-4 py-3 text-lg font-poppins text-Primary font-semibold">
                    Project Details
                  </h2>
                  <div className=" bg-slate-200 m-2  p-5">
                    <h1 className="text-xl font-bold font-poppins">
                      {selectedProject.projectname}
                    </h1>
                    <p className="text-gray-500 p-2 font-poppins">
                      {selectedProject.projectdescription}
                    </p>
                    <div className="flex gap-5">
                      <div>
                        <h2 className="text-lg py-3 font-bold font-poppins">
                          Skills Required
                        </h2>
                        {selectedProject && selectedProject.skills ?
                        <div>
                            {selectedProject.skills.map((skill) => (
                                <p className="font-poppins py-2 bg-Primary text-white my-1 p-2  rounded-lg">{skill}</p>
                            ))}

                        </div> :null}
                      </div>
                      <div>
                        <h2 className="text-lg py-3 font-bold font-poppins">
                            Responsibilities
                        </h2>
                        <p className="font-poppins">
                          {selectedProject ?
                            <div>
                                {selectedProject.projectresponsibilities.map((resp) => (
                                <p className="font-poppins py-2 bg-Primary text-white my-1 p-2  rounded-lg">{resp}</p>
                                ))}
                            </div>
                          :null}
                        </p>
                      </div>

                    </div>
                  </div>
                  <h2 className="px-4 py-3 text-lg font-poppins text-Primary font-semibold">
                   Best Fit Employees for this Role
                  </h2>
                    <div>
                        {emp.map((employee) => (
                            <div className="bg-slate-200 p-5 m-2 rounded-lg">
                                <h2 className="text-lg font-bold font-poppins"> Name : {employee.name}</h2>
                                <p className="text-Primary font-poppins"> Role : {employee.mainSkill}</p>
                                <p className="text-gray-500 font-poppins">{employee.description}</p>
                            </div>
                        ))}
                    </div>
                       
                   
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upskill;
