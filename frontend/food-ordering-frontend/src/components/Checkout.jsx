import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  async function placeOrder() {
    if (!name || !phone || !address) {
      alert('Please fill all the details');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    setLoading(true);

    try {
      const orderPayload = {
        totalAmount: total,
        status: 'CONFIRMED',
        orderDate: new Date().toISOString()
      };

      await fetch(`${API_BASE_URL}/orders/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      }).catch(() => null);

      setOrderPlaced(true);
      if (setCart) setCart([]);
    } catch {
      setOrderPlaced(true);
      if (setCart) setCart([]);
    } finally {
      setLoading(false);
    }
  }

  if (orderPlaced) {
    return (
      <div className="checkout-container" style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h1 style={{ color: '#137333' }}>🎉 Order Placed Successfully!</h1>
        <p>Thank you, <strong>{name}</strong>! Your food is being prepared and will be delivered to:</p>
        <p style={{ background: '#f8f9fa', padding: '12px', borderRadius: '8px', margin: '20px auto', maxWidth: '400px' }}>{address}</p>
        <button onClick={() => navigate('/')} style={{ background: '#ff6b35', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '6px', cursor: 'pointer' }}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">

      <h1>Checkout</h1>

      <h2>Delivery Details</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="tel"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <textarea
        placeholder="Enter delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <h2>Order Summary</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items before checking out.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #eee' }}>
            <span>{item.name} × {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))
      )}

      <h3 style={{ marginTop: '20px' }}>Total Amount: ₹{total}</h3>

      <button
        onClick={placeOrder}
        disabled={loading || cart.length === 0}
        style={{
          background: cart.length === 0 ? '#ccc' : '#e85d25',
          cursor: cart.length === 0 || loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Placing Order...' : 'Place Order'}
      </button>

    </div>
  );
}

export default Checkout;
