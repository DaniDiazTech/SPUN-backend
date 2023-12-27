import { Request, Response } from "express";
import postQuestionBlockService from "../../services/questionBlock/create.service";

const postQuestionBlock = async (req:Request, res:Response) => {
  try {
    const QuestionBlock = await postQuestionBlockService(req.body);
    res.json({
      questionBlock: QuestionBlock,
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

export default postQuestionBlock;