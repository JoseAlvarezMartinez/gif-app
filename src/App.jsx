import { useState } from "react";
import AddCategory from "./components/AddCategory";

function App() {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory.toLowerCase()))return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>Gif App</h1>
      <AddCategory onAddCategory={onAddCategory} />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
}

export default App;
