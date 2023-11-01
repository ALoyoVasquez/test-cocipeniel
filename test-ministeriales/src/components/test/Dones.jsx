import React from "react";
import CardDones from "./CardDones";
import style from "./Dones.module.css";
import testDones from "../test-dones";

const Dones = () => {
  const { id, colA, colB, colC } = testDones;
  // console.log(testDones);

  const calcularValores = () => {

  };

  return (
    <div className={style.container}>
      <h1>Test de Dones </h1>
      <div className={style.encabezado}>
        <small>#</small>
        <small className={style.columna}>Columna A</small>
        <small className={style.columna}>Columna B</small>
        <small className={style.columna}>Columna C</small>
      </div>
      {/* {console.log(allProducts)} */}
      {testDones.map((p) => (
        <CardDones
          key={p.id}
          id={p.id}
          colA={p.colA}
          colB={p.colB}
          colC={p.colC}
        />
      ))}

      <div>
        <button
          type="submit"
          class="flex w-4.5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 center-align:center"
          onClick={() => {
            calcularValores();
            alert("Respuesta");
          }}
        >
          Calcular
        </button>
      </div>
    </div>
  );
};

export default Dones;
