import { Schema, model } from "mongoose";

const questionBlockSchema = new Schema(
  {
    subject: {
      type: Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Question",
        required: true,
      },
    ],
    content: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const questionBlockModel = model("QuestionBlock", questionBlockSchema);

module.exports = {
  questionBlockModel,
};
