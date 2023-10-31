import bcrypt from "bcrypt";
import { createAccessToken } from "../../utils/auth/accessToken";
import userModel from "../../models/users/user";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await userModel.findOne({ email });

    if (userFound) {
      const isMatch = await bcrypt.compare(password, userFound.password);

      /*
        Verifies user exists   
      */
      if (isMatch) {
        const token = await createAccessToken({ id: userFound._id });

        res.cookie("token", token);
        res.status(200).json({
          id: userFound._id,
          username: userFound.username,
          email: userFound.email,
          createdAt: userFound.createdAt,
          updatedAt: userFound.updatedAt,
        });
      } else {
        res.status(400).json({ message: "Incorrect password" });
      }
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
