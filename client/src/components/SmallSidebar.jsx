import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";

const SmallSidebar = () => {
  const { isDarkTheme } = useDashboardContext();
  return <Wrapper>SmallSidebar</Wrapper>;
};
export default SmallSidebar;
