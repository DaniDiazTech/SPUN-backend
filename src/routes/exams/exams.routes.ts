import { Router } from "express";
import examController from "../../controllers/exam.controller";
import { isAdmin } from "../../middlewares/auth";
import { postExamSchema, postExamTakeSchema } from "../../schemas/exam.schema";
import { validateSchema } from "../../middlewares/validateSchema";
const examRouter = Router();

examRouter.get("/", examController.getExams);
examRouter.get("/random", examController.getRandomExam);
examRouter.get("/:id", examController.getExam);
examRouter.get("/user/:id", examController.getExamTakes);
examRouter.post("/take/:id", validateSchema(postExamTakeSchema), examController.postExamTake);
examRouter.post("/create", isAdmin, validateSchema(postExamSchema), examController.postExam);

export default examRouter;
