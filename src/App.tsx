import React from 'react';
import './App.css';
import Products from './Components/Products';
import Header from './Components/Header';
import Cart from './Components/Cart';

  const App:React.FC = () => {
    return (
      <div>
        <Header />
        <Products />
        <Cart />
      </div>
    )
  }

  export default App
