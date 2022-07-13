import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.haloapi.com/metadata/h5/metadata/vehicles?", {
      headers: {
        "Accept-Language": "en",
        "Ocp-Apim-Subscription-Key": process.env.REACT_APP_HALO_API_KEY,
      }
    })
    .then((res) => res.json())
    .then((json) => {

      for (let i = 0; i < json.length; i++) {
        const item = {
          id: json[i].id,
          name: json[i].name,
          description: json[i].description,
          img: json[i].smallIconImageUrl,
          price: getCost(),
        }

        setItems(prevState => [...prevState, item]);
      }

      console.log(items);
    });
  }, []);

  const getCost = () => {
    return Math.floor(Math.random() * 10000) + 1000;
  }

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
      <Cart cart={cart} />
      <Routes>
              <Route path="/" element={<Home handleShopClick={handleShopClick} />} />
              <Route path="/shop" element={<Shop items={items} handleAdd={handleAdd} />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
