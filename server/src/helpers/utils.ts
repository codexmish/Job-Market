// ---email razex
function isValidateEmail(email: string) {
  const emailRagex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRagex.test(email);
}

// ---password razex
function isValidatePassword(password: string) {
  const passwordRagex = /^.{6,}$/;
  return passwordRagex.test(password);
}

export const utils = {
  isValidateEmail,
  isValidatePassword,
};
