import {QuestionBlockInterface} from "~/types/questionBlock/questionBlock";
import getQuestionsBySubjectService from "./getBySubject.service";
import getNumberQuestionsBySubject from "./getNumberQuestions.service";
import Alghoritms from "../../utils/Alghoritms";
import { HTTPError } from "../../utils/HTTPError";

const getQuestionsBySubjectRandomService = async (subject: string, n: number) => {
    //Its neccesary to check if n is greater than the number of questions in the subject
    if(n>await getNumberQuestionsBySubject(subject)) throw new HTTPError(400, "No hay suficientes preguntas para crear el examen");
    const allQuestionsBlocks = await getQuestionsBySubjectService(subject);
    const randomQuestionsBlocks: QuestionBlockInterface[] = await Alghoritms.Fisher_Yates(allQuestionsBlocks);
    // Take the first n elements if n is greater than the array length slice will return the whole array
    return randomQuestionsBlocks.slice(0, n) as QuestionBlockInterface[];
  };

export default getQuestionsBySubjectRandomService;