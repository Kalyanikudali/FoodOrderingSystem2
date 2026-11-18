
import { useState } from 'react';

function Checkout({ cart }) {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function placeOrder() {
    if (!name || !phone || !address) {
      alert('Please fill all the details');
      return;
    }

    alert('Order placed successfully!');
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
      />

      <input
        type="tel"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <textarea
        placeholder="Enter delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <h2>Order Summary</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} × {item.quantity}
            — ₹{item.price * item.quantity}
          </p>
        </div>
      ))}

      <h3>Total Amount: ₹{total}</h3>

      <button onClick={placeOrder}>
        Place Order
      </button>

    </div>
  );
}

export default Checkout;
