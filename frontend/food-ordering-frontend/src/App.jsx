
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Restaurant from './components/Restaurant';
import Menu from './components/Menu';
import Checkout from './components/Checkout';
import Register from './components/Register';
import Login from './components/Login';
import { API_BASE_URL } from './config';

import './App.css';

function Home() {
  const [backendStatus, setBackendStatus] = useState('Checking backend status...');
  const [statusClass, setStatusClass] = useState('loading');

  useEffect(() => {
    fetch(`${API_BASE_URL}/`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((data) => {
        setBackendStatus(data);
        setStatusClass('success');
      })
      .catch(() => {
        setBackendStatus('Backend starting up or unreachable');
        setStatusClass('error');
      });
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div className={`backend-status-banner ${statusClass}`}>
          <span>{statusClass === 'success' ? '🟢' : (statusClass === 'error' ? '🔴' : '🟡')}</span>
          <span>{backendStatus}</span>
        </div>
      </div>
      <h1>Welcome to Foodies!</h1>
      <p style={{ textAlign: 'center' }}>Order your favourite food online.</p>
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
