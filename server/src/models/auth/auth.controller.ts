import { Request, Response } from "express";
import { authServices } from "./auth.services";
import sendRes from "../../helpers/SendResponse";
import httpStatus from "http-status";

// -----register controller
const signup = async (req: Request, res: Response) => {
  try {
    const user = await authServices.signup(req.body);

    sendRes(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "user created successfully",
      data: user,
    });
  } catch (error: any) {
    sendRes(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error.message,
    });
  }
};

export const authController = {
  signup,
};
