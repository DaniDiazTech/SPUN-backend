import { Request, Response } from "express";
import postQuestionBlockService from "../../services/questionBlock/create.service";

const postQuestionBlock = async (req:Request, res:Response) => {
  try {
    const QuestionBlock = await postQuestionBlockService(req.body);
    res.json({
      questionBlock: QuestionBlock,
    });
  } catch (err) {
    res.status(err.message|500).json({
      err: err.message,
    });
  }
};

export default postQuestionBlock;