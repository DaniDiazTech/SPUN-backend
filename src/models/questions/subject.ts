import { Schema, model } from "mongoose";

const subjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Subject", subjectSchema);
