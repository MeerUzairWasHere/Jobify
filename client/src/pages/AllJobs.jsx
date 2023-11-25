import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const allJobsContext = createContext();

const AllJobs = () => {
  const { data } = useLoaderData();
  return (
    <allJobsContext.Provider value={{ data }}>
      <SearchContainer />
      <JobsContainer />
    </allJobsContext.Provider>
  );  
};

export const useAllJobsContext = () => useContext(allJobsContext);
 
export default AllJobs; 
