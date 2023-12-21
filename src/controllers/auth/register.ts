import { Request, Response } from "express";
import { registerService } from "../../services/auth/register.service";


export const register = async (req:Request, res:Response) => {
  try {
    const data= await registerService(req.body);
    const token = data.token;
    res.cookie("token", token, {
      httpOnly: false,
      secure: true,
      sameSite: "none",
    });
    res.json({
      id: data.id,
      username: data.username,
      email: data.email,
    });

  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
