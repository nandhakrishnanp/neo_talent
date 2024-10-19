
const express = require('express');
const { addProject , getProjects } = require('../controller/projectController');
const router = express.Router();


router.get('/getprojects', getProjects);
router.post('/addproject', addProject);



module.exports = router;