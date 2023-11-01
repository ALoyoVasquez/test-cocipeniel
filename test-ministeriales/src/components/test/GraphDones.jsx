import React from "react";
//? GRAPHICS
import {
  Chart as CharJs,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
} from "chart.js";
import { Radar } from "react-chartjs-2";
CharJs.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);
//? GRAPHICS

const GraphDones = (props) => {
  // let a=5;
  // let b=5;
  let { a, b, c } = props;
  const data = {
    labels: ["Total B", "Total C", "Total A"],
    datasets: [
      {
        label: "¿Dónde esta Usted en este Momento?",
        data: [b, c, a],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      }
      // ,{
      //   label: "A",
      //   data: [1, 15, 15],
      //   fill: true,
      //   backgroundColor: "rgba(54, 162, 235, 0.2)",
      //   borderColor: "rgb(255, 99, 132)",
      //   pointBackgroundColor: "rgb(255, 99, 132)",
      //   pointBorderColor: "#fff",
      //   pointHoverBackgroundColor: "#fff",
      //   pointHoverBorderColor: "rgb(255, 99, 132)",
      // }
      // ,{
      //   label: "B",
      //   data: [15, 15,1 ],
      //   fill: true,
      //   backgroundColor: "rgba(255, 200, 132, 0.2)",
      //   borderColor: "rgb(255, 99, 132)",
      //   pointBackgroundColor: "rgb(255, 99, 132)",
      //   pointBorderColor: "#fff",
      //   pointHoverBackgroundColor: "#fff",
      //   pointHoverBorderColor: "rgb(255, 99, 132)",
      // },{
      //   label: "C",
      //   data: [15, 1, 15],
      //   fill: true,
      //   backgroundColor: "rgba((97, 235, 97, 0.35)",
      //   borderColor: "rgb(255, 99, 132)",
      //   pointBackgroundColor: "rgb(255, 99, 132)",
      //   pointBorderColor: "#fff",
      //   pointHoverBackgroundColor: "#fff",
      //   pointHoverBorderColor: "rgb(255, 99, 132)",
      // }

    ],
  };
  const options = {};


  return (
    <div
      style={{
        alignContent: "center",
        alignItems: "center",
        width: "500px",
        padding: "20px",
      }}
    >
      <Radar data={data} options={options} />
    </div>
  );
};

export default GraphDones;





// export default function Example() {
//   