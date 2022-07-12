import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import RouteSwitch from './components/RouteSwitch';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate('/shop');
  }

  const handleLogoClick = () => {
    navigate('/');
  }

  const handleAdd = (item) => {
    setCart(prevCart => [...prevCart, item]);
  }

  const handleCartClick = () => {

  }

  return (
    <div className="App">
      <Header cart={cart} handleLogoClick={handleLogoClick} handleCartClick={handleCartClick} />
      <RouteSwitch cart={cart} handleShopClick={handleShopClick} handleAdd={handleAdd} />
      <Footer />
    </div>
  );
}

export default App;
