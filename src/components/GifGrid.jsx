const GifGrid = ({ category }) => {
  const getGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gc71ip42kT92TPgI6f04gy9G9xTWTj6c&q=${category}`;
    const respuesta = await fetch(url)
    const {data} = await respuesta.json()
  };
  getGif()
  return (
    <>
      <h3>{category}</h3>
      <p>Hola Mundo</p>
    </>
  );
};

export default GifGrid;
