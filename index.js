import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./Routes/contactRoute.js";

const app = express();

//middleware

app.use(cors());
app.use(express.json());
dotenv.config();

//connection to mongodb
mongoose
  .connect(process.env.MONGO_DB
  )
  .then(() =>{
    console.log("Connected to mongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Listening at port ${process.env.PORT}`);
    })}
  )
  .catch((error) => console.log(error));

//usage of route
app.use("/contact", contactRoute);
