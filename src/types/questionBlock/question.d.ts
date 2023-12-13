import { Document } from "mongoose";

export interface QuestionInterface extends Document{
    text: string;
    choices: string[];
    answer: {
      type: string;
      enum: ["1", "2", "3", "4"];
      required: true;
    };
  }
  