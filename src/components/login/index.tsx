import { useFormik } from "formik";
import { getInitalValues, validationSchema } from "./formHelper";

function Login() {
  const formik = useFormik({
    initialValues: getInitalValues({ email: '', password: '' }),
    validate: validationSchema,
    onSubmit: () => { }
  });

  return (
    <div>
      Login Page
    </div>
  );
}

export default Login;
