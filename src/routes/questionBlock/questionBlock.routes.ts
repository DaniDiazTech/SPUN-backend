import { Router } from "express";
import QuestionBlockController from "../../controllers/questionBlock.controller";

const QuestionBlockRouter = Router();

QuestionBlockRouter.get("/:subject", QuestionBlockController.getQuestionsBySubject);

export default QuestionBlockRouter;
