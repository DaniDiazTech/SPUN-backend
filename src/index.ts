import connectDB from "./db";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { swaggerOptions } from "./swagger/swagger";
import router_manager from "./routes/manager.routes";

// Loads the environment variables from .env
dotenv.config();
/*
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "SPUN backend",
      version: "1.0.0",
      description: "This is the backend service of the SPUN app",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
    tags: [
      {
        name: "auth",
        description: "Authentication routes",
      },
      {
        name: "questionBlock",
        description: "Question block routes",
      },
      {
        name: "question",
        description: "Question routes",
      },
      {
        name: "subject",
        description: "Subject routes",
      },
      {
        name: "user",
        description: "User routes",
      },
    ],
  },
  apis: 
}
*/
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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerOptions)));
app.use("/api", router_manager); // Sets the routes

// Runs the server
app.listen(process.env.PORT, () => {
  connectDB();
  console.log("Connected to DB and listening on port", process.env.PORT);
});
