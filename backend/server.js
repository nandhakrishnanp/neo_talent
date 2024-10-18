const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose")
const authRoutes = require("./routes/Authroutes");

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

app.use("/api/auth", authRoutes);


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
