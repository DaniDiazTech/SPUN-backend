import { profileService } from "../../services/auth/profile.service";
import { Request, Response } from "express";

export const profile = async (req: Request, res: Response) => {
  try {
    const data = await profileService(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    if (err.status !== undefined) {
      return res.status(err.status).json({
        err: err.message,
      });
    }
    return res.status(500).json({
      err: err.message,
    });
  }
};
