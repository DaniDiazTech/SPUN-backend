import { verifyService } from "../../services/auth/verify.service";

export const verify = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const data = await verifyService(token);
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