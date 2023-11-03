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
    userChoices: [
      {
        type: String,
        enum: ["1", "2", "3", "4"],
        required: true,
      }
    ]
  },
  {
    timestamps: true,
  }
);

const ExamTake = model("ExamTake", examTakeSchema);
export default ExamTake;
