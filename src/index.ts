import authRouter from "./routes/auth/auth";
import connectDB from "./db";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import questionsCrudRouter from "./routes/questions/questionsCrud";
import examRouter from "./routes/exams/exams";

// Loads the environment variables from .env
dotenv.config();

// Stores all the routes of the app
const app = express();

// Middlewares
// Allows connection between servers
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser()); // For parsing cookies
app.use(express.json()); // Converts req.body to json
app.use("/api/auth", authRouter); // Authentication routes
app.use("/api/crud", questionsCrudRouter); // Questions crud routes
app.use("/api/exam", examRouter);

// Runs the server
app.listen(process.env.PORT, () => {
  connectDB();
  console.log("Connected to DB and listening on port", process.env.PORT);
});
