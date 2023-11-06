import { Router } from "express";
import getExam from "../../controllers/exams/getExam";
import getExams from "../../controllers/exams/getExams";
import postExamTake from "../../controllers/exams/postExamTake";

const examRouter = Router();

examRouter.get("/", getExams)
examRouter.get("/:id", getExam);
examRouter.post("/take/:id", postExamTake);

export default examRouter;
