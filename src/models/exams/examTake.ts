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
    answers: {
      type: Schema.Types.ObjectId,
      ref: "Choice",
      required: false,
    },
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

const examTakeModel = model("ExamTake", examTakeSchema);

module.exports = {
  examTakeModel,
};
