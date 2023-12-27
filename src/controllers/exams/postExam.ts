import { Request, Response } from "express";
import postExamService from "../../services/exams/postExam.service"

const postExam = async (req:Request, res:Response) => {
  try {
    const Exam = await postExamService(req.body);
    res.json({
      exam: Exam,
    });
  } catch (err) {
    if (err.status!==undefined) {
      return res.status(err.status).json({
        err: err.message,
      });
    }
    return res.status(500).json({
      err: err.message,
    });
  }
};

export default postExam;