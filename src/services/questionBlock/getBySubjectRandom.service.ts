import {QuestionBlockInterface} from "~/types/questionBlock/questionBlock";
import getQuestionsBySubjectService from "./getBySubject.service";

const getQuestionsBySubjectRandomService = async (subject:string, n:number) => {
    const allQuestions= await getQuestionsBySubjectService(subject);

    const randomQuestions:QuestionBlockInterface[]=[];
    const randomIndexes:number[]=[];
    while (randomIndexes.length<n) {
        const randomIndex=Math.floor(Math.random()*allQuestions.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
            randomQuestions.push(allQuestions[randomIndex]);
        }
    }
    return randomQuestions as QuestionBlockInterface[];
}

export default getQuestionsBySubjectRandomService;