import questionBlock from "../../models/questions/questionBlock";
import { QuestionBlockInterface } from "../../types/questionBlock/questionBlock";

const getQuestionsService = async () => {
    return await questionBlock.find({}) as QuestionBlockInterface[];
};

export default getQuestionsService;
