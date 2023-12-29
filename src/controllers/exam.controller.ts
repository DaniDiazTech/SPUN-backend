import getExam from "./exams/getExam";
import getExams from "./exams/getExams";
import postExamTake from "./exams/postExamTake";
import getExamTakes from "./exams/getExamTakes";
import postExam from "./exams/postExam";
import getRandomExam from "./exams/getRandomExam";

const examController = {
    getExam,
    getExams,
    postExamTake,
    getExamTakes,
    postExam,
    getRandomExam,
};

export default examController;
