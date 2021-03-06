import "./style.css";
import { useState } from "react";

const Products = ({
  products,
  filteredProducts,
  setCartTotal,
  currentSale,
  setCurrentSale,
}) => {
  const [productsArray, setProductsArray] = useState([]);

  const AddToCart = (productId) => {
    const newProduct = products.filter((product) => {
      return product.id === productId;
    });

    if (!productsArray.includes(productId)) {
      setCurrentSale([...currentSale, newProduct]);
      setProductsArray([...productsArray, productId]);
    }
  };

  const cartTotal = currentSale.reduce((acc, currentValue) => {
    return acc + currentValue[0].price;
  }, 0);

  setCartTotal(cartTotal);

  const productsMap = products.map((value) => (
    <div className="item" key={value.id}>
      <h2 className="item__name">{value.name}</h2>
      <span className="span">{value.category}</span>
      <span className="span">R$: {value.price}</span>
      <button className="item__button" onClick={() => AddToCart(value.id)}>
        Add to cart
      </button>
    </div>
  ));

  return (
    <>
      {filteredProducts.length === 1
        ? filteredProducts.map((value) => (
            <div className="item" key={value.id}>
              <h2 className="item__name">{value.name}</h2>
              <span className="span">{value.category}</span>
              <span className="span">R$: {value.price}</span>
              <button
                className="item__button"
                onClick={() => AddToCart(value.id)}
              >
                Add to cart
              </button>
            </div>
          ))
        : productsMap}
    </>
  );
};

export default Products;
