import "./style.css";

const Cart = ({ cartTotal, currentSale }) => {

  return (
    <div className="cart">
      {`Total: R$ ${cartTotal.toFixed(2)}`}
    </div>
  );
};

export default Cart;
