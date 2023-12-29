import questionBlock from "../../models/questions/questionBlock";
import { QuestionBlockInterface } from "../../types/questionBlock/questionBlock";
import { HTTPError } from "../../utils/HTTPError";
const deleteQuestionBlockService = async (_id: string) => {
    const QuestionBlock= questionBlock.findById(_id);
    if (!QuestionBlock) throw new HTTPError(404, "Question block not found");
    const questionBlockDeleted = await questionBlock.findByIdAndDelete(_id);
    if (!questionBlockDeleted) throw new HTTPError(404, "Question block not found");
    return QuestionBlock;
};

export default deleteQuestionBlockService;