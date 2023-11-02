import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
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
    let n = parseInt(event.target.value)
    setCurrentPage(n);
    startIndex = currentPage * itemsPerPage;
    selectedPersonaje = data.slice(startIndex, startIndex + itemsPerPage);
    return selectedPersonaje;
  };
  //?Fin Paginado

  return (
    <>
    {/* //? Paginado */}
    <div className={style.paginado} >
              <h2>
                {/* { currentPage > 0 
                  ? <button onClick={handleMoveGo} value={0} id="uno" name="uno" className={style.button} > 1 </button>
                  : <button onClick={handleMoveGo} value={0} id="uno" name="uno" className={style.button} disabled> 1 </button>
                } */}
                { currentPage > 0 
                ? ( <button onClick={handleMoveLeft} id="prev" name="pre" className={style.button}          > {" < "} {currentPage}</button> )
                : ( <button onClick={handleMoveLeft} id="prev" name="pre" className={style.button}  disabled> {" < "} {currentPage} </button> )
                } 
                {"  "} {currentPage + 1} {"  "}
                { currentPage < pageCount - 1 
                  ? ( <button onClick={handleMoveRight} id="next" name="next" className={style.button}  >     {" > "}   {currentPage+2}</button>)
                  : ( <button onClick={handleMoveRight} id="next" name="next" className={style.button}  disabled>{" > "} {currentPage+2}</button>)
                }
                {/* { currentPage < pageCount - 1 
                  ? <button onClick={handleMoveGo} value={pageCount-1} id="ultima" name="ultima" className={style.button}  > 6 </button> 
                  : <button onClick={handleMoveGo} value={pageCount-1} id="ultima" name="ultima" className={style.button}  disabled>6</button>
                } */}
              </h2>
            </div>
          {/* //? End-Paginado */}
        <h1 className={style.titulo}>¿A cuál se parece tu Brujula de cambio Personal?</h1>
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
