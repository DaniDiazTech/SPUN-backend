import User from "../../models/users/user";
import { HTTPError } from "../../utils/HTTPError";
import Token from "../../models/auth/token";

export const verifyEmailService = async (token_str: string) => {
    const token=await Token.findOne({token:token_str});
    if(!token) throw new HTTPError(400,"No existe ningún token");
    const user=await User.findById(token.user);
    if(!user) throw new HTTPError(400,"No existe ningún usuario asociado a este token");
    user.isVerified=true;
    await user.save();
    await token.deleteOne();
    return user._id;
};
