const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gc71ip42kT92TPgI6f04gy9G9xTWTj6c&q=${category}&limit=10`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    console.log(gifs);
  };
  
  export { getGif };
  