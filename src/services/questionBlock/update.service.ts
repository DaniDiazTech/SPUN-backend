import questionBlock from "../../models/questions/questionBlock";
import { QuestionBlockInterface, QuestionBlockUpdateInterface } from "../../types/questionBlock/questionBlock";
import { HTTPError } from "../../utils/HTTPError";

const updateQuestionBlockService = async (_id:string, questionBlockUpdate: QuestionBlockUpdateInterface) => {
    const QuestionBlock= await questionBlock.findOneAndUpdate(
        { _id:_id },
        questionBlockUpdate,
    ).exec();
    if (!QuestionBlock) throw new HTTPError(404, "Something went wrong updating the question block");
    const newQuestionBLock= await questionBlock.findById(_id);
    return newQuestionBLock as QuestionBlockInterface;
};

export default updateQuestionBlockService;