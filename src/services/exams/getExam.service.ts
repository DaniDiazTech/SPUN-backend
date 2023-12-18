import exam from "../../models/exams/exam";
import { ExamInterface } from "../../types/exam/exam";

const getExamService = async (_id:string) => {
    const Exam=await exam.findById(_id).populate("questionBlocks").exec();
    if (!Exam) throw { status: 404, message: "Exam not found" };
    return Exam as ExamInterface;
};

export default getExamService;
