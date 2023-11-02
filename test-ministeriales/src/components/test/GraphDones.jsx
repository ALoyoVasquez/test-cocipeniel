import React from "react";
import style from "./GraphDones.module.css"
//? GRAPHICS
import {
  Chart as CharJs,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
  ArcElement, //Radial
  Title
} from "chart.js";
import { Radar, PolarArea } from "react-chartjs-2";
CharJs.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
  ArcElement, //Radial
  Title
);

//? GRAPHICS

const GraphDones = (props) => {
  let { a, b, c } = props;
  const data = {
    labels: ["Total B", "Total C", "Total A"],
    datasets: [
      {
        label: "¿Dónde esta Usted en este Momento?",
        data: [b, c, a],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };
  const data2 = {
    labels: ["List"],
    datasets: [
      {
        label: "A",
        data: [15 , 15, 15,15,15,15],
        // data: [5 , 10, 13],
        backgroundColor: [
          "rgba(79, 218, 35, 0.4)", //verde
          // "rgba(35, 96, 218, 0.4)", //azul
          "rgba(229, 17, 17 , 0.4)", //rojo
          "rgba(229, 17, 17 , 0.4)", //rojo
          "rgba(35, 96, 218, 0.54)", //azul
          "rgba(35, 96, 218, 0.54)", //azul
          // "rgba(79, 218, 35, 0.54)", //verde
          // "rgba(229, 17, 17 , 0.54)", //rojo
          "rgba(79, 218, 35, 0.4)", //verde
        ],
        borderWidth: 0,
      },
    ],
  };
  const options = {};


  return (
    <div className={style.contenedorGraficos}>
      <div className={style.grafico1} >
        <Radar data={data} options={options} />
      </div>
      <div className={style.grafico2} >
        {/* <Radar data={data} options={options} /> */}
        <PolarArea data={data2} options={options} />
        <div>
          <strong>A: </strong>COLOR AZUL 
          <strong> B: </strong>COLOR VERDE
          <strong> C: </strong>COLOR ROJO<br />
        </div>
      </div>
    </div>
  );
};

export default GraphDones;
