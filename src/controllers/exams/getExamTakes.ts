import ExamTake from "../../models/exams/examTake";

const getExamTakes = async (req, res) => {
  const { id } = req.params;

  try {
    const ExamTakes = await ExamTake.find({ user: id });

    res.status(200).json({ examTakes: ExamTakes });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};

export default getExamTakes;
