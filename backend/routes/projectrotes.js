
const express = require('express');
const { addProject , getProjects } = require('../controller/projectController');
const {addNotification , getNotificationByUserId} = require('../controller/NotificationController');
const router = express.Router();


router.get('/getprojects', getProjects);
router.post('/addproject', addProject);
router.post('/addnotification', addNotification);
router.get('/getnotification/:userId', getNotificationByUserId);



module.exports = router;