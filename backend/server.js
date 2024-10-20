const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/Authroutes");
const { runprompt } = require("./llm/groq");
const employeemodel = require("./model/EmployeeSchemea");
const { runChat } = require("./llm/gemini");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "neo_talent",
    });
    console.log("connected to mongoDB");
  } catch (err) {
    console.log(err.message);
  }
};
connectDB();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/ai", async (req, res) => {
  const { data } = req.body;
  const prompt =
    " Analysis  the given Data and give  the uplkill path skills to uplskill them in their feild and same guildness to learn it ,pskilling path recommendations, including relevant skills, tools, and resources";

  let result = await runprompt(prompt, data);
  res.json({ result }).status(200);
});

app.post("/bestemp", async (req, res) => {
  const { requirement } = req.body;
  console.log(requirement);
  
  const prompt = `Find the top 5 best employee for the given requirement based on their work profile and skill matching
    ${requirement} give as  as arr of objects no \n in between objects and <br/> tags`;

  const allusers = await employeemodel.find();
   const stringfiesd = JSON.stringify(allusers);
  const result = await runChat(prompt + stringfiesd);
  res.json({ result }).status(200);
});

app.use("/api/auth", authRoutes);
app.use("/projects", require("./routes/projectrotes"));
app.use("/jobs", require("./routes/HiringRoutes"));

app.post("/email", async (req, res) => {
  const { email, jobId, userId } = req.body;
  console.log(email, jobId, userId);

  const link = `http://localhost:5173/apply/${jobId}/${userId}`;
  const sendMail = require("./Middleware/nodemailer");
  const response = await sendMail(email, link);
  if (response) {
    res.json({ msg: "Mail sent" }).status(200);
  } else {
    res.json({ msg: "Mail not sent" }).status(400);
  }
});


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
