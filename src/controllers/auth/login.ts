import { loginService } from "../../services/auth/login.service";

export const login = async (req, res) => {
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