import ExamTake from "../../models/exams/examTake";
import { ExamTakeInterface } from "../../types/exam/examTake";

const getExamTakesService = async (user_id:string) => {
    const ExamTakes = await ExamTake.find({ user: user_id}).sort('-createdAt').populate('exam').exec();
    return ExamTakes as ExamTakeInterface[];
};

export default getExamTakesService;
