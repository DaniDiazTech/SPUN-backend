import mongoose from "mongoose";
import user from '../../models/users/user'
import examTake from '../../models/exams/examTake'
import exam from "../../models/exams/exam";
const postExamTake = async (req, res) => {
  // Id of respective exam
  const { id } = req.params;
  // Answers array is passed from body
  const { answers, startExam, endExam, email } = req.body;
  try {
    const userFound = await user.findOne({ email: email });
    const examFound = await exam.findById(id);
    if (!examFound){
      return res.status(404).json({
        error: "Exam not found"
      })
    }
    // Checks if the user exists
    if (!userFound){
      return res.status(400).json({ message: "User not found" });
    }

    // Percentage
    let score = 0;
    
    examTake.create(
      {
        exam: examFound,
        answers: answers,
        startExam: startExam,
        endExam: endExam,
        user: userFound,
        score: score,
      }
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default postExamTake;
