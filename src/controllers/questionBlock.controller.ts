import getQuestionsBySubject from "./questionBlock/getQuestionsBlocksBySubject";
import getQuestionBlocks from "./questionBlock/getQuestionsBlocks";
import getQuestionBlock from "./questionBlock/getQuestionBlock";
import postQuestionBlock from "./questionBlock/postQuestionBlock";
import updateQuestionBlock from "./questionBlock/updateQuestionBlock";
import deleteQuestionBlock from "./questionBlock/deleteQuestionBlock";

const QuestionBlockController = {
    getQuestionBlocks,
    getQuestionBlock,
    getQuestionsBySubject,
    postQuestionBlock,
    updateQuestionBlock,
    deleteQuestionBlock,
}

export default QuestionBlockController;