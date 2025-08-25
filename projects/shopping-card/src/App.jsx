import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { useFilters } from './hooks/useFilters.js';
import { Cart } from './components/Cart.jsx';

function App() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts);
  return (
    <>
    <Header />
    <Cart />
    <Products products={ filteredProducts } />
    <Footer />
    </>
  )
}

export default App
