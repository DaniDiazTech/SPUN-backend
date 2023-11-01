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
    questionBlocks: [
      {
        type: Schema.Types.ObjectId,
        ref: "QuestionBlock",
      },
    ],
    isSimulacrum: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Exam", examSchema);
