import React from 'react';
import './App.css';
import Header from './components/Header';
import RouteSwitch from './components/RouteSwitch';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <RouteSwitch />
      <Footer />
    </div>
  );
}

export default App;
