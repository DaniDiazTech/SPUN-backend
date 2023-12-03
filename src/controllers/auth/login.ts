import bcrypt from "bcrypt";

import { ExtractValueFunction, UserInterface } from "../../types";
import { BSTTree } from "../../utils/data-structures/BSTTree";
import createAccessToken from "../../utils/auth/accessToken";
import User from "../../models/users/user";

export const login = async (req, res) => {
  const { email, password } = req.body;

  const extractEmail: ExtractValueFunction<UserInterface> = (a) => a.email;

  let usersTree: BSTTree<UserInterface> = new BSTTree<UserInterface>(extractEmail);

  try {
    const allUsers = await User.find();
    allUsers.forEach((user) => {
      usersTree.insertBST(user);
    })
    
    const userFound = usersTree.findBST(email, extractEmail)

    // Checks if the user exists
    if (userFound) {
      const isMatch = await bcrypt.compare(password, userFound.password);

      // Checks if the password matches
      if (isMatch) {
        const token = await createAccessToken({ id: userFound._id });

        res.cookie("token", token, {
          httpOnly: false,
          secure: true,
          sameSite: "none",
        });
        res.status(200).json({
          id: userFound._id,
          username: userFound.username,
          email: userFound.email,
        });
      } else {
        res.status(400).json(["Contraseña incorrecta"]);
      }
    } else {
      res.status(400).json(["Usuario no encontrado"]);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
