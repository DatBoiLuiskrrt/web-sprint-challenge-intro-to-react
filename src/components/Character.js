// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";
function Character() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((res) => {
        // console.log(res.data);
        setCharacter(res.data);
      })
      .catch((error) => {
        console.log(`There is an error bro 😭😟😞💔💔💔 ${error}`);
      });
  }, []);

  return (
    <>
      {character.map((characters, index) => {
        return <CharacterList characters={characters} key={index} />;
      })}
    </>
  );
}

export default Character;
