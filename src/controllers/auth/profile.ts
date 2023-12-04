import User from "../../models/users/user";
import ExamTake from "../../models/exams/examTake";

export const profile = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const exams = await ExamTake.find({ user: id }).populate('exam');

    res.status(200).json({
      createdAt: user.createdAt,
      username: user.username, 
      exams: exams,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
