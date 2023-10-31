import bcrypt from "bcrypt";
import { createAccessToken } from "../../utils/auth/accessToken";
import userModel from "../../models/users/user";

export const register = async (req, res) => {
  const { firstName, lastName, username, email, password, isAdmin } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      firstName,
      lastName,
      username,
      email,
      password: passwordHash,
      isAdmin,
    });

    const savedUser = await newUser.save();
    const token = await createAccessToken({ id: savedUser._id });

    res.cookie("token", token);
    res.json({
      id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      isAdmin: isAdmin,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }

};
