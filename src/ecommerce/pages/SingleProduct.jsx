import { useState }  from "react";
import Products from "../components/Products";
import './Style.css'


//Lifting State Up: when we takbe out a state from child component and put it in its Parent component

//Prop Drilling: when states are passed as props to various child components

function Main() {
  const [cart, setCart] = useState([]);

  return (
    <>
    <Products />
    </>
  );
}

export default Main;
