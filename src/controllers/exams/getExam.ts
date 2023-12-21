import mongoose from "mongoose";
import { Request, Response } from "express";
import getExamService from "../../services/exams/getExam.service";

/**
 * @param req
 * @param res
 * @returns Json with exam: Exam info, and questions: questionBlock related to Exam
 */
const getExam = async (req:Request, res:Response) => {
  try {
    const Exam = await getExamService(req.params.id);
    res.status(200).json({
      exam: Exam,
    });
  } catch (err) {
    return res.status(err.status).json({
      error: err.message,
    });
  }
};

export default getExam;
