import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axiosConfig";

const initialState = {
  employees: [],
  status: "idle",
  error: null,

};

const getAllEmployeesData = createAsyncThunk(
  "/api/getallemployees",
  async () => {
    console.log("get all employees data");
    const response = await axiosInstance.get("/api/auth/getallemployees");
    console.log(response.data);

    return response.data;
  }
);
const getemplloyeeById = createAsyncThunk("/api/empid", async (id) => {
  const response = await axiosInstance.get(`/api/auth/getemployeebyid/${id}`);
  return response.data;
});





const EmployeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEmployeesData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllEmployeesData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employees = action.payload;
        console.log("received");
      })
      .addCase(getAllEmployeesData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log("error");
        console.log("error", action.error.message, action.error);
      })
        .addCase(getemplloyeeById.fulfilled, (state, action) => {
            state.status = "succeeded";
           
            state.employees = action.payload;
            console.log("received");
        })
        .addCase(getemplloyeeById.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });

  },
});

export default EmployeeSlice.reducer;
export const selectAllEmployees = (state) => state.employees.employees;
export { getAllEmployeesData  , getemplloyeeById};
