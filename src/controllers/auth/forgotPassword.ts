import {forgotPasswordService} from '../../services/auth/forgot.password.service';

export const forgotPassword = async (req, res, next) => {
  try {
    const data = await forgotPasswordService(req.params.email);
    res.json({
        message: data.message,
    }
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
