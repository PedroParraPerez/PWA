import { Button, Form, FormProps, Input } from "antd";
import "./home.css";
import { emailValidation } from "../../utils/regexValidations";

type FieldType = {
  email?: string;
  password?: string;
};

const Home = () => {
  const handleSubmit: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const [form] = Form.useForm<FieldType>();

  return (
    <div className="container">
      <Form
        name="login-form"
        form={form}
        initialValues={{ email: "", password: "" }}
        onFinish={handleSubmit}
      >
        <Form.Item<FieldType>
          label="Correo electrónico"
          name="email"
          rules={[
            { required: true, message: "Campo requerido." },
            {
              message: "Correo electrónico inválido.",
              validator: () => {
                const emailFieldValue = form.getFieldValue("email");
                const isEmail = emailValidation(emailFieldValue);
                if (!isEmail) return Promise.reject(new Error("Email Error"));
                return Promise.resolve("Success");
              },
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Contraseña"
          name="password"
          rules={[
            { required: true, message: "Campo requerido." },
            {
              message: "Mínimo 6 caracteres.",
              validator: () => {
                const passwordFieldValue = form.getFieldValue("password");
                console.log({ passwordFieldValue });
                if (passwordFieldValue.lenght < 6) {
                  return Promise.reject(new Error("Password Error"));
                }
                return Promise.resolve("Success");
              },
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{ marginTop: "3px" }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Home;
