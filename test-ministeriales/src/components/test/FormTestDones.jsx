import React, { useState } from "react";
import style from "./CardDones.module.css";
import GraphDones from "./GraphDones";

import CharacterContainer from "./Brujulas/CharacterContainer";

const FormTestDones = () => {
  let [totA, setTotA] = useState(0);
  let [totB, setTotB] = useState(0);
  let [totC, setTotC] = useState(0);

  function validarFila() {
    for (let i = 1; i < 11; i++) {
      let colA = "col" + i + "A";
      let colB = "col" + i + "B";
      let colC = "col" + i + "C";
      var fila1 = document.getElementById(colA).value;
      var fila2 = document.getElementById(colB).value;
      var fila3 = document.getElementById(colC).value;

      if (fila1 === fila2 || fila1 === fila3 || fila2 === fila3) {
        alert(
          "No se pueden repetir números en la misma fila. Revisa la fila " + i
        );
        return false;
      }

      resultado();
      return true;
    }
  }

  var totalA = 0;
  var totalB = 0;
  var totalC = 0;

  const resultado = () => {
    event.preventDefault();
    console.log("Entro en resultado");

    for (let i = 1; i < 11; i++) {
      let colA = "col" + i + "A";
      let colB = "col" + i + "B";
      let colC = "col" + i + "C";
      var fila1 = document.getElementById(colA).value;
      var fila2 = document.getElementById(colB).value;
      var fila3 = document.getElementById(colC).value;

      if (colA !== "col3A" && colA !== "col7A") {
        totalA = totalA + Number(fila1);
        setTotA(totalA);
      }

      if (colB !== "col5B" && colB !== "col10B") {
        totalB = totalB + Number(fila2);
        setTotB(totalB);
      }
      if (colC !== "col2C" && colC !== "col9C") {
        totalC = totalC + Number(fila3);
        setTotC(totalC);
      }
    }
  };

  return (
    <>
      <div className={style.formulario}>
        <div className={style.instrucciones}>
          <h1 class="font-semibold text-xl tracking-tight">Test Dones </h1>
          <h3 class="font-semibold text-md tracking-tight">Instrucciones: </h3>
          {/* <p class="font-semibold text-sm tracking-tight"> */}
          <ul class="font-semibold tracking-tight text-left">
            <li>
              <strong> Paso 1:</strong> Por favor, marque en cada una de las 10
              filas de la siguiente manera:
              <br />
              <strong> 2 :</strong> Adjetivo que mejor me describe.
              <br />
              <strong> 1 :</strong> Segundo adjetivo que mejor me describe.
              <br />
              <strong> 0 :</strong> Adjetivo que peor me describe.
            </li>
            <br />
            <li>
              <strong> Paso 2:</strong> Haz clic en Calcular Para mostrar el
              resultado se tacharan los Valores de las celdas A3, A7, B5, B10,
              C2 y C9, luego se sumarán los valores de cada columna.
            </li>
          </ul>
        </div>

        <div className={style.panel2}>
          {/* <form action="" className={style.form}> */}
          {/* <legend> */}

          {/* </legend */}
          <div className={style.form}>
            <div className="divTableBody">
              <div className={style.form}>
                <div class="w-8 bg-white shadow rounded">N</div>
                <div class="w-48 bg-white shadow rounded flex font-bold">
                  COLUMNA A
                </div>
                <div class="w-48 bg-white shadow rounded flex font-bold">
                  COLUMNA B
                </div>
                <div class="w-48 bg-white shadow rounded flex font-bold">
                  COLUMNA C
                </div>
              </div>

              <div className={style.form}>
                <div class="w-8 bg-white shadow rounded">1</div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col1A"
                    // onChange={resultado}
                    // value={col1A}
                    name="col1A"
                    className={style.input}
                    required
                  />
                  Energico
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col1B"
                    // value={col1B}
                    className={style.input}
                    required
                  />
                  Culto
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    // value={col1C}
                    id="col1C"
                    className={style.input}
                    required
                  />
                  Activo
                </div>
                <div></div>
              </div>
              <div className={style.form}>
                <div class="w-8 bg-white shadow rounded">2</div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    name="col2A"
                    id="col2A"
                    className={style.input}
                    required
                  />
                  Apasionado
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    name="col2B"
                    id="col2B"
                    className={style.input}
                    required
                  />
                  Racional
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col2C"
                    name="col2C"
                    className={style.input}
                    required
                  />
                  Analítico
                </div>
              </div>
              <div className={style.form}>
                <div class="w-8 bg-white shadow rounded"> 3</div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col3A"
                    className={style.input}
                    required
                  />
                  Reacio
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col3B"
                    className={style.input}
                    required
                  />
                  Reservado
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col3C"
                    className={style.input}
                    required
                  />
                  Exigente
                </div>
              </div>
              <div className={style.form}>
                <div class="w-8 bg-white shadow rounded"> 4</div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col4A"
                    className={style.input}
                    required
                  />
                  Espontaneo
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col4B"
                    className={style.input}
                    required
                  />
                  Reflexivo
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col4C"
                    className={style.input}
                    required
                  />
                  Estable
                </div>
              </div>
              <div className={style.form}>
                <div class="w-8 bg-white shadow rounded"> 5</div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col5A"
                    className={style.input}
                    required
                  />
                  Emotivo
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col5B"
                    className={style.input}
                    required
                  />
                  Inflexible
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col5C"
                    className={style.input}
                    required
                  />
                  Escrupuloso
                </div>
              </div>
              <div className={style.form}>
                <div class="w-8 bg-white shadow rounded"> 6</div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col6A"
                    className={style.input}
                    required
                  />
                  Positivo
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col6B"
                    className={style.input}
                    required
                  />
                  Abierto
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col6C"
                    className={style.input}
                    required
                  />
                  Dedicado
                </div>
              </div>
              <div className={style.form}>
                <div class="w-8 bg-white shadow rounded"> 7</div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col7A"
                    className={style.input}
                    required
                  />
                  Involucrado
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col7B"
                    className={style.input}
                    required
                  />
                  Entendido
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col7C"
                    className={style.input}
                    required
                  />
                  Consciente
                </div>
              </div>
              <div className={style.form}>
                <div class="w-8 bg-white shadow rounded"> 8</div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col8A"
                    className={style.input}
                    required
                  />
                  Dinamico{}
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col8B"
                    className={style.input}
                    required
                  />
                  Objetivo
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col8C"
                    className={style.input}
                    required
                  />
                  Fiable
                </div>
              </div>
              <div className={style.form}>
                <div class="w-8 bg-white shadow rounded"> 9</div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col9A"
                    className={style.input}
                    required
                  />
                  Impulsivo
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col9B"
                    className={style.input}
                    required
                  />
                  Complejo
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col9C"
                    className={style.input}
                    required
                  />
                  Inestable
                </div>
              </div>
              <div className={style.form}>
                <div class="w-8 bg-white shadow rounded"> 10</div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col10A"
                    className={style.input}
                    required
                  />{" "}
                  Animado
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col10B"
                    className={style.input}
                    required
                  />{" "}
                  Emocionado
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  <input
                    type="number"
                    min="0"
                    max="2"
                    id="col10C"
                    className={style.input}
                    required
                  />{" "}
                  Dispuesto
                </div>
              </div>
              <div className={style.form}>
                <div class="w-8 bg-white shadow rounded"> R</div>
                <div class="w-48 bg-white shadow rounded flex">
                  Total A:
                  <label htmlFor="totA" id="totA">
                    {totA}{" "}
                  </label>
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  Total B:
                  <label htmlFor="totB" id="totB">
                    {totB}{" "}
                  </label>
                </div>
                <div class="w-48 bg-white shadow rounded flex">
                  Total C:
                  <label htmlFor="totC" id="totC">
                    {totC}
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* </form> */}
          <div className={style.containerBoton}>
            <button
              type="submit"
              class="flex w-4.5 center-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                validarFila();
              }}
            >
              Calcular
            </button>
          </div>
        </div>
      </div>
      <div className={style.grafico}>
        <GraphDones a={totA} b={totB} c={totC} />;
      </div>
        <CharacterContainer />
    </>
  );
};

export default FormTestDones;
