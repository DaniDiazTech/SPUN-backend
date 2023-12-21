import { Request, Response } from "express";
import postExamTakeService from "../../services/exams/postExamTake.service";

const postExamTake = async (req:Request, res:Response) => {
  try {
    const Exam= await postExamTakeService(
      {
        exam_id: req.params.id,
        ...req.body,
      }
    );
    res.json({
      examTake: Exam,
    });
  } catch (err) {
    res.status(err.status).json({
      error: err.message,
    });
  }
};

export default postExamTake;
