import { Request, Response } from "express";
import { authServices } from "./auth.services";

// -----register controller
const signup = async (req: Request, res: Response) => {
  const user = await authServices.signup(req.body);
};

export const authController = {
  signup,
};
