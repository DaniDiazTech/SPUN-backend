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

const subjectModel = model("Subject", subjectSchema);

module.exports = {
  subjectModel,
};
