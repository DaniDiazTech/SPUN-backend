import { UserRegisterInterface, AuthSuccessInterface } from "../../types/auth/auth";
import User from "../../models/users/user";
import { HTTPError } from "../../utils/HTTPError";
import bcrypt from "bcrypt";
import createAccessToken from "../../utils/auth/accessToken";
import { sendEmailService } from "./send.email.service";

export const registerService = async (user: UserRegisterInterface) => {
  const userFoundByEmail = await User.findOne({ email: user.email });
  const userFoundByUsername = await User.findOne({ username: user.username });

  if (userFoundByEmail) throw new HTTPError(400, "El correo electrónico ya está en uso");
  if (userFoundByUsername) throw new HTTPError(400, "El nombre de usuario ya está en uso");
  // Encrypts the password
  const passwordHash = await bcrypt.hash(user.password, 10);

  const newUser = new User({
    ...user,
    password: passwordHash,
  });
  const savedUser = await newUser.save();
  const token = await createAccessToken({ id: savedUser._id });

  await sendEmailService(savedUser._id.toString(), savedUser.email, "Verificar correo electrónico", `
  <h1 style="color: #000;
  font: sans-serif;
  ">Bienvenido a <span style="color: #10B981">SPUN</span></h1>

  <p style="color: #000;
  font: sans-serif;
  ">Gracias por registrarte en <span style="color: #10B981">SPUN</span>, para poder acceder a tu cuenta debes verificar tu correo electrónico.</p>`,);
  
  return {
    token,
    id: savedUser._id,
    username: savedUser.username,
    email: savedUser.email,
    isAdmin: savedUser.isAdmin,
    isVerified: savedUser.isVerified
  } as AuthSuccessInterface;
};
