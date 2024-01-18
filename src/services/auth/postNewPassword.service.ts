import User from "../../models/users/user";
import { HTTPError } from "../../utils/HTTPError";
import Token from "../../models/auth/token";
import { UserLoginInterface, AuthSuccessInterface } from "~/types/auth/auth";
import { verifyEmailService } from "./verify.email.service";

export const postNewPasswordService = async (
  token_str: string,
  userData: UserLoginInterface
) => {
  const user = await User.findOne({ email: userData.email });
  if (!user)
    throw new HTTPError(400, "No existe ningún usuario asociado a este token");
  await verifyEmailService(token_str);
  user.password = userData.password;
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
