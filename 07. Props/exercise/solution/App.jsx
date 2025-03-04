import Person from "./components/Person";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Person name="Vasu" age={22} />
      <Product name="Iphone" price={30000} />
    </>
  );
}

export default App;
