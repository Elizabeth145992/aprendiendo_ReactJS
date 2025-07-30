import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { Header } from './components/Header.jsx';
import { useState } from 'react'
function App() {
  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filteredProducts = (products) =>{
    return products.filter(product =>{
      return(
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filterProducts = filteredProducts(products);
  return (
    <>
    <Header changeFilters={setFilters} />
    <Products products={ filterProducts } />
    </>
  )
}

export default App
