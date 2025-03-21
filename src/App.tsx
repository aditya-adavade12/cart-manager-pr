import React from 'react';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';


  const App:React.FC = () => {
    return (
      <div>
       <Product />
       <Cart />
      </div>
    )
  }

  export default App
