import { useState } from "react";
import { PiCurrencyInr } from "react-icons/pi";
import { Link } from "react-router-dom";
function Product(props) {
  const  [cart, setCart] = useState(0);

  function handleAddToCart() {
    setCart(cart + 1);
  }

  return (
    <div className="product">
      <Link to={`/product/${props.product.id}`}>
        <img src={props.product.image} alt="Product Image" />
      </Link>
      <h3>
        <Link to={`/product/${props.product.id}`}>{props.product.title}</Link>
      </h3>
      <p>
        <PiCurrencyInr />
        {props.product.price}
      </p>
      <Link className="addToCart" onClick={() => handleAddToCart}>
        Add To Cart
      </Link>
      
      <div>
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
    </div>
  );
}

export default Product;
