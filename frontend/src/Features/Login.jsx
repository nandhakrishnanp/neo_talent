import React, { useEffect, useState } from "react";
import Icon from "../Components/icon";
import { useDispatch, useSelector } from "react-redux";
import { loginEmployee, loginUser, selectIsLogin } from "../../store/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import teampeople from "../assets/people.svg";

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username ,setUsername] = useState("");
  const [formErrors, setFormErrors] = useState({
    password: "",
  });
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const [isHr , setisHr] = useState(true);
  useEffect(() => {
    if (isLogin && isHr) {
      nav("/dashboard");
    }
    else if(isLogin && !isHr){
        nav("/home");
    }
  });

  const validateForm = () => {
    const errors = { username: "", password: "", fullname: "" };

    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long ";
      toast.error("Password must be at least 8 characters long ");
    }
    // using regex
    if (!/[A-Z]/.test(password)) {
      errors.password = "Password must be have least 1 uppercase letter  ";
      toast.error("Password must be have least 1 uppercase letter");
    }

    setFormErrors(errors);
    return Object.values(errors).every((value) => value === "");
  };

  const handleSubmit = () => {

    if(!isHr){
        if (username === "" || password === "") {
            toast.error("Please fill all the fields");
        } else {
            if (validateForm()) {
            dispatch(loginEmployee({ username, password }));
            }}
    }
    else{
        if (email === "" || password === "") {
            toast.error("Please fill all the fields");
          } else {
            if (validateForm()) {
              dispatch(loginUser({ email, password }));
            }
          }
    }
    
  };

  return (
    <div className="w-full h-screen  bg-slate-200">
      <Icon />

      <div className=" flex  h-screen  items-center justify-center">
        <div>
          <img src={teampeople} className=" h-[70%] w-2/3" alt="banner" />
        </div>
        <div className=" bg-slate-50 p-16 rounded-sm shadow-sm">
          <h1 className=" text-xl text-center font-poppins text-accent capitalize font-semibold">
            {" "}
            <span className=" text-Primary">Login</span> into Neo Talent
          </h1>
          <p className=" text-accent  font-montserrat">
            "Transforming Talent Acquisition through Intelligent Insights."
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="flex flex-col space-y-3 mt-5">
             {  isHr ? <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Email"
                className="p-2 active:ring-Primary font-poppins border-2 border-gray-300 rounded-md"
              /> : 
               
              <input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder="Username"
                className="p-2 active:ring-Primary font-poppins border-2 border-gray-300 rounded-md"
              />
              
              }
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
                className="p-2  active:ring-Primary font-poppins border-2 border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="bg-Primary hover:bg-Primary/95 text-white font-poppins p-2 rounded-md"
              >
                Login
              </button>
            
             {isHr ? <p className=" font-poppins  text-accent py-3">
                If You are Employee{" "}
                <span onClick={()=> setisHr(false)} className=" text-Primary hover:cursor-pointer ">
                  Click Here For Employee Login
                </span>
              </p> : <p>
              If You are HR 
              <span onClick={()=> setisHr(true)} className=" text-Primary hover:cursor-pointer px-2 ">
                  Click Here For Hr Login
                </span>
                </p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
