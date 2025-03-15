  import React from 'react';
  import './App.css';
  import Products from './Components/Products';
  import Header from './Components/Header';

  const App:React.FC = () => {
    return (
      <div>
        <Header />
        <Products />
      </div>
    )
  }

  export default App
