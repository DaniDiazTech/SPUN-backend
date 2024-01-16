import User from "../../models/users/user";
import { HTTPError } from "../../utils/HTTPError";
import { sendEmailService } from "./send.email.service";


export const forgotPasswordService = async (user_email:string) => {
  const user= await User.findOne({email:user_email});
  if(!user) throw new HTTPError(400,"No existe ningún usuario con este correo electrónico");

  await sendEmailService(
    user._id.toString(),
    user.email,
    "Restablecer contraseña",
    `<h1 style="color: #000;
  font: sans-serif;
  ">Bienvenido a <span style="color: #10B981">SPUN</span></h1>

  <p style="color: #000;
  font: sans-serif;
  ">Gracias por registrarte en <span style="color: #10B981">SPUN</span>, para poder acceder a tu cuenta debes verificar tu correo electrónico.</p>`);

  return {
    message:"Se ha enviado un correo electrónico para restablecer la contraseña"
  };
  
};
