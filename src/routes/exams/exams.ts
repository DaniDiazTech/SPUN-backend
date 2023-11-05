import { Router } from "express";
import getExams from "../../controllers/exams/getExams";
import postExamTake from "../../controllers/exams/postExamTake";

const examRouter = Router();

examRouter.get("/:id", getExams);
examRouter.post("/take/:id", postExamTake);

export default examRouter;
