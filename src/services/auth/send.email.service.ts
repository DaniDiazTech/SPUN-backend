import createAccessToken from "../../utils/auth/accessToken";
import Token from "../../models/auth/token";
import transporter from "../../utils/auth/mailer";
import dotenv from "dotenv";

export const sendEmailService = async (user_id: string, user_email:string) => {
  const tokenEmail = await  createAccessToken({ email: user_id});
  const newToken = new Token({
    token: tokenEmail,
    user: user_id,
  });
  
  const mailOptions = {
    from: {
      name: 'SPUN',
      address: process.env.EMAIL_USER,
      },
    to: user_email,
    subject: 'Verificación de correo electrónico',

    html: `
    <h1 style="color: #000;
    font: sans-serif;
    ">Bienvenido a <span style="color: #10B981">SPUN</span></h1>

    <p style="color: #000;
    font: sans-serif;
    ">Gracias por registrarte en <span style="color: #10B981">SPUN</span>, para poder acceder a tu cuenta debes verificar tu correo electrónico.</p> 
    <a 
    style="color: #10B981;
    font: sans-serif;
    "
    href="${process.env.FRONTEND_URL}/auth/verify-email/${tokenEmail}">Verificar correo electrónico</a>
    `,
    }
  
  await transporter.sendMail(mailOptions);
  await newToken.save();

};
