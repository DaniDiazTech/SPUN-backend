import { Schema, model } from "mongoose";

const examTakeSchema = new Schema(
  {
    exam: {
      type: Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
    },
    answers: [
      {
        question: {
          type: Schema.Types.ObjectId,
          ref: "Question",
          required: true,
        },
        selectedOption: {
          type: String,
          required: true,
        },
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

export default model("ExamTake", examTakeSchema);
