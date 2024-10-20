import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosConfig";
import { toast } from "react-toastify";

import { useParams } from "react-router-dom";

const Form = () => {
    const { jobid , userId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [mobilenumber, setMobilenumber] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [ressumeUrl, setRessumeUrl] = useState("");
  
  const [Sucess , setSucess] = useState(false);

  const handleAddSkill = () => {
    if (skillInput.trim()) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/jobs/postApplicant", {
        name,
        email,
        jobId:jobid,
        userId:userId,
        mobilenumber,
        about,
        skills,
        ressumeUrl,
      });
      toast.success("Data Submitted Successfully");
      setSucess(true);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-Primary">
      {
        Sucess ? <div className=" flex flex-col items-center justify-center ">
          <img className=" w-16" src="https://static.vecteezy.com/system/resources/thumbnails/009/664/305/small_2x/tick-icon-transparent-free-png.png" alt="" />
           
           <h1 className="text-3xl font-poppins font-bold text-white "> 
          Details Submitted Sucess Fully</h1>
             
        </div> :  <div className=" ">
        <h1 className="text-3xl font-poppins font-bold text-white">
          Provide Your Details
        </h1>

        <form className="flex flex-col space-y-3 mt-5" onSubmit={handleSubmit}>
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
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-lg m-2"
          />
          <input
            required
            type="text"
            placeholder="Mobile Number"
            value={mobilenumber}
            onChange={(e) => setMobilenumber(e.target.value)}
            className="p-2 rounded-lg m-2"
          />
          <input
            required
            type="text"
            placeholder="About"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="p-2 rounded-lg m-2"
          />

          
          <div className="flex items-center">
            <input
           
              type="text"
              placeholder="Add a Skill"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className="p-2 rounded-lg m-2"
            /> 
            <button
              type="button"
              onClick={handleAddSkill}
              className="bg-white text-Primary font-bold px-4 py-2 rounded-lg"
            >
              Add Skill
            </button>
          </div>

          {/* Display list of added skills */}
          {skills.length > 0 && (
            <ul className="text-white list-disc ml-6">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          )}

          <input
            required
            type="text"
            placeholder="Resume URL"
            value={ressumeUrl}
            onChange={(e) => setRessumeUrl(e.target.value)}
            className="p-2 rounded-lg m-2"
          />
          <p className="text-white capitalize">
            Please upload your resume in Google Drive and paste the link.
          </p>

          <div className="text-center">
            <button
              type="submit"
              className="bg-slate-50 w-1/2 mt-2 text-center text-Primary font-poppins font-bold p-2 rounded-lg m-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      }
     
    </main>
  );
};

export default Form;
