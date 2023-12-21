import { Request, Response } from 'express';
import getExamTakesService from '../../services/exams/getallExamTakes.service';

/**
 * Get exam takes by user id
 * @param req Request
 * @param res Response
 * @returns all exam takes by user id
 */

const getExamTakes = async (req:Request, res:Response) => {
  try {
    const ExamTakes = await getExamTakesService(req.params.id);
    res.status(200).json({ examTakes: ExamTakes });
  } catch (err) {
    res.status(err.status).json({
      error: err.message,
    });
  }
};

export default getExamTakes;
