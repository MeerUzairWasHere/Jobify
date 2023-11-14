import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>login</h4>

        <FormRow
          type="email"
          name="email"
          defaultValue="meer.uxair007@gmail.com"
        />
        <FormRow type="password" name="password" defaultValue="191123_Khair." />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button type="button" className="btn btn-block">
          Explore the app
        </button>
      </form>
    </Wrapper>
  );
};
export default Login;
