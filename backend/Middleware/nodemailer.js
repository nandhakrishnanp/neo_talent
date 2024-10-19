var nodemailer = require('nodemailer');


const sendMail =async(email , link )=>{
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lathamani3636@gmail.com',
      pass: process.env.PASSWORD
    }
  });
  
  var mailOptions = {
    from: '727723eumt084@gmail.com',
    to: email,
    subject: 'Details RequireMent : Neo Talent ',
    text: ` Hey There , We are From Neo Talent  , We require some details from you to proceed further . Please click the link below to provide the details . ${link}`
  };
  
 const response = await transporter.sendMail(mailOptions);
 if(response){
  console.log("Mail sent")
  return true
 }
 else{
  return false
 }
}


module.exports = sendMail