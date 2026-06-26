import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();

router.post("/signup", authController.signup);
router.post("/otp-verify", authController.otpVerify)

export const authRouter = router;