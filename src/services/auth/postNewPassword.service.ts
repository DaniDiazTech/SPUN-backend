import { HTTPError } from "../../utils/HTTPError";
import { AuthSuccessInterface } from "~/types/auth/auth";
import { verifyEmailService } from "./verify.email.service";
import User from "../../models/users/user";
import bcrypt from "bcrypt";

export const postNewPasswordService = async (
  token_str: string,
  new_password
) => {
  const id = await verifyEmailService(token_str);
  const user = await User.findById(id);
  if (!user)
    throw new HTTPError(400, "No existe ningún usuario asociado a este token");
  const passwordHash = await bcrypt.hash(new_password.password, 10);
  user.password = passwordHash;
  await user.save();
  return {
    token: token_str,
    id: user._id,
    username: user.username,
    email: user.email,
    isAdmin: user.isAdmin,
    isVerified: user.isVerified,
  } as AuthSuccessInterface;
};
