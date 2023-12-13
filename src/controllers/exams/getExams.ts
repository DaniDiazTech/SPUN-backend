import { Request, Response } from "express";
import getExamsService from "../../services/exams/getall.service";

/**
 * @param req
 * @param res
 * @returns Json with all exams to take
 */
const getExams = async (req: Request, res: Response) => {

  try {
    const Exams = await getExamsService();

    res.status(200).json({
      exams: Exams,
    });
    
  } catch (err) {
    return res.status(err.status).json({
      error: err.message,
    });
  }
};

export default getExams;
