import exam from "../../models/exams/exam";
import { ExamInterface } from "../../types/exam/exam";
import { QuestionBlockInterface } from "../../types/questionBlock/questionBlock";
import getQuestionsBySubjectRandomService from "../questionBlock/getBySubjectRandom.service";
import Alghoritms from "../../utils/Alghoritms";

const getRandomExamService = async (subject:string, n_str:string) => {
    const n=parseInt(n_str, 10);
    const randomQuestions:QuestionBlockInterface[]=await getQuestionsBySubjectRandomService(subject, n); // get n random questions blocks
    const weights:number[]=[];
    for (let i=0; i<randomQuestions.length; i++) {
        weights.push(randomQuestions[i].questions.length);
    }// get weights for each question block, the weight is the number of questions in the question block
    const goal=n; // the goal is to get n questions
    const selectedQuestions:QuestionBlockInterface[]=await Alghoritms.knapsack(randomQuestions, weights, goal); // get the selected questions
    const examObject={
        title: "Examen aleatorio de "+subject,
        description: "Examen aleatorio de "+subject+" con "+n+" preguntas",
        questionBlocks: selectedQuestions,
        subject: subject,
        isSimulacrum: false
    };
    const newExam=await exam.create(examObject); // create the exam
    return newExam as ExamInterface;
};

export default getRandomExamService;
