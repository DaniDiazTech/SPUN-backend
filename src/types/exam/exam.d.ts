import { Document } from "mongoose";
import { QuestionBlockInterface } from "../questionBlock/questionBlock";
export interface ExamInterface extends Document {
  title?: string;
  description?: string;
  questionBlocks?: string[];
  subject?: string;
  isSimulacrum?: boolean;
  timestamps?: boolean;
}

export interface ExamReadInterface {
  title?: string;
  description?: string;
  questionBlocks?: QuestionBlockInterface[];
  subject?: string;
  isSimulacrum?: boolean;
}