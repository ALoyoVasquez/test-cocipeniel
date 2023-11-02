import React from "react";
import style from "./Character.module.css";
import tomas from "../../../assets/1tomas.png";
import martha from "../../../assets/2martha.png";
import maria from "../../../assets/3maria.png";
import moises from "../../../assets/4moises.png";
import pedro from "../../../assets/5pedro.png";
import jonas from "../../../assets/6jonas.png";

const Character = ({ id, nombre, color, caracteristica, grafico }) => {
  
  const DIR = "./src/assets/"+grafico;
  // const grafic="";

  // id===1
  // ? grafic = tomas
  // : grafic = jonas

  // console.log(grafico)

  // console.log(DIR);

  return (
    <div className={style.layout}>
      { id===1
        ? <img src={tomas} alt="grafico" className={style.grafico} />
        : id===2
        ? <img src={martha} alt="grafico" className={style.grafico} />
        : id===3 
        ? <img src={maria} alt="grafico" className={style.grafico} />
        : id===4 
        ? <img src={moises} alt="grafico" className={style.grafico} />
        : id===5
        ? <img src={pedro} alt="grafico" className={style.grafico} />
        : <img src={jonas} alt="grafico" className={style.grafico} />
    }
      <div className={style.brujula}>
        <div className={style.nombre}>{nombre} </div>
        <div className={style.pc}>
          <div className={style.partida}>Punto de Partida: <strong>{id}</strong></div>
          <div className={style.partida}>Color: <strong>{color} </strong></div>
          {
            // console.log(color)
            color.length < 2
            ? ( color[0]==="Verde"
                ? <div className={style.squareV}></div>
                : color[0]==="Rojo"
                ? <div className={style.squareR}></div>
                : <div className={style.squareA}></div>
              )
            : (
                color[0]==="Verde" && color[1]==="Rojo" 
                ? <>
                    <div className={style.squareV}></div>
                    <div className={style.squareR}></div>
                  </>
                : color[0]==="Azul" && color[1]==="Rojo" 
                ? <>
                    <div className={style.squareA}></div>
                    <div className={style.squareR}></div>
                  </> 
                :<>
                  <div className={style.squareA}></div>
                  <div className={style.squareV}></div>
                  </> 
                )
          }
        </div>

        <p className={style.caracteristica}>{caracteristica}</p>
        {/* <p style="background:violet;">Tu primera caja de colores</p> */}
      </div>
    </div>
  );
};

export default Character;
