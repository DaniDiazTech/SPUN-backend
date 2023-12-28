import { Router } from "express";
import examController from "../../controllers/exam.controller";
import { isAdmin } from "../../middlewares/auth";
const examRouter = Router();

examRouter.get("/", examController.getExams);
examRouter.get("/random", examController.getRandomExam);
examRouter.get("/:id", examController.getExam);
examRouter.get("/user/:id", examController.getExamTakes);
examRouter.post("/take/:id", examController.postExamTake);

examRouter.post("/create", isAdmin, examController.postExam);

export default examRouter;
