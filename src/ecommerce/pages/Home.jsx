import Products from "../components/Products.jsx";
import "./Style.css";
function Home(props) {
  return (
    <div className="page">
      <Products handleAddToCart={props.handleAddToCart} />
    </div>
  );
}

export default Home;

