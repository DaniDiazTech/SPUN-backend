import { Request,Response } from "express";
import deleteQuestionBlockService from "../../services/questionBlock/delete.service";

/**
 * @param req
 * @param res
 * @returns Json with all questions blocks
 */

const deleteQuestionBlock = async (req: Request, res: Response) => {

  try {
    const QuestionBlock = await deleteQuestionBlockService(req.params.id);

    res.status(200).json({
        message: "Question block deleted successfully",
        questionBlock: QuestionBlock,
    });
    
  } catch (err) {
    return res.status(err.status).json({
      error: err.message,
    });
  }
}

export default deleteQuestionBlock;