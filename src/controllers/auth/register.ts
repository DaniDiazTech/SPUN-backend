import { Request, Response } from "express";
import { registerService } from "../../services/auth/register.service";


export const register = async (req:Request, res:Response) => {
  try {
    const data= await registerService(req.body);
    const token = data.token;
  
    res.json({
      id: data.id,
      username: data.username,
      email: data.email,
      isAdmin: data.isAdmin,
      isVerified: data.isVerified
    });

  } catch (err) {
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
