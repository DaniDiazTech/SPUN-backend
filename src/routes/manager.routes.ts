import { Router } from "express";
import authRouther from "./auth/auth.routes";
import examRouter from "./exams/exams.routes";
import questionBlockRouter from "./questionBlock/questionBlock.routes";
const router_manager = Router();

router_manager.use("/auth", authRouther);
router_manager.use("/exam", examRouter);
router_manager.use("/questionBlock", questionBlockRouter);

export default router_manager;
