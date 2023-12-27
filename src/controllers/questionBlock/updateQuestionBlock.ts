import { Request, Response } from "express";
import updateQuestionBlockService from "../../services/questionBlock/update.service";

const updateQuestionBlock = async (req:Request, res:Response) => {
    try {
        const QuestionBlock = await updateQuestionBlockService(req.params.id, req.body);
        res.json({
        message: "Question block updated successfully",
        questionBlock: QuestionBlock,
        });
    } catch (err) {
        res.status(err.message|500).json({
        err: err.message,
        });
    }
}

export default updateQuestionBlock;