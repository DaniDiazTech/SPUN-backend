import { Schema, model } from "mongoose";

const examSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    question_blocks: [
      {
        type: Schema.Types.ObjectId,
        ref: "QuestionBlock",
      },
    ],
    is_simulacrum: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const examModel = model("Exam", examSchema);

module.exports = {
  examModel,
};
