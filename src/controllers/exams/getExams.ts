import mongoose from "mongoose";
import exam from "../../models/exams/exam";
import questionBlock from "../../models/questions/questionBlock";
const getQuestions = async (ids) => {
  const questions = await questionBlock.find({
    _id: {
      $in: ids,
    },
  });
  return questions;
};

/**
 * @param req
 * @param res
 * @returns Json with exam: Exam info, and questions: questionBlock related to Exam
 */
const getExams = async (req, res) => {
  const { id } = req.params;
  // Clears the token
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "Invalid id",
    });
  }

  try {
    const Exam = await exam.findById(id);

    if (!Exam) {
      return res.status(404).json({
        error: "No such exam",
      });
    }
    await Exam.populate("questionBlocks");

    res.status(200).json({
      exam: Exam,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};

export default getExams;
