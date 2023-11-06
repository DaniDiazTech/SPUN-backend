import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const examTakeSchema = new Schema(
  {
    exam: {
      type: Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
    },
    answers: [
      {
        type:String,
        required: true,
      },
    ],
    startExam: {
      type: Date,
      required: true,
    },
    endExam: {
      type: Date,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    score: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const ExamTake = model("ExamTake", examTakeSchema);
export default ExamTake;
