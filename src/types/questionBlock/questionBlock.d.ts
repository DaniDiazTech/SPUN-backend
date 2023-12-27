import { Document } from "mongoose";
import { QuestionInterface } from "./question";

export interface QuestionBlockInterface extends Document {
  subject: string;
  questions: QuestionInterface[];
  content: string;
  image: string;
  timestamps?: boolean;
}

export interface QuestionBlockCreateInterface {
  subject: string;
  questions: QuestionInterface[];
  content: string;
  image?: string;
  timestamps?: boolean;
}

export interface QuestionBlockUpdateInterface extends QuestionBlockCreateInterface {
}