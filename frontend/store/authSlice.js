import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axiosConfig";
import { toast } from "react-toastify";

const intialState = {
  isLogin: false,
  status: "idle",
  error: null,
  token: null,
empid:null
};

const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  const response = await axiosInstance.post("/api/auth/loginhr", data);
  return response.data;
});

const loginEmployee = createAsyncThunk("auth/loginEmployee", async (data) => {
    const response = await axiosInstance.post("/api/auth/loginuser", data);
    return response.data;
    });
  
const authSlice = createSlice({
  name: "authentication",
  initialState: intialState,
 
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.token = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.msg === "Login successfull") {
          state.isLogin = true;
          state.token = action.payload.token;
        
          toast.success("Login Successful");
        } else {
            toast.error(action.payload.msg);
          state.isLogin = false;
          state.token = null;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        const response = action.payload;
        state.isLogin = false;
        state.token = null;
        toast.error(response.msg);
      });
        builder
        .addCase(loginEmployee.fulfilled, (state, action) => {
            if (action.payload.msg === "Login successfull") {
              state.isLogin = true;
              state.token = action.payload.token;
              toast.success("Login Successful");
              if(action.payload.empid ){
                console.log("emp id "+action.payload.empid);
                localStorage.setItem("empid",action.payload.empid);
              }
            } else {
                toast.error(action.payload.msg);
              state.isLogin = false;
              state.token = null;
            }
          })
          .addCase(loginEmployee.rejected, (state, action) => {
            const response = action.payload;
            state.isLogin = false;
            state.token = null;
            toast.error(response.msg);
          });
  },
});

export const { login, logout } = authSlice.actions;
export { loginUser , loginEmployee };
export default authSlice.reducer;
export const selectIsLogin = (state) => state.authentication.isLogin;
export const selectToken = (state) => state.authentication.token;
