import { Form, Formik } from "formik";
import "./home.css";
import FormikField from "../../components/common/formik/FormikField";
import { loginValidationSchema } from "../../constants/validationSchemas";

const Home = () => {
  return (
    <div className="container">
      <Formik
        onSubmit={console.log}
        validationSchema={loginValidationSchema}
        initialValues={{ password: "", email: "" }}
      >
        <Form className="login-form">
          <h2>Iniciar Sesión</h2>
          <div className="input-group">
            <FormikField
              label={"Correo electrónico"}
              name="email"
              placeHolder="ejemplo@correo.com"
            />
          </div>
          <div className="input-group">
            <FormikField
              label={"Contraseña"}
              name="password"
              placeHolder="••••••••"
            />
          </div>
          <button type="submit" className="btn">
            Entrar
          </button>
          <div className="links">
            <p>¿Olvidaste tu contraseña?</p>
            <p>Regístrate</p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Home;
