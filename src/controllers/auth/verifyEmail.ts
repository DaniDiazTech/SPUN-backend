import { verifyEmailService } from "../../services/auth/verify.email.service";

export const verifyEmail = async (req, res, next) => {
  try {
    const token = req.params.token;
    const data = await verifyEmailService(token);
    res.json(
      {
        user_id: data,
      },
    );
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
