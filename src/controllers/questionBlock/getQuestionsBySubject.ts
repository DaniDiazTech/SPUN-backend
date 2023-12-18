import { Request, Response } from "express";
import getQuestionsBySubjectService from "../../services/questionBlock/getallBySubject.service";
/**
 * @param req
 * @param res
 * @returns Json with all questions by subject
 */
const getQuestionsBySubject = async (req: Request, res: Response) => {

  try {
    const QuestionsBlocks = await getQuestionsBySubjectService(req.params.subject);

    res.status(200).json({
        questionsBlocks: QuestionsBlocks,
    });
    
  } catch (err) {
    return res.status(err.status).json({
      error: err.message,
    });
  }
};

export default getQuestionsBySubject;
