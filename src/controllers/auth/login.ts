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
      isAdmin: data.isAdmin,
      isVerified: data.isVerified
    });
  }catch (err) {
    if (err.status!==undefined) {
      return res.status(err.status).json({
        err: err.message,
      });
    }
    return res.status(500).json({
      err: err.message,
    });
  }

};