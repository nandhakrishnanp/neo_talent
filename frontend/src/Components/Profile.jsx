import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SIdebar from "./SIdebar";
import { useSelector } from "react-redux";
import { selectAllEmployees } from "../../store/employeeSlice";
import { useParams } from "react-router-dom";
import bell from "../assets/bellplus.svg"
import axiosInstance from "../../axiosConfig";
import { toast } from "react-toastify";

const Profile = () => {
  const { id } = useParams();
  const [currentEmployee, setCurrentEmployee] = useState({});

  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup
  const [notificationMessage, setNotificationMessage] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const allEmployess = useSelector(selectAllEmployees);

  const handleNotificationSubmit = async () => {
    try {
      const res = await axiosInstance.post("/projects/addnotification", {
        userId: id,
        message: notificationMessage,
        suggestion: suggestion,
      });
      if (res.status === 200) {
        toast.success("Notification added successfully");
        setIsPopupOpen(false); // Close popup after submission
      }
    } catch (error) {
      toast.error("Failed to add notification");
    }
  };
  useEffect(() => {
    console.log(id);
    const employee = allEmployess.find((employee) => employee._id === id);
    setCurrentEmployee(employee);
  }, []);

  return (
    <div className=" h-screen  text-xl   ">
      <Navbar />
      <div className=" flex ">
        <SIdebar />
        <div className=" w-[80%]">
          {
            isPopupOpen && (
              <div className="fixed  z-40 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 w-96 rounded-lg">
                  <input
                    type="text"
                    placeholder="Enter Notification Message"
                    value={notificationMessage}
                    onChange={(e) => setNotificationMessage(e.target.value)}
                    className="w-full p-2 border-2 border-gray-300 rounded-lg mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter Suggestion"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    className="w-full p-2 border-2 border-gray-300 rounded-lg mb-2"
                  />

                  <div className=" flex gap-4">
                  <button
                    onClick={handleNotificationSubmit}
                    className="bg-Primary text-white p-2 rounded-lg"
                  >
                    Submit
                  </button>
                  <button
                   onClick={()=>setIsPopupOpen(false)}
                    className="bg-Primary text-white p-2 rounded-lg"
                  >
                    Cancel
                  </button>
                  </div>
                 
                </div>
              </div>
            )
          }
          <h1 className=" ps-5 text-xl font-semibold  font-poppins  ">
            {" "}
            Profile{" "}
          </h1>

          {currentEmployee && (
            <div>
              <div className=" rounded-lg">
                <img
                  className=" w-[90%] h-[200px] p-4 rounded-3xl"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8QDw8PDw8PDw8NEA8PDw8PFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFy0dHR0tLS0tKy0tLS0tLS0tLS0tLS0tLSstLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLf/AABEIAIEBhQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAYFB//EADMQAQEAAQMBBAkDAgcAAAAAAAABAgMR8CESMUFRBGFxgZGhsdHxE8HhBTIiJEJicoLi/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQGBf/EAB8RAQEBAQEAAwADAQAAAAAAAAABAhEDITFREhNBBP/aAAwDAQACEQMRAD8A/FrU7nSfW1CjcbgJXJhuN6QJYKt6ctSN2FXa9Y7V80huirtXzHaqTbrK7V8x2r5pVGE5ae5A0ZW439ZA0FW/rOWpijSDFbjtXzSahlS090nDMrc5UxUPBVju1x6JxmynTjPFMxW57phxWHVucqY20dG3r3RXGbq8hpOlhLe506elt39arHGTpFO/z8Jn5vzVs44D3ILKHuNyMWG57kGE9xuAzcA3AYeDcUG3G4jc9zsIOBw5aBAIvK0lZE8pqPPwiMkbBACajoT3IBO0TBBuiZwSKNIwhgGEGQETVIUM8gwwAYxmQg9bqocTFQ0ZUaYzZOEW6fOf6pmKNMOLxRUMnZoaG3XLv8vJby87u8hs5t+k6Gh45fB0g31PPzmJyOnOZAAFDAA2YAGwgA2EjAEQDDMQMMJDYwzcKA9gHA48rklWSLXmNR53oK0E5tD0EZI2D0EYmKVnRhRcxOQxmRAAOJgjkYQojPIIMjMYGQbrdM4RjGOLwhYxa2M/7TyKioiKjoh1RUTHZoaW3W9/0dHl53d5FMzqvR9Hbre/6OiIio+r55mJyOnM59GZQ1TgAxYBetpZYSXPG4zKb49qWXKecnjPW5ctfy+5Nemc/da6k+3QLZ42T21yXO3vvPYJ7/dJEv7/AMhf7Px1duec+JzKec+Mc039fyP4/IZ7X8GbrqDnl53NJnfH5/dSekpptoZY5T8qUnypCBgR4QMM3CBhm48ll3kvKdU2PN7w8v1JK2HZc+sGQJi0mJp3y/TRExMyJc8MQASomBsbSGGxkZhAAETEBMxmkwA3dfQctPSw1tT/AAzV3ujhf7tTGXb9Tbww3lkvjZdu6q/pM0cMv1vSMf1McOuGhvZ+tn4TKzu0533xvdO/eR/UPTtT0jVz1tXLtZ52b7SSSSbY44ydMcZJJJOkki+M8+apJxjuIUNSGVDiY6tHT263v+i/nm6p8zrTQ09ut7/o3lZSrlfT85MzkdGfhpDlRKqV0SqRcVGdyk63ow1PSL3Y9J5+La9s4ny13M/bqy1Mcf7r7p1rq0v69+jNvRtHDTz8dfUk1df/AKbzs4e6b+t8Y5z8uT09r6fH1EtelrXW1s9TK56mWWeeV3yyztyyyvnU88/kXPL5HOeELAiueRz3fOlJyT7qnv8AjFYeHJ7PhVT3fQpzqqe/5HkPIfPM5zb7FOeCueVUhpBOeTTHLn2Tz1nz1KT4NGsCJ0aSqy9Vl6QMGNwgYBuPK5Yl2Wtia+XvyeUiNi2Wlzbxw0SSicu8niQew2Q1g0TsZkncmgABBAAYTALcO8Y9wQKyjxKKh8wZF27gjixzhwo308dvarjP8jSdXpYbdb3/AEaxnKuO/HMzkWjSKlZyri+apK0hZ6sx9vkx1NbbpO/zY7hv/o58ZC+n4vLO5d/wETFRz9tvamqHOfkuciopDQ5zwVJyfyU5+VTnipDw5zraqTmxc8Ic51qsPFTnQ57voU51q57/AKqQ8Pnmc54wpzboqc8KpDw+epUnPH+SnP5itufY8hpBOfwcHOes9jQ0ioCi1IpEgzYePK7ilTmTk1OvISpGy0uXeFInYlUnLvJ4klUnPqGIjJz6gkAErDAArSW8YbgAjGcKKhpBhwyOKwxnCjTDHZTM6aLwx2aSolVHVnkUi5VSs5VbrSnlaSs89XwjPLU39hRPXt34hbv8VFRMVAy0XDiYuLQ0Oc/CpzxTFc8/kpDxU54q53/sXOpy8isPFTm0XN/X8kbql9SkPFz3/I57vomVcqsUiudepznjCxnIvs/mKSHkEVIU55Kikh5Bz8q2ByGh5COHsNjDwwIYmeTpUU3N9vGp3PcWJqG5w0qqmluO05N8UlBHuVrm1w8pArkVrm3YPTTuCc2qPQAERM5AZ5BhgoZzGZLxh8zoxWMVEnF8/B4uHEwXLY81w3V3LZGWW6N9zhNbugt6pURFQYy4qIi4rk0XFRCpV8qRSpURUUlPFRUTFRSHioqJiopDxUXExUVh4qOn0X0nLTylm188c5Mscp5WXvjmiopFI+xqY+ja2Pa0/wDLa3jpZW5aGfT/AEZ3rh/xy3n+7wfOuNl2vTngzjWVTE5/qmYIqQRUisikhbDZWwMPE7A6TBx5KiUZE5I8aorBKbanYMZlsuwrHF6YNEEqk495PEgw5dZNEg9gjcmhbAwnzhoDIRhMyOGgqikwHlMuGmDc38uD1VySRhb1unDKHDQVRUTFRSGiordEVFYeLioiKiuTxcVExUWh4qKiYqKQ8VFRMVFIeLioiLisPFRcRFRSKRcXERUVika41cZReNUlViyo3BjdLnUDnUmK8nkkByPGGYDNCqQHP6HhFTDj2eJoAcuzEQDn0YABKmh0oAUTMA0E4YBoaGQDVjnPic+31AGNDnPir/0AaDDn7RUAVikOKgCkNFRUMK5PFRUAWyeKioArDxUVAFIeKioArDxcVAFIpFxUAUikVFQA8UjSfv8AsXPkAoJc+QAZn//Z"
                  alt=""
                />
                <div className=" flex items-center px-4">
                  <img
                    className=" w-24 rounded-full   shadow-lg ring-1 ring-Primary  "
                    src={currentEmployee.profileurl}
                    alt=""
                  />
                  <div className=" px-4 flex flex-col items-center justify-center">
                    <p className=" font-poppins font-bold">
                      {currentEmployee.name}    
                    </p>
                    <p className=" font-poppins text-sm">
                      Role : {currentEmployee.position}
                    </p>
                  </div>
                   <div onClick={()=>setIsPopupOpen(true)} className=" cursor-pointer ps-12 flex-1">
                    <img src={bell} className=" w-10 h-10" alt="" />
                   </div>

                </div>
                 <p className=" px-6 py-4 text-md font-poppins"> About : {currentEmployee.about}</p>
           <article className="  flex gap-11">
           <div>

                 <h1 className=" pt-5 ps-5 text-xl font-semibold  font-poppins  ">
                  Skills:
                </h1>
                <div className="flex gap-4 px-4 ">
                  { currentEmployee && currentEmployee.skills && currentEmployee.skills.map((skill) => (
                    <div>
                      <p className="p-2  m-2 font-poppins  rounded-xl  text-white bg-Primary text-sm">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
                 
                <h1 className=" pt-5 ps-5 text-xl font-semibold  font-poppins  ">
                    Worked Projects:
                </h1>
                  
                <div className="flex flex-col py-3  px-4 ">
                    { currentEmployee && currentEmployee.projects && currentEmployee.projects.map((project) => (
                        
                        <li className="px-3 py-1 font-poppins  rounded-xl  text-a  text-md">
                            {project}
                        </li>
                        
                    ))}
                    </div>
                    <h1 className=" pt-5 ps-5 text-xl font-semibold  font-poppins  ">
              Certification :
                </h1>
                <div className="flex flex-col py-3  px-4 ">
                    { currentEmployee && currentEmployee.certificatios && currentEmployee.certificatios.map((certification) => (
                        
                        <li className="px-3 py-1 font-poppins  rounded-xl  text-a  text-md">
                            {certification}
                        </li>
                        
                    ))}
              
                 </div>
              </div>
              <div className=" w-full  bg-white flex items-center h-screen">
                        <div className=" bg-gray-100 ">
                               
                               <p> </p>
                               
                        </div>
              </div>

           </article>
                 
              
             
               </div>
                  
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
