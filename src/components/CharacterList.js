import React from "react";

function CharacterCard({ characters }) {
  console.log({ characters });
  return (
    <div>
      <h2>{characters.name}</h2>
      <p>DOB: {characters.birth_year}</p>
    </div>
  );
}

export default CharacterCard;
