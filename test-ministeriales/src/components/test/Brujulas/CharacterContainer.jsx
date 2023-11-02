import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Character from "./Character";
import personajes from "./brujula";
import style from "./CharacterContainer.module.css";

const CharacterContainer = () => {
  //? Paginado
  const [currentPage, setCurrentPage] = useState(0);
  let data = personajes;
  // console.log(data);
  const itemsPerPage = 1;
  const pageCount = Math.ceil(data.length / itemsPerPage); //? Calcula la cantidad de paginas
  let startIndex = currentPage * itemsPerPage;
  let selectedPersonaje = data.slice(startIndex, startIndex + itemsPerPage);
  // console.log(selectedPersonaje);

  const handleMoveLeft = (evt) => {
    data = personajes;

    setCurrentPage(currentPage - 1);
    startIndex = currentPage * itemsPerPage;
    selectedPersonaje = data.slice(startIndex, startIndex - itemsPerPage);

    return selectedPersonaje;
  };

  const handleMoveRight = (evt) => {
    data = personajes;

    setCurrentPage(currentPage + 1);
    startIndex = currentPage * itemsPerPage;
    selectedPersonaje = data.slice(startIndex, startIndex + itemsPerPage);

    return selectedPersonaje;
  };

  const handleMoveGo = (event) => {
    data = personajes;
    let n = parseInt(event.target.value);
    setCurrentPage(n);
    startIndex = currentPage * itemsPerPage;
    selectedPersonaje = data.slice(startIndex, startIndex + itemsPerPage);
    return selectedPersonaje;
  };
  //?Fin Paginado

  return (
    <>
      <hr />
      <br />
      {/* //? Paginado */}
      <div>
        <h1 className={style.titulo}>
          ¿A cuál se parece tu Brujula de cambio Personal?
        </h1>

        <div className={style.paginado}>
          {/* <h2> */}
          <button onClick={handleMoveGo} value={0} id="uno"   name="uno" className={style.button} > 1 Tomás </button>
          <button onClick={handleMoveGo} value={1} id="dos"   name="dos" className={style.button} > 2 Martha </button>
          <button onClick={handleMoveGo} value={2} id="tres"  name="tres" className={style.button} > 3 María </button>
          <button onClick={handleMoveGo} value={3} id="cuatro" name="cuatro" className={style.button} > 4 Moisés</button>
          <button onClick={handleMoveGo} value={4} id="cinco" name="cinco" className={style.button} > 5 Pedro</button>
          <button onClick={handleMoveGo} value={5} id="seis"  name="seis" className={style.button} > 6 Jonás</button>
            
          {/* </h2> */}
        </div>
        {/* //? End-Paginado */}
        <br />
      </div>
      <div className={style.container}>
        {selectedPersonaje.map((p) => {
          return (
            <Character
              key={p.id}
              id={p.id}
              nombre={p.nombre}
              color={p.color}
              caracteristica={p.caracteristica}
              grafico={p.grafico}
            />
          );
        })}
      </div>
    </>
  );
};

export default CharacterContainer;
