import { Form, FormProps, Input, Modal } from "antd";
import { LoginFieldType } from "./interfaces";
import { loginValidations } from "./validations";

interface Props {
  showLoginDialog: boolean;
  handleCLoseDialog: () => void;
}

const LoginDialog = (props: Props) => {
  const { showLoginDialog, handleCLoseDialog } = props;

  const handleSubmit: FormProps<LoginFieldType>["onFinish"] = (
    values: LoginFieldType
  ) => {
    console.log("Success:", values);
    setTimeout(() => {
      handleCLoseDialog();
    }, 3000);
  };

  const [form] = Form.useForm<LoginFieldType>();

  return (
    <>
      <Modal
        open={showLoginDialog}
        className="login-dialog-container"
        onCancel={handleCLoseDialog}
        onOk={handleSubmit}
        okText="Iniciar Sesión"
        cancelText="Cancelar"
        closeIcon={null}
        okType="primary"
      >
        <Form
          name="login-form"
          form={form}
          initialValues={{ email: "", password: "" }}
          onFinish={handleSubmit}
        >
          <Form.Item<LoginFieldType>
            label="Correo electrónico"
            name="email"
            rules={loginValidations(form).email}
          >
            <Input />
          </Form.Item>

          <Form.Item<LoginFieldType>
            label="Contraseña"
            name="password"
            rules={loginValidations(form).password}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LoginDialog;
