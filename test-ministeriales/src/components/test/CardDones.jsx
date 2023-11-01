import React from "react";
import style from "./CardDones.module.css";

const CardDones = (props) => {
  let { id, colA, colB, colC } = props;
  // console.log(props)
  return (
    
      <div className={style.form}>
        <div class="w-8 bg-white shadow rounded">
          <small>{id} </small>
        </div>
        <div class="w-48 bg-white shadow rounded flex">
          <input
            type="number"
            min="0"
            max="2"
            name="colA"
            className={style.input} required
          />
          <span class={style.columnas}>{colA}</span>
        </div>
        <div class="w-48 bg-white shadow rounded flex">
          <input
            type="number"
            min="0"
            max="2"
            name="colB"
            class={style.input}
          />
          <span class={style.columnas}>{colB}</span>
        </div>
        <div class="w-48 bg-white shadow rounded flex">
          <input type="number" min="0" max="2" class={style.input} />
          <span class={style.columnas}>{colC}</span>
        </div>
      </div>
  );
};

export default CardDones;
