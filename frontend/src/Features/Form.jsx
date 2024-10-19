
import React, { useState } from 'react'

const Form = () => {
    // {
    //     "name": "John Doe",
    //     "jobId": "607f1f77bcf86cd799439011",
    //     "email": "john.doe@example.com",
    //     "mobilenumber": 9876543210,
    //     "about": "A highly motivated software developer with 3 years of experience in full-stack development.",
    //     "skills": ["JavaScript", "Node.js", "MongoDB", "React"],
    //     "ressumeUrl": "https://example.com/resume/johndoe.pdf",
    //     "date": "2024-10-19T10:20:30Z"
    //   }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [jobId, setJobId] = useState("");
    const [mobilenumber, setMobilenumber] = useState("");
    const [about, setAbout] = useState("");
    const [skills, setSkills] = useState([]);
    const [ressumeUrl, setRessumeUrl] = useState("");
      
  return (
    <main className=' w-full min-h-screen flex items-center justify-center  bg-Primary'>
            <div className=' '>
                 <h1 className=' text-3xl font-poppins font-bold text-white'>Provide Your Details</h1>

                    <form className='   flex flex-col space-y-3 mt-5'>
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
                        <input
                            required
                            type="text"
                            placeholder="Skills"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            className="p-2 rounded-lg m-2"
                        />
                        <input
                            required
                            type="text"
                            placeholder="Resume URL"
                            value={ressumeUrl}
                            onChange={(e) => setRessumeUrl(e.target.value)}
                            className="p-2 rounded-lg m-2"
                        />
                        <p  className=' text-white capitalize'>please Upload your Ressume in Gdrive and paste the Link</p>
                        <div className='text-center'>
                        <button
                            type="submit"
                            className="bg-slate-50 w-1/2 mt-2  text-center text-Primary font-poppins font-bold p-2 rounded-lg m-2"
                        >
                            Submit 
                        </button>
                        </div>
                       
                    </form>


            </div>
    </main>
  )
}

export default Form