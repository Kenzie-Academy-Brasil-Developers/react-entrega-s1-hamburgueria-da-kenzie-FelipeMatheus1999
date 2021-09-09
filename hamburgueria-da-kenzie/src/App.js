import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import Products from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="app__title">Kenzie Hamburgueria</h1>
        <Search
          products={products}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
        <div className="MenuContainer">
          <Products
            products={products}
            filteredProducts={filteredProducts}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </div>
          <Cart 
          cartTotal={cartTotal}
          currentSale={currentSale}
          />
      </div>
    </div>
  );
}

export default App;
