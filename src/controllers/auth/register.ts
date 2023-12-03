import bcrypt from "bcrypt";

import { ExtractValueFunction, UserInterface } from "../../types";
import { BSTTree } from "../../utils/data-structures/BSTTree";
import createAccessToken from "../../utils/auth/accessToken";
import User from "../../models/users/user";

export const register = async (req, res) => {
  const { firstName, lastName, username, email, password, isAdmin } = req.body;

  const extractEmail: ExtractValueFunction<UserInterface> = (a) => a.email;
  const extractUsername: ExtractValueFunction<UserInterface> = (a) => a.username;

  let usersTree: BSTTree<UserInterface> = new BSTTree<UserInterface>(extractEmail);

  try {
    const allUsers = await User.find();
    allUsers.forEach((user) => {
      usersTree.insertBST(user);
    })

    const userFoundByEmail = usersTree.findBST(email, extractEmail);
    const userFoundByUsername = usersTree.findBST(username, extractUsername);

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
