import mongoose, { Document } from "mongoose";
import { ExamInterface } from "../exam/exam";

export interface ExamTakeInterface extends Document {
  exam: mongoose.Types.ObjectId;
  answers: string[];
  startExam: Date;
  endExam: Date;
  user: mongoose.Types.ObjectId;
  score: number;
}

export interface ExamTakeCreate{
  exam_id: string;
  email: string;
  answers: string[];
  startExam: Date;
  endExam: Date;
  score: number;
}