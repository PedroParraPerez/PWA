import { FormInstance } from "antd";
import { LoginFieldType } from "./interfaces";
import { emailValidation } from "../../utils/regexValidations";
import { Rule } from "antd/es/form";

export const loginValidations = (
  form: FormInstance<LoginFieldType>
): Record<"email" | "password", Rule[]> => ({
  email: [
    { required: true, message: "Campo requerido." },
    {
      message: "Correo electrónico inválido.",
      validator: () => {
        const emailFieldValue = form.getFieldValue("email");
        if(!emailFieldValue) return Promise.resolve("Success");
        const isEmail = emailValidation(emailFieldValue);
        if (!isEmail) return Promise.reject(new Error("Email Error"));
        return Promise.resolve("Success");
      },
    },
  ],
  password: [
    { required: true, message: "Campo requerido." },
    {
      message: "Mínimo 6 caracteres.",
      validator: () => {
        const passwordFieldValue = form.getFieldValue("password");
        if(!passwordFieldValue) return Promise.resolve("Success");
        if (passwordFieldValue.length < 6) {
          return Promise.reject(new Error("Password Error"));
        }
        return Promise.resolve("Success");
      },
    },
  ],
});
