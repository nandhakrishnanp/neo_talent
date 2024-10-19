import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axiosConfig";


const initialState = {
    projects: [],
    status: "idle",
    error: null,
    };


    const getAllProjects = createAsyncThunk("/projects",async()=>{
        console.log("get all projects data");
        const response = await axiosInstance.get("/projects/getprojects");
        console.log("response", response.data);
        return response.data;
    })

const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        projectAdded: {
            reducer(state, action) {
                state.projects.push(action.payload);
            },
            prepare(projectname, projecttype, projectdescription, skills, projectrequirements, projectresponsibilities, projectexperience, projectcategory, projectstatus) {
                return {
                    payload: {
                        projectname,
                        projecttype,
                        projectdescription,
                        skills,
                        projectrequirements,
                        projectresponsibilities,
                        projectexperience,
                        projectcategory,
                        projectstatus,
                    },
                };
            },
        },
        projectReceived(state, action) {
            state.projects = action.payload;
        },
        projectRequestFailed(state, action) {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProjects.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllProjects.fulfilled, (state, action) => {
                state.status = "succeeded";
                console.log("received");
                
                state.projects = action.payload;
            })
            .addCase(getAllProjects.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { projectAdded, projectReceived, projectRequestFailed } = projectSlice.actions;
export const selectAllProjects = (state) => state.projects.projects;
export { getAllProjects };
export default projectSlice.reducer;