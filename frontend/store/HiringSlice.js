import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import axiosInstance from "../axiosConfig";



const initialState = {
    hiring: [],
   applicant : [],
    status: "idle",
    error: null,
};

const getHiringData = createAsyncThunk(
    "/api/getallhiring",
    async () => {
        console.log("get all hiring data");
        const response = await axiosInstance.get("/jobs/gethiring");
        console.log(response.data);
        return response.data;
    }
);

const addHiring = createAsyncThunk(
    "/api/addhiring",
    async (data) => {
        console.log("add hiring data");
        const response = await axiosInstance.post("/jobs/addhiring", data);
        console.log(response.data);
        return response.data;
    }
);

const getApplicant = createAsyncThunk(
    "/api/getapplicant",
    async () => {
        console.log("get all applicant data");
        const response = await axiosInstance.get("/jobs/applicant");
        console.log(response.data);
        return response.data;
    }
);

const HiringSlice = createSlice({
    name:"hiring",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getHiringData.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getHiringData.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.hiring = action.payload;
            console.log("received hiring data");
            console.log("received", action.payload);
            
        })
        .addCase(getHiringData.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
            console.log("error");
            console.log("error", action.error.message, action.error);
        })
        .addCase(addHiring.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.hiring.push(action.payload);
            toast.success("Hiring Added Successfully")
            console.log("received");
        })
        .addCase(addHiring.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
            console.log("error");
            console.log("error", action.error.message, action.error);
        })
        .addCase(getApplicant.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getApplicant.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.applicant = action.payload;
            console.log("received applicant data");
            console.log("received", action.payload);
            
        })
        .addCase(getApplicant.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
            console.log("error");
            console.log("error", action.error.message, action.error);
        })

    }
})

export default HiringSlice.reducer;
export const selectAllHiring = (state) => state.hiring.hiring;
export const selectAllApplicant = (state) => state.hiring.applicant;

export { getHiringData, addHiring , getApplicant };