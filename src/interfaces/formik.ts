import { FieldInputProps, FormikProps, FormikValues } from "formik";

export interface FormikFieldProps {
  field: FieldInputProps<string>;
  form: FormikProps<FormikValues>;
}
