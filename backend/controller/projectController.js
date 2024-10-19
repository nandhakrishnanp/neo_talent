const projectmodel = require("../model/ProjectModel");
const mongoose = require("mongoose");




const addProject = async (req, res) => {
    const { projectname, projecttype, projectdescription, skills, projectrequirements, projectresponsibilities, projectexperience, projectcategory, projectstatus } = req.body;
    try {
        const newProject = new projectmodel({
            projectname,
            projecttype,
            projectdescription,
            skills,
            projectrequirements,
            projectresponsibilities,
            projectexperience,
            projectcategory,
            projectstatus,
        });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const getProjects = async (req, res) => {
    try {
        console.log("get all projects");
        const project = await projectmodel.find();
        res.json(project).status(200);
    } catch (error) {
        res.json({ message: error.message }).status(404);
    }
}


module.exports = { addProject, getProjects };

