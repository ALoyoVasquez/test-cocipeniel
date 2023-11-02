import React from 'react'

const Character = ({id, nombre, color, caracteristica}) => {

  return (
    <div>
        <h1>{nombre} </h1>
        <h2>Punto de Partida {id}</h2>
        <h3>Color: {color}  </h3>
        <p>{caracteristica}</p>
    </div>
  )
}

export default Character