import { Request, Response } from "express";
import { postNewPasswordService } from "../../services/auth/postNewPassword.service";

const postNewPassword = async (req:Request, res:Response) => {
  try {
    const data = await postNewPasswordService(req.params.token,req.body);
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

export default postNewPassword;