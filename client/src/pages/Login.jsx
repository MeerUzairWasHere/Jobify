import { Form, redirect, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // const errors = { msg: " " };
  // if (data.password.length < 3) {
  //   errors.msg = "password too short";
  //   return errors;
  // }
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>login</h4>

        <FormRow
          type="email"
          name="email"
          defaultValue="meer.uxair007@gmail.com"
        />
        <FormRow type="password" name="password" defaultValue="191123_Khair." />
        <SubmitBtn />
        <button type="button" className="btn btn-block">
          Explore the app
        </button>
      </Form>
    </Wrapper>
  );
};
export default Login;
