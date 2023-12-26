import { Router } from "express";
import QuestionBlockController from "../../controllers/questionBlock.controller";

const QuestionBlockRouter = Router();

QuestionBlockRouter.get("/", QuestionBlockController.getQuestions)
QuestionBlockRouter.get("/:subject", QuestionBlockController.getQuestionsBySubject);
/*
QuestionBlockRouter.get("/:id", QuestionBlockController.getQuestionById);
QuestionBlockRouter.post("/", QuestionBlockController.createQuestion);
QuestionBlockController.put("/:id", QuestionBlockController.updateQuestion);
QuestionBlockController.delete("/:id", QuestionBlockController.deleteQuestion);
*/
export default QuestionBlockRouter;
