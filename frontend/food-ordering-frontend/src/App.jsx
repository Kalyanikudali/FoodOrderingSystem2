
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Restaurant from './components/Restaurant';
import Menu from './components/Menu';
import Checkout from './components/Checkout';
import Register from './components/Register';
import Login from './components/Login';

import './App.css';

function Home() {
  return (
    <>
      <h1>Welcome to Foodies!</h1>
      <p>Order your favourite food online.</p>
      <Restaurant />
    </>
  );
}

function App() {

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/menu/:restaurantId"
          element={<Menu cart={cart} setCart={setCart} />}
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />

        <Route
          path="/checkout"
          element={<Checkout cart={cart} />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
