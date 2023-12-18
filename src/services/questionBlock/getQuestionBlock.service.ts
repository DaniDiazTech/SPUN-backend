import questionBlock from "../../models/questions/questionBlock";
import { HTTPError } from "../../utils/HTTPError";
import { QuestionBlockInterface } from "../../types/questionBlock/questionBlock";

const getQuestionBlockService = async (_id: string) => {
    const QuestionBlock= await questionBlock.findById(_id);
    if (!QuestionBlock) throw new HTTPError(404, "Question block not found");
    return QuestionBlock as QuestionBlockInterface;
};

export default getQuestionBlockService;
