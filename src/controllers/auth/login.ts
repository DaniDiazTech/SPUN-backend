import { loginService } from "../../services/auth/login.service";
import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  try {
    const data= await loginService(req.body);
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
  }catch (err) {
    res.status(err.status).json({ message: err.message });
  }

};