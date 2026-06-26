export interface SignupData {
  name: string;
  email: string;
  password: string;
  profilePhoto: string;
}

export interface VerifyOTP {
  email: string;
  otp: string;
}
