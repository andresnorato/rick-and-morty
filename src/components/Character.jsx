import React, { useContext } from "react";
import "../styles/Characters.css";
import ThemeContext from "../context/ThemeContext";

const Character = ({ name, status, gender, image, species, origin, handleClick, character}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "darkmode" ? "character darkmode" : "character"}>
      <img src={image} alt={name} />
      <div className="character--info">
        <h1>{name}</h1>
        <p>{gender}</p>
        <p> {species}</p>
        <p>{origin.name}</p>
        <p className={status === "Alive" ? "alive" : "death"}>{status}</p>
      <button type ="button" onClick={()=>handleClick(character)}>Agregar a Favoritos</button>
      </div>
    </div>
  );
};

export default Character;
