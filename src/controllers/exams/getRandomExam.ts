import { Request, Response } from "express";
import getRandomExamService from "../../services/exams/getRandomExam.service";

const getRandomExam = async (req:Request, res:Response) => {
  try {
    console.log("getRandomExamController");
    console.log("subject: "+req.params.subject);
    console.log("n: "+req.params.number);
    const Exam = await getRandomExamService(req.query.subject.toString(), req.query.number.toString());
    res.json({
      exam: Exam,
    });
  } catch (err) {
    if (err.status!==undefined) {
      return res.status(err.status).json({
        err: err.message,
      });
    }
    res.status(500).json({
      err: err.message,
    });
  }
};

export default getRandomExam;