import bcrypt from "bcrypt";

import createAccessToken from "../../utils/auth/accessToken";
import User from "../../models/users/user";
import { HTTPError } from "../../utils/HTTPError";
import { AuthSuccessInterface, UserLoginInterface } from "~/types/auth/auth";

export const loginService = async (user: UserLoginInterface) => {
  const userFound = await User.findOne({ email: user.email});
  // Checks if the user exists
  if (!userFound) throw new HTTPError(400, "Usuario no encontrado");
  const isMatch = await bcrypt.compare(user.password, userFound.password);
  // Checks if the password matches
  if (!isMatch) throw new HTTPError(400, "Contraseña incorrecta");
  const token = await createAccessToken({ id: userFound._id });
  return {
    token,
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
  } as AuthSuccessInterface;
};
