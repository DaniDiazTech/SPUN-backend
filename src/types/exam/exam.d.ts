import mongoose, { Document } from "mongoose";
import { QuestionBlockInterface } from "../questionBlock/questionBlock";

export interface ExamInterface extends Document {
  title: string;
  description: string;
  questionBlocks: mongoose.Types.ObjectId[];
  subject: string;
  isSimulacrum: boolean;
  timestamps?: boolean;
}

export interface ExamCreateInterface {
  title: string;
  description: string;
  questionBlocks: string[];
  subject: string;
  isSimulacrum: boolean;
}