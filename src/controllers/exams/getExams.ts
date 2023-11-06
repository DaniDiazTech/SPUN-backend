import exam from "../../models/exams/exam";

/**
 * @param req
 * @param res
 * @returns Json with all exams to take
 */
const getExams = async (req, res) => {

  try {
    const Exams = await exam.find({});

    res.status(200).json({
      exams: Exams,
    });
    
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};

export default getExams;
