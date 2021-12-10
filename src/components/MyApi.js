import React, { useState, useEffect } from "react";
import axios from "axios";
import MyPictures from "./MoreCharacters";

function MyFunction() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(`https://akabab.github.io/starwars-api/api/all.json`)
      .then((res) => {
        console.log(res.data);
        setImage(res.data);
      })
      .catch((error) => {
        console.log(`Damn bro, you keep making errors, ${error}`);
      });
  }, []);
  return (
    <>
      {image.map((e) => {
        return <MyPictures data={e} />;
      })}
    </>
  );
}
export default MyFunction;
