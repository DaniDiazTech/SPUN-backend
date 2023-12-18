import { profile } from './auth/profile';
import { login } from "./auth/login";
import { logout } from "./auth/logout";
import { register } from "./auth/register";
import { verify } from "./auth/verify";

const authController = {
    login,
    logout,
    register,
    verify,
    profile,
};

export default authController;
