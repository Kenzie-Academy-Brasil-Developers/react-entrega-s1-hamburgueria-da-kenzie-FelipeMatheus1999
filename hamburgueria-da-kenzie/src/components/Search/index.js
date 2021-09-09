import "./style.css";
import { useState } from "react";

const Search = ({ filteredProducts, setFilteredProducts, products }) => {
  const [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    const productSearch = products.filter((product) => {
      return String(product.name).toLowerCase() === String(text).toLocaleLowerCase();
    })

    setFilteredProducts(productSearch);
  }

  return (
    <form onSubmit={handleClick} >
      <input
        type="text"
        placeholder="Search your snack..."
        onChange={e => setText(e.target.value)}
        className="search__input"
      ></input>
      <button onClick={handleClick} 
      className="search__button">
        search
      </button>
    </form>
  );
};

export default Search;
