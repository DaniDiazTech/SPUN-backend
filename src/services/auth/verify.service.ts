import dotenv from "dotenv";
import { AuthSuccessInterface } from "../../types/auth/auth";
import jwt from "jsonwebtoken";
import User from "../../models/users/user";
import { HTTPError } from "../../utils/HTTPError";
import { DecodedTokenInterface } from "../../types/auth/auth";


export const verifyService = async (token: string) => {
  if (!token) throw new HTTPError(401, "No token, authorization denied here");
  const decoded = jwt.verify(
    token,
    process.env.ACCESS_TOKEN
  ) as DecodedTokenInterface;
  if (!decoded) throw new HTTPError(401, "No token, authorization denied");
  const userFound = await User.findById(decoded.id);
  if (!userFound) throw new HTTPError(404, "User not found");
  return {
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    isAdmin: userFound.isAdmin,
    isVerified: userFound.isVerified,
  } as AuthSuccessInterface;
};
