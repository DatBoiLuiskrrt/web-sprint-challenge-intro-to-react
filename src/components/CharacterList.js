import React from "react";
import styled from "styled-components";

const Body = styled.div`
  width: 80%;
  //   border: 1px solid red;
  margin: 0 auto;
  color: white;
`;
function CharacterCard({ characters }) {
  //   console.log(image);
  return (
    <Body>
      {/* {myfunction} */}
      {/* <h2>{image.name}</h2> */}
      {/* <img src={image.image} alt="caca" /> */}
      <h2>{characters.name}</h2>
      <p>DOB: {characters.birth_year}</p>
    </Body>
  );
}

export default CharacterCard;
