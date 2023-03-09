import { getGif } from "../helpers/getGif";
import { useEffect } from "react";
const GifGrid = ({ category }) => {
  useEffect(() => getGif(category), []);

  return (
    <>
      <h3>{category}</h3>
      <p>Hola Mundo</p>
    </>
  );
};

export default GifGrid;
