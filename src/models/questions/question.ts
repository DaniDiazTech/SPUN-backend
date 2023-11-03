import { Schema, model } from "mongoose";

const questionSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    choices: [
      {
        letter: {
          type: String,
          required: true,
        },
        text: {
          type: String,
          required: true,
        },
      },
    ],
    answer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Question", questionSchema);
