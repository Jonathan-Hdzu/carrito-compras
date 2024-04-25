import { useContext, useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts} from './mocks/products.json'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IS_DEVELOPMENT } from './config.js';
import { FiltersProvider } from './context/filters.jsx';
import { useFilters } from './hooks/useFilters.jsx';
import { Cart } from './components/Cart.jsx';
import {CartProvider} from './context/cart.jsx';
// import { Cart } from './components/Cart.jsx';


//Hooks personalizados
function App() {
  const [products] = useState(initialProducts);

  const {filterProducts} = useFilters();
  
  const filteredProducts = filterProducts(products);
  
  return (
    <CartProvider>
      <Header />
      <Cart /> 
      <Footer />
      <Products products={filteredProducts}/>
      { IS_DEVELOPMENT && <Footer/>}
    </CartProvider>
  )
}

export default App
