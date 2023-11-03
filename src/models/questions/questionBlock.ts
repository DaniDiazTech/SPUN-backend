import { Schema, model } from "mongoose";

const questionBlockSchema = new Schema(
  {
    subject: {
      type: String,
      enum: [
        "Matemáticas",
        "Ciencias Sociales",
        "Ciencias Naturales",
        "Análisis textual",
        "Análisis de imagen",
      ],
      required: true,
    },
    questions: [
      {
        text: {
          type: String,
          required: true,
        },
        choices: [
          {
            type: String,
            required: true,
          },
        ],
        answer: {
          type: String,
          enum: ["1", "2", "3", "4"],
          required: true,
        },
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
  },
  {
    timestamps: true,
  }
);

export default model("QuestionBlock", questionBlockSchema);
