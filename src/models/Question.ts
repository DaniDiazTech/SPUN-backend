import { Schema, model } from "mongoose";

const questionSchema = new Schema({
  text: { type: String, required: true },
  answer: { type: String, required: true },
});

export const Question = model("Question", questionSchema);
