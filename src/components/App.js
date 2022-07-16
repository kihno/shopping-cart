import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Footer from './Footer';
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';

const App = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [hide, setHide] = useState(true);
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

      for (let i = 0; i < json.length - 1; i++) {
        const item = {
          id: json[i].id,
          name: json[i].name,
          description: json[i].description,
          img: json[i].smallIconImageUrl,
          price: getCost(),
          quantity: 1,
        }

        setItems(prevState => [...prevState, item]);
      }
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

  const handleAdd = (newItem) => {

    if (cart.some(item => item.name === newItem.name)) {
      const newCart = cart.map(item => {
        if (item.name === newItem.name) {
          const newQuantity = parseInt(item.quantity) + 1;

          return {...item, quantity: newQuantity}
        }
      });

      setCart(newCart);

    } else {
      setCart(prevCart => [...prevCart, newItem]);
    }
  }

  const handleInput = (e) => {
    const name = e.target.name;

    const newCart = cart.map(item => {
      if (item.name === name) {
        return {...item, quantity: e.target.value}
      }
    });
    setCart(newCart);
  }

  const handleCartClick = () => {
    setHide(!hide);
  }

  const handleDelete = (cartItem) => {
    setCart(cart.filter(item => item.name !== cartItem.name));
  }


  return(
    <div className="app">
      <Header cart={cart} handleLogoClick={handleLogoClick} handleCartClick={handleCartClick} />
      <Cart cart={cart} hide={hide} handleCartClick={handleCartClick} handleInput={handleInput} handleDelete={handleDelete} />
      <Routes>
              <Route path="/" element={<Home handleShopClick={handleShopClick} />} />
              <Route path="/shop" element={<Shop items={items} handleAdd={handleAdd} />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
