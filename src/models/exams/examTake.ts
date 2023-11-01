import { Schema, model } from "mongoose";

const examTakeSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
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
    start_exam: {
      type: Date,
      required: true,
    },
    end_exam: {
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
