import { EMAIL_REGEX } from "../constants/regex";

export const emailValidation = (email?: string): boolean => {
  if (!email) return false;
  return EMAIL_REGEX.test(email);
};
