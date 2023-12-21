import exam from "../../models/exams/exam";
import { HTTPError } from "../../utils/HTTPError";
import { ExamCreateInterface, ExamInterface} from "../../types/exam/exam";
import verifyIdsService from "../questionBlock/verifyIds.service";
import verifySubjects from "../questionBlock/verifySubjects.service";

const postExamService = async (newExam: ExamCreateInterface) => {
  await verifyIdsService(newExam.questionBlocks);
  await verifySubjects(newExam.questionBlocks,newExam.subject);
  const Exam = new exam({
    title: newExam.title,
    description: newExam.description,
    questionBlocks: newExam.questionBlocks,
    subject: newExam.subject,
    isSimulacrum: newExam.isSimulacrum,
  });
  if (!Exam) throw new HTTPError(500, "Error creating exam");
  const result=await Exam.save();
  if (!result) throw new HTTPError(500, "Error saving exam");
  return await Exam.populate("questionBlocks") as ExamInterface;
};

export default postExamService;
