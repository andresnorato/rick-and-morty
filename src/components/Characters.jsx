import React, { useState,  useReducer, useMemo, useRef, useCallback} from "react";
import Character from "./Character";
import "../styles/Characters.css";
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";

const initialState = {
  favorites: [],
};


const API = 'https://rickandmortyapi.com/api/character';


const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const characters = useCharacters(API);


  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value.toLowerCase());
  // };



  const handleSearch = useCallback(()=>{
    setSearch(searchInput.current.value.toLowerCase());
  }, [])


  // const filteredUsers = characters.filter((user)=>{
  //   const res = user.name;
  //   return  res.toLowerCase().includes(search);
  // });

  const filteredUsers = useMemo(() =>
      characters.filter((user) => {
        const res = user.name;
        return res.toLowerCase().includes(search);
      }),
    [characters, search]
  );

  return (
    <div className="FavoritesCha">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}
      <Search searchInput={searchInput} handleSearch={handleSearch} search={search} />
      <div className="Characters">
        {filteredUsers.map((character) => (
          <Character
            key={character.id}
            {...character}
            handleClick={handleClick}
            character={character}
          />
        ))}
      </div>
    </div>
  );
};

export default Characters;
