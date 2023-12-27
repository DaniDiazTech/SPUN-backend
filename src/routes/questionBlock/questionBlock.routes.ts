import { Router } from "express";
import QuestionBlockController from "../../controllers/questionBlock.controller";

const QuestionBlockRouter = Router();

QuestionBlockRouter.get("/", QuestionBlockController.getQuestionBlocks);
QuestionBlockRouter.get("/:id", QuestionBlockController.getQuestionBlock);
QuestionBlockRouter.get("/bySubject/:subject", QuestionBlockController.getQuestionsBySubject);
QuestionBlockRouter.post("/create", QuestionBlockController.postQuestionBlock);
QuestionBlockRouter.put("/update/:id", QuestionBlockController.updateQuestionBlock);
QuestionBlockRouter.delete("/:id", QuestionBlockController.deleteQuestionBlock);
export default QuestionBlockRouter;
