import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { useState, useEffect } from "react";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

const Statistics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-violet-500 h-[250px] mb-10">
      <h1 className="text-center text-3xl text-white font-bold mt-5 py-10">
        Statistics
      </h1>
      <p className="text-center text-white">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>

      <div>
        {" "}
        {data.length > 0 && (
          <BarChart
            dataset={data}
            xAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
              { dataKey: "london", label: "London" },
              { dataKey: "paris", label: "Paris" },
              { dataKey: "newYork", label: "New York" },
              { dataKey: "seoul", label: "Seoul" },
            ]}
            {...chartSetting}
          />
        )}
      </div>
    </div>
  );
};

export default Statistics;
