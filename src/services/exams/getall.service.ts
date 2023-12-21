import exam from "../../models/exams/exam";
import { ExamInterface } from "../../types/exam/exam";

const getExamsService = async () => {
    return await exam.find({}).populate("questionBlocks") as ExamInterface[];
};

export default getExamsService;
