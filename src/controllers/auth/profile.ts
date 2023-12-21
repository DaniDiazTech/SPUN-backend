import { profileService } from "../../services/auth/profile.service";
import { Request, Response } from "express";

export const profile = async (req: Request, res: Response) => {
  try {
    const data = await profileService(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
