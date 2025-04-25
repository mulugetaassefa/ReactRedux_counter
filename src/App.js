import './App.css';
import Cart from './features/cart/cart';
import ProductList from './features/products/product';

function App() {
  return (
    <div className="App">
       
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
