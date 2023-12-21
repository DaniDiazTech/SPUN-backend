import { verifyService } from "../../services/auth/verify.service";

export const verify = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const data = await verifyService(token);
    res.json(data);
  }catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
