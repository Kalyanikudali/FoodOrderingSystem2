import { useNavigate } from 'react-router-dom';

function Cart({ cart, setCart }) {
const navigate = useNavigate();
  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter((item) => item.quantity > 0)
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>

              <button onClick={() => decreaseQuantity(item.id)}>
                -
              </button>

              <span> {item.quantity} </span>

              <button onClick={() => increaseQuantity(item.id)}>
                +
              </button>

              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>

              <p>Subtotal: ₹{item.price * item.quantity}</p>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>
          <button onClick={() => navigate('/checkout')}>
  Proceed to Checkout
</button>
        </>
      )}
    </div>
  );
}

export default Cart;
