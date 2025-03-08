import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const data = [
  {
    product_id: 1,
    product_title: "The Grest",
    price: 699.99,
  },
  {
    product_id: 2,
    product_title: "The Grest Gatsby",
    price: 899.99,
  },
  {
    product_id: 3,
    product_title: "Sailor",
    price: 769.99,
  },
  {
    product_id: 4,
    product_title: "Riverland",
    price: 649.99,
  },
  {
    product_id: 5,
    product_title: "November 9",
    price: 599.99,
  },
  {
    product_id: 6,
    product_title: "Souvenier",
    price: 1299.99,
  },
  {
    product_id: 7,
    product_title: "Doomsday",
    price: 1999.99,
  },
  {
    product_id: 8,
    product_title: "Spectre x360",
    price: 1399.99,
  },
  {
    product_id: 9,
    product_title: "Zephyrus ",
    price: 1499.99,
  },
  {
    product_id: 10,
    product_title: "superwoman",
    price: 1499.99,
  },
  {
    product_id: 11,
    product_title: "robocop",
    price: 349.99,
  },
  {
    product_id: 12,
    product_title: "you and me",
    price: 249.99,
  },
  {
    product_id: 13,
    product_title: "Bose QuietComfort",
    price: 279.99,
  },
  {
    product_id: 14,
    product_title: "Jabra",
    price: 229.99,
  },
  {
    product_id: 15,
    product_title: "Galaxy",
    price: 199.99,
  },
];

const chartSetting = {
  // yAxis: [
  //   {
  //     label: "Price (USD)",
  //   },
  // ],
  width: 800,
  height: 500,
};

const GadgetBarChart = () => {
  return (
    <div className=" max-w-6xl mx-auto">
      <h1 className="text-center text-3xl font-bold mt-5 mb-5 font-serif">
        Book Prices
      </h1>
      <BarChart
        dataset={data}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "product_title",
            label: "Product Title",
          },
        ]}
        series={[{ dataKey: "price", label: "Price" }]}
        {...chartSetting}
      />
    </div>
  );
};

export default GadgetBarChart;
