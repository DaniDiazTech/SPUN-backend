import {QuestionBlockInterface} from "~/types/questionBlock/questionBlock";
import getQuestionsBySubject from "../../services/questionBlock/getBySubject.service";

const getNumberQuestionsBySubject = async (subject:string) => {
    const questionBlocksBySubject:QuestionBlockInterface[]=await getQuestionsBySubject(subject);
    let numberQuestions=0;
    for (let i=0; i<questionBlocksBySubject.length; i++) {
        numberQuestions+=questionBlocksBySubject[i].questions.length;
    }
    return numberQuestions;
};

export default getNumberQuestionsBySubject;