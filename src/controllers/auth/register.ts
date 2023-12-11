import bcrypt from "bcrypt";

import createAccessToken from "../../utils/auth/accessToken";
import User from "../../models/users/user";

export const register = async (req, res) => {
  const { firstName, lastName, username, email, password, isAdmin } = req.body;

  try {
    const userFoundByEmail = await User.findOne({ email });
    const userFoundByUsername = await User.findOne({ username });

    if (userFoundByEmail) {
      return res.status(400).json(["El correo ya está en uso"]);
    }
    if (userFoundByUsername) {
      return res.status(400).json(["El username ya está en uso"]);
    }

    // Encrypts the password
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password: passwordHash,
      isAdmin,
    });

    const savedUser = await newUser.save();
    const token = await createAccessToken({ id: savedUser._id });

    res.cookie("token", token, {
      httpOnly: false,
      secure: true,
      sameSite: "none",
    });
    res.json({
      id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
