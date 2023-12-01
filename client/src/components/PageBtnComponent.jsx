import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useAllJobsContext } from "../pages/AllJobs";

const PageBtnComponent = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();

  return (
    <Wrapper>
      <button className="btn prev-btn">
        prev
        <HiChevronDoubleLeft />
      </button>
      <div className="btn-container"></div>
      <button className="btn next-btn">
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
export default PageBtnComponent;
