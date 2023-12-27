import { Request, Response } from "express";
import getQuestionsBySubjectService from "../../services/questionBlock/getBySubject.service";
/**
 * @param req
 * @param res
 * @returns Json with all questions by subject
 */
const getQuestionsBySubject = async (req: Request, res: Response) => {
  console.log("getQuestionsBySubject.controller");
  console.log("req.params.subject: ", req.params.subject);
  try {
    const QuestionsBlocks = await getQuestionsBySubjectService(req.params.subject);

    res.status(200).json({
        questionsBlocks: QuestionsBlocks,
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

export default getQuestionsBySubject;
