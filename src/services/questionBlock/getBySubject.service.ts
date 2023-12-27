import questionBlock from "../../models/questions/questionBlock";
import {QuestionBlockInterface} from "~/types/questionBlock/questionBlock";

const getQuestionsBySubjectService = async (subject:string) => {
    const allQuestions= await questionBlock.find({subject:subject}).exec();
    return allQuestions as QuestionBlockInterface[];
}

export default getQuestionsBySubjectService;