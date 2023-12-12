import User from "../../models/users/user";
import ExamTake from "../../models/exams/examTake";

import { HTTPError } from "../../utils/HTTPError";

export const profileService = async (id: string) => {
  const user = await User.findOne({ _id: id });
  if (!user) throw new HTTPError(404, "User not found");
  const exams = await ExamTake.find({ user: id })
    .sort("-createdAt")
    .populate("exam");
  return {
    createdAt: user.createdAt,
    username: user.username,
    exams: exams,
  };
};
