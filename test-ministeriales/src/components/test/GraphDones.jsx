import React from "react";
import style from "./GraphDones.module.css"
import example from "../../assets/example.png"
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
        data: [b,c,a],
        // data: [5 , 10, 13],
        backgroundColor: [
          "rgba(79, 218, 35, 0.4)", //verde
          // "rgba(35, 96, 218, 0.4)", //azul
          "rgba(229, 17, 17 , 0.4)", //rojo
          // "rgba(229, 17, 17 , 0.4)", //rojo
          "rgba(35, 96, 218, 0.54)", //azul
          // "rgba(35, 96, 218, 0.54)", //azul
          // "rgba(79, 218, 35, 0.54)", //verde
          // "rgba(229, 17, 17 , 0.54)", //rojo
          // "rgba(79, 218, 35, 0.4)", //verde
        ],
        borderWidth: 0,
      },
    ],
  };
  // const options = {};
  const options =  {
    scales: { // <-- Note change in options from scale to scales
        r: {
          grid: {
             circular: true
          },
          min: 0,
          max: 15,
          beginAtZero: true,
        
        ticks:
          {stepSize: 1}
        }
    }
  }


  return (
    <div className={style.contenedorGraficos}>
      <div className={style.grafico1} >
        <Radar data={data} options={options} />
      </div>
      <div className={style.grafico2} >
        {/* <Radar data={data} options={options} /> */}
        <PolarArea data={data2} options={options} />
        <div>
          <strong className={style.grupoA}>A: </strong>COLOR AZUL 
          <strong className={style.grupoB}> B: </strong>COLOR VERDE
          <strong className={style.grupoC}> C: </strong>COLOR ROJO<br />
        </div>
      </div>
        <div>
          Ejemplo
          <img src={example} alt="example" className={style.example} />
          <div>
            En este caso los Colores predominantes son el Azul y el Rojo. Buscamos el Punto de partida con estos colores.
          </div>
        </div>
    </div>
  );
};

export default GraphDones;
