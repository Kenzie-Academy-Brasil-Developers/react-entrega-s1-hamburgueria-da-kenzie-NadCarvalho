import './App.css';
import MenuContainer from './Components/MenuContainer';
import { useState } from 'react';
import FilterProduct from './Components/FilterProduct';
import Cart from './Components/Cart';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState('');
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const[inputValue, setInputValue] = useState('')


  const showProducts = () => {
    const filtered = products.filter((p) => p.name === filteredProducts)
    setFilteredProducts(filtered)
  }

  const handleClick = (productId) => {
    const found = products.find((p) => p.id === productId)
  }

  

  return (
    <div className="App">
      <FilterProduct inputValue={inputValue} setInputValue={setInputValue} showProducts={showProducts} />
      <MenuContainer productsList={products} handleAdd={handleClick} />
     <Cart cartTotal={cartTotal} currentSale={currentSale}/>
    </div>
  );
}

export default App;
