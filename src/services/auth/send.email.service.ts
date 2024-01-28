import createAccessToken from "../../utils/auth/accessToken";
import Token from "../../models/auth/token";
import transporter from "../../utils/auth/mailer";
import dotenv from "dotenv";
dotenv.config();

export const sendEmailService = async (user_id: string, user_email:string, service:string, subject:string, content:string) => {
  //checks if there is a token for this user
  const token = await Token.findOne({ user: user_id });
  console.log(token);
  if (token) throw new Error("No se puede enviar otro correo electrónico");
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
    subject: subject,

    html: content + `<a
    style="color: #10B981;
    font: sans-serif;
    "
    href="${process.env.FRONTEND_URL}/auth/${service}/${tokenEmail}">Haz click aquí.</a>
  `
  }
  
  await transporter.sendMail(mailOptions);
  await newToken.save();

};
