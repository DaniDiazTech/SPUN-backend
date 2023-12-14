import mongoose from "mongoose";
import user from "../../models/users/user";
import examTake from "../../models/exams/examTake";
import exam from "../../models/exams/exam";
import { HTTPError } from "../../utils/HTTPError";
import { ExamTakeCreate, ExamTakeInterface } from "../../types/exam/examTake";

const postExamTakeService = async (ExamTake: ExamTakeCreate ) => {
  const userFound = await user.findOne({ email: ExamTake.email });
  if (!userFound) throw new HTTPError("User not found", 404);
  const examFound = await exam.findById(ExamTake.exam_id);
    if (!examFound) throw new HTTPError("Exam not found", 404);

  const Exam = new examTake({
    exam: new mongoose.Types.ObjectId(ExamTake.exam_id),
    answers: ExamTake.answers,
    startExam: ExamTake.startExam,
    endExam: ExamTake.endExam,
    user: userFound._id,
    score: ExamTake.score,
  });
  Exam.save();
  return Exam as ExamTakeInterface;
};

export default postExamTakeService;
