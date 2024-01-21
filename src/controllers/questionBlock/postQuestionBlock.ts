import { Request, Response } from "express";
import postQuestionBlockService from "../../services/questionBlock/create.service";
import { QuestionBlockInterface } from "~/types/questionBlock/questionBlock";

const postQuestionBlock = async (req: Request, res: Response) => {
  try {
    let question: QuestionBlockInterface = req.body;
    if (req.file === undefined) {
      question.image = "";
    } else {
      question.image = (req.file as Express.MulterS3.File).location;
    }

    const QuestionBlock = await postQuestionBlockService(req.body);
    res.json({
      questionBlock: QuestionBlock,
    });
  } catch (err) {
    if (err.status !== undefined) {
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
