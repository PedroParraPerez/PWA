import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Formato de email invalido. (Ejemplo: usuario@gmail.com)")
    .required("Requerido"),

  password: Yup.string()
    .max(10, "Máximo de 10 caracteres")
    .min(6, "Mínimo de 6 caracteres")
    .required("Requerido"),
});

export default loginValidationSchema;
