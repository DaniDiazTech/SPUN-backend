import questionBlock from "../../models/questions/questionBlock";
import { HTTPError } from "../../utils/HTTPError";
import { QuestionBlockCreateInterface, QuestionBlockInterface} from "../../types/questionBlock/questionBlock";

const postQuestionBlockService = async (newQuestionBlock: QuestionBlockCreateInterface) => {
    const QuestionBlock = new questionBlock({
        subject: newQuestionBlock.subject,
        questions: newQuestionBlock.questions,
        content: newQuestionBlock.content,
        image: newQuestionBlock.image,
    });
    if (!QuestionBlock) throw new HTTPError(500, "Error creating questionBlock");
    const result=await QuestionBlock.save();
    if (!result) throw new HTTPError(500, "Error saving questionBlock");
    return await QuestionBlock.populate("questions") as QuestionBlockInterface;
}

export default postQuestionBlockService;