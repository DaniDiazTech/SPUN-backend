import User from "../../models/users/user";
import ExamTake from "../../models/exams/examTake";
import { profileService } from "../../services/auth/profile.service";

export const profile = async (req, res) => {
  try {
    const data = await profileService(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
