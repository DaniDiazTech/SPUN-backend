import questionBlock from "../../models/questions/questionBlock";
import { QuestionBlockInterface, QuestionBlockUpdateInterface } from "../../types/questionBlock/questionBlock";
import { HTTPError } from "../../utils/HTTPError";

const updateQuestionBlockService = async (_id:string, questionBlockUpdate: QuestionBlockUpdateInterface) => {
    console.log(_id);
    const QuestionBlock= await questionBlock.findOneAndUpdate(
        { _id:_id },
        questionBlockUpdate,
    ).exec();
    if (!QuestionBlock) throw new HTTPError(404, "Question block not found");
    return QuestionBlock as QuestionBlockInterface;
};

export default updateQuestionBlockService;