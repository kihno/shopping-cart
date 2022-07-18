import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Footer from './Footer';

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
        const prices =[149998, 92998, 39998, 104998, 199998, 52998, 64998, 29998, 79998];

        const item = {
          id: json[i].id,
          name: json[i].name,
          description: json[i].description || 'Coming Soon',
          img: json[i].smallIconImageUrl,
          price: prices[i],
          quantity: 1,
        }

        setItems(prevState => [...prevState, item]);
      }
    });
  }, []);

  const handleShopClick = () => {
    navigate('/shop');
    hideCart();
  }

  const handleLogoClick = () => {
    navigate('/');
    hideCart();
  }

  const hideCart = () => {
    setHide(true);
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
        return {...item, quantity: parseInt(e.target.value)}
      } else {
        return item;
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
      <Header cart={cart} handleLogoClick={handleLogoClick} handleCartClick={handleCartClick} hideCart={hideCart} />
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
