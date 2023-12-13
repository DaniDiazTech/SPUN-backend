import exam from "../../models/exams/exam";
import { ExamInterface } from "../../types/exam/exam";

const getExamsService = async () => {
    return await exam.find({}) as ExamInterface[];
};

export default getExamsService;
