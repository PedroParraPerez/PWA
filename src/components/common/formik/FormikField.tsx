import { Field } from "formik";
import { FormikFieldProps } from "../../../interfaces/formik";
import "./formikField.css";

interface Props {
  name: string;
  label?: string;
  placeHolder?: string;
}

const FormikField = (props: Props) => {
  const { label = "", name, placeHolder } = props;
  return (
    <Field name={name}>
      {({ field, form }: FormikFieldProps) => {
        const { errors, touched } = form;

        const hasError = !!errors[name] && touched[name];

        const onChangeWithError = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (hasError) form.setFieldTouched(name, false);
          field.onChange(e);
        };

        return (
          <>
            <label>
              {label}
              <input
                {...field}
                value={field.value}
                className={hasError ? "label-error" : ""}
                placeholder={placeHolder}
                name={field.name}
                onChange={onChangeWithError}
              />
            </label>
            {hasError && (
              <p className="error-text">{(errors[name] as string) || ""}</p>
            )}
          </>
        );
      }}
    </Field>
  );
};

export default FormikField;
