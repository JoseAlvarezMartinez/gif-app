import { getGif } from "../helpers/getGif";
import { useEffect, useState } from "react";
const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGif(category)
    setImages(newImages)
  }
  useEffect(() => {
      getImages()
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {images.map((image) => (
        <p>{image.title}</p>
      ))}
    </>
  );
};

export default GifGrid;
