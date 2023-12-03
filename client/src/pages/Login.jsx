import { Form, redirect, Link, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.post("/auth/login", data);
      queryClient.invalidateQueries()
      toast.success("Login successful");
      return redirect("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const Login = () => {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: "testuser@gmail.com",
      password: "testuser@gmail.com",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("Take a test drive!");
      return navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>login</h4>

        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <SubmitBtn />

        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          Explore the app
        </button>
      </Form>
    </Wrapper>
  );
};
export default Login;
