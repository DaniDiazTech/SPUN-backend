import { Router } from "express";
import examController from "../../controllers/exam.controller";

const examRouter = Router();

examRouter.get("/", examController.getExams);
examRouter.get("/:id", examController.getExam);
examRouter.post("/take/:id", examController.postExamTake);
examRouter.get("/user/:id", examController.getExamTakes);
examRouter.post("/create", examController.postExam);

export default examRouter;
