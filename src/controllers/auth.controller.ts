import { profile } from './auth/profile';
import { login } from "./auth/login";
import { logout } from "./auth/logout";
import { register } from "./auth/register";
import { verify } from "./auth/verify";
import { verifyEmail } from "./auth/verifyEmail";
import {forgotPassword} from "./auth/forgotPassword";
import postNewPassword from "./auth/postNewPassword";

const authController = {
    login,
    logout,
    register,
    verify,
    profile,
    verifyEmail,
    forgotPassword,
    postNewPassword
};

export default authController;
