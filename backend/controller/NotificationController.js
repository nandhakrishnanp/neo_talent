const NotificationSchema = require("../model/NotificationModel");
const sendMail = require("../Middleware/nodemailer");
const employee = require("../model/EmployeeSchemea");
const addNotification = async (req, res) => {
    const { userId, message ,suggestion } = req.body;

    if (!userId || !message) {
        return res.json({ msg: "Fill all the Fields" }).status(400);
    }

    try {
        const newNotification = new NotificationSchema({
            userId: userId,
            message: message,
            suggestion: suggestion,
        });
        
        newNotification.save();
        return res
            .json({ msg: "Notification Added successfully", accepted: "ok" })
            .status(200);
    } catch (error) {
        res.json({ msg: "Notification Failed" }).status(400);
    }
}


 const getNotificationByUserId = async (req, res) => {
    const { userId } = req.params;
    console.log(userId);
    
    try {
        const user = await employee.findOne({empid:userId});
        console.log(user._id);
        
  if(user){
    const notification = await NotificationSchema.find({userId: user._id});
    res.status(200).json(notification);
  }
  else{
    res.status(400).json({ message: "User not found" });
  }
        
    } catch (error) {
        res.status(500).json({ message: "Error fetching notification data", error });
    }
}


module.exports = { addNotification, getNotificationByUserId };