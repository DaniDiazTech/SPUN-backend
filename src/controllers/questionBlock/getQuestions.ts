import { Request, Response } from "express";
import getQuestionsService from "../../services/questionBlock/getAll.service";

/**
 * @param req
 * @param res
 * @returns Json with all questions blocks
 */
const getQuestions = async (req: Request, res: Response) => {

  try {
    const QuestionsBlocks = await getQuestionsService();

    res.status(200).json({
        questionsBlocks: QuestionsBlocks,
    });
    
  } catch (err) {
    return res.status(err.status).json({
      error: err.message,
    });
  }
};

export default getQuestions;
