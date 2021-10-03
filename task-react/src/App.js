import "./App.css";

import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import productsData from "./Products";

function App() {
  return (
    <div>
      <Home />
      <br />
      <br />
      <br />

      <ProductList ProductList={productsData} />
    </div>
  );
}

export default App;
