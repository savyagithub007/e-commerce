import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { useState } from "react";
// import Products from "./components/Products";



//Lifting State Up: when we take out a state from child component and put it in its Parent component

//Prop Drilling: when states are passed as props to various child components

function Main() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(obj) {
    setCart([...cart, obj]); //cart.push(obj);
  }

  return (

    <BrowserRouter>
      <Header cart={cart} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home handleAddToCart={handleAddToCart} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/product/:id"
            element={
              <SingleProduct cart={cart} handleAddToCart={handleAddToCart} />
            }
          ></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default Main;
