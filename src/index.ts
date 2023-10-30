const dotenv = require("dotenv");
dotenv.config();
export {};

const express = require("express");
const mongoose = require("mongoose");
const appRoutes = require("./routes/routes");

// Constansts

// Define it in PORT
const PORT = process.env.PORT;

// Stores all the routes of the app
const app = express();

// Middleware

app.use(express.json()); // middleware that converts req.body to json
app.use("/api/", appRoutes);

// First route
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Only listen when we're connected to the database

    // Listen for requests
    app.listen(PORT, () => {
      console.log("Connected to DB and listening on port", PORT);
    });
  })
  .catch((error: Error) => {
    console.log(error);
  });
