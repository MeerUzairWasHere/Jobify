import { useState } from "react";

import BarChart from "./BarChartComponent";
import AreaChart from "./AreaChartComponent";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChat] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" className="btn " onClick={() => setBarChat(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <AreaChart data={data} /> : <BarChart data={data} />}
    </Wrapper>
  );
};
export default ChartsContainer;
