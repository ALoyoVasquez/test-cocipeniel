import React from "react";
import style from "./Character.module.css";
import imagen from "../../../assets/soyHenry400x400.jpg";

const Character = ({ id, nombre, color, caracteristica, grafico }) => {
  
  const DIR = "./src/assets/"+grafico;
  // console.log(grafico)

  // console.log(DIR);

  return (
    <div className={style.layout}>
      <img src={DIR} alt="grafico" className={style.grafico} />
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
