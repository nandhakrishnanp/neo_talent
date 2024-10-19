import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import UserSidebar from '../Components/UserSidebar'
import axiosInstance from '../../axiosConfig'
import { current } from '@reduxjs/toolkit'

const PathWay = () => {
    
    const [response,setResponse ] = useState('');
    const [loading,setLoading] = useState(false);
    const [currentUser , setCurrentUser] = useState({});
  const [result , setResult] = useState('');

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
          setResult((prev) => prev + nextWord);
        }, 75 * index);
      };
      const fomateArray = (response) => {
        if (!response) {
          console.error("Invalid response data");
          return;
        }
      
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
          if (i === 0 || i % 2 !== 1) {
            newResponse += responseArray[i];
          } else {
            newResponse += `<b> ${responseArray[i]} </b>`;
          }
        }
      
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
          const nextWord = newResponseArray[i];
          delayPara(i, nextWord + " ");
        }
      
        setIsLoading(false);
      };
      

      const handleAnalyze = async () => {
        setLoading(true); // To show loading state while analyzing
        try {
          const id = localStorage.getItem('empid');
          console.log(id);
      
          // Fetching user data
          const response = await axiosInstance.get(`/api/auth/getemployeebyid/${id}`);
          setCurrentUser(response.data);
          console.log("current user", response.data);
      
          // Posting to AI API
          const resp = await axiosInstance.post("/ai", {
            data: response.data
          });
      
          // Checking if the response contains a result
          if (resp.data && resp.data.result) {
            setResponse(resp.data.result);
            console.log(resp.data.result);
      
            // Format and display the response
            fomateArray(resp.data.result);
          } else {
            console.error('No result found in response:', resp.data);
          }
        } catch (error) {
          console.error('Error during analysis:', error);
        } finally {
          setLoading(false); // End of loading state
        }
      };
      



  return (
    <div>
        <Navbar/>
        <div className=' flex'>

        <UserSidebar/>
        <div className=' w-[80%] flex h-[80vh]  items-center justify-center '>
               <div  className=' text-center'>
               <h1 className=' text-[60px]  font-poppins pt-3 font-semibold '>PathWay <span className=" bg-Primary rounded-md text-white px-1 py1">Ai</span></h1>
               {
                !result ? (
                    <div>
                      <p className=' font-poppins text-accent p-2'>Empowering Growth, Bridging Skill Gaps</p>
                      <button onClick={()=> handleAnalyze()} className=' bg-Primary  duration-100 transition-all   hover:scale-105 px-3 py-2 m-2 text-white font-poppins rounded-md'>Analize My Profile</button>
                    </div>
                    
                ) : (
                    <div>

                    <p className=' font-poppins  text-center text-accent p-2'>Your Profile is Analized</p>
                    <div className="pt-4 p-16" dangerouslySetInnerHTML={{ __html: result }} />
                    </div>
                )
               }
              
               </div>
        </div>
        </div>
        PathWay
    </div>
  )
}

export default PathWay