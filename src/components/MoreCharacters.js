import React from "react";

function MyPictures({ data }) {
  console.log(data);
  return (
    <div className="wrapper">
      <img src={data.image} alt={data.name} />
      <p>{data.name}</p>
      <p>Gender: {data.gender}</p>
      <p>Height: {data.height}</p>
      <p>Species: {data.species}</p>
      <p>Homeworld: {data.homeworld}</p>
      <p>Affiliations: {data.affiliations.join(", ")}</p>
    </div>
  );
}

export default MyPictures;
