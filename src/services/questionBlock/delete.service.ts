import questionBlock from "../../models/questions/questionBlock";
import { QuestionBlockInterface } from "../../types/questionBlock/questionBlock";

const deleteQuestionBlockService = async (_id: string) => {
    const QuestionBlock= await questionBlock.findById(_id);
    const questionBlockDeleted = await questionBlock.findByIdAndDelete(_id);
    if (!questionBlockDeleted) throw new Error('Error deleting question block');
    return QuestionBlock as QuestionBlockInterface;
};

export default deleteQuestionBlockService;