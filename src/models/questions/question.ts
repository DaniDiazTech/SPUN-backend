import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const questionSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    choices: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Choice",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const questionModel = model("Question", questionSchema);

module.exports = {
  questionModel,
};
