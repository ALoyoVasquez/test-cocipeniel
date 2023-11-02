import React from "react";
import Character from "./Character";
import personajes from "./brujula";

const CharacterContainer = () => {
    console.log(personajes);
  return (
    <div>
      {personajes.map((p) => {
        return (
          <Character
            key={p.id}
            id={p.id}
            nombre={p.nombre}
            color={p.color}
            caracteristica={p.caracteristica}
          />
        );
      })}
    </div>
  );
};

export default CharacterContainer;
