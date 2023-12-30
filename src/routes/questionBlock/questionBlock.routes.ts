import { Router } from "express";
import QuestionBlockController from "../../controllers/questionBlock.controller";
import { postQuestionBlockSchema } from "../../schemas/questionBlock.schema";
import { validateSchema } from "../../middlewares/validateSchema";
const QuestionBlockRouter = Router();

QuestionBlockRouter.get("/", QuestionBlockController.getQuestionBlocks);
QuestionBlockRouter.get("/:id", QuestionBlockController.getQuestionBlock);
QuestionBlockRouter.get("/bySubject/:subject", QuestionBlockController.getQuestionsBySubject);
QuestionBlockRouter.post("/create", validateSchema(postQuestionBlockSchema), QuestionBlockController.postQuestionBlock);
QuestionBlockRouter.put("/update/:id", QuestionBlockController.updateQuestionBlock);
QuestionBlockRouter.delete("/:id", QuestionBlockController.deleteQuestionBlock);
export default QuestionBlockRouter;
