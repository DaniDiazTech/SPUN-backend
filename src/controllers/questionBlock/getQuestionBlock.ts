import { Request, Response } from "express";
import getQuestionBlockService from "../../services/questionBlock/getByID.service";

/**
 * @param req
 * @param res
 * @returns Json with all questions blocks
 */
const getQuestionBlock = async (req: Request, res: Response) => {

  try {
    const QuestionsBlocks = await getQuestionBlockService(req.params.id);

    res.status(200).json({
        questionBlock: QuestionsBlocks,
    });
    
  } catch (err) {
    if (err.status!==undefined) {
      return res.status(err.status).json({
        error: err.message,
      });
    }
    return res.status(500).json({
      error: err.message,
    });
  }
};

export default getQuestionBlock;
