import config from "../../config";
import { utils } from "../../helpers/utils";
import { prisma } from "../../lib/prisma";
import { SignupData, VerifyOTP } from "./auth.interface";
import bcrypt from "bcrypt";

// ------register services
const signup = async (payload: SignupData) => {
  const { name, email, password, profilePhoto } = payload;

  // ---name validatine
  if (!name) {
    throw new Error("Name is required");
  }

  // ---email validatine
  if (!email) {
    throw new Error("Email is required");
  }

  if (!utils.isValidateEmail(email)) {
    throw new Error("Email not valid");
  }

  // ---password validatine
  if (!password) {
    throw new Error("Password is required");
  }

  if (!utils.isValidatePassword(password)) {
    throw new Error("Password not valid");
  }

  //   -------checking if user exist
  const isUserExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (isUserExist) {
    throw new Error("user alredy exist");
  }

  // -----hash password
  const hashedPass = await bcrypt.hash(password, Number(config.salt_round));

  //  otp generate
  const otp = utils.generateOTP();

  //   --------create user
  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPass,
      otp,
      profile: {
        create: {
          profilePhoto,
        },
      },
    },
  });

  //   -------returning user data
  const user = await prisma.user.findUnique({
    where: {
      id: createdUser.id,
    },
    omit: {
      password: true,
    },
    include: {
      profile: true,
    },
  });

  return user;
};

const otpVerify = async (payload: VerifyOTP) => {
  const { email, otp } = payload;

  // ---email validatine
  if (!email) {
    throw new Error("Email is required");
  }

  if (!utils.isValidateEmail(email)) {
    throw new Error("Email not valid");
  }

  const verifiedUser = prisma.user.update({
    where: {
      email,
      otp,
    },
    data: {
      activeStatus: "ACTIVE",
      otp: "",
    },
  });


  if(!verifiedUser){
    throw new Error("Something bad");
  }

  return verifiedUser
};

export const authServices = {
  signup,
  otpVerify,
};
