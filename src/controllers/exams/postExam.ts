import { Request, Response } from "express";
import postExamService from "../../services/exams/postExam.service"

const postExam = async (req:Request, res:Response) => {
  try {
    const Exam = await postExamService(req.body);
    res.json({
      exam: Exam,
    });
  } catch (err) {
    res.status(err.message|500).json({
      err: err.message,
    });
  }
};

export default postExam;