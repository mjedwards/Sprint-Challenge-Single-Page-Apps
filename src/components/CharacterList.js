import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(response => {
        console.log(response.data.results);
        setChar(response.data.results);
      })
      .catch(error => {
        console.log(`The error was: ${error}`);
      });
  }, []);

  return (
    <div className='character-list'>
      {char.map(character => (
        <CharName key={character.id} character={character} />
      ))}
    </div>
  );
}

function CharName({ character }) {
  const { name, id } = character;

  console.log(character);
  return (
    <Link to={`/character/${id}`}>
      <h2>{name}</h2>
    </Link>
  );
}
