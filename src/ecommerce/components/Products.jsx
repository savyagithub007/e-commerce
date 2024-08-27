import Product from "./Product.jsx";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://fakestoreapi.com/products");
      console.log(result.data);
      setProducts(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <section id="products">
        {products.length > 0 ? (products.map((product, index) => {
            return (
              <Product
                key={index}
                product={product}
                handleAddToCart={props.handleAddToCart}
              />
            );
          })
        ) : (
          <h2>LOADING...</h2>
        )}
      </section>
    </>
  );
}

export default Products;
