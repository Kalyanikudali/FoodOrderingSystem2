import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const defaultFoods = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Delicious Hyderabadi chicken biryani",
    price: 250,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=500"
  },
  {
    id: 2,
    name: "Veg Biryani",
    description: "Aromatic vegetable biryani",
    price: 180,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500"
  },
  {
    id: 3,
    name: "Paneer Biryani",
    description: "Spicy paneer biryani",
    price: 200,
    image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?w=500"
  }
];

function Menu({ cart, setCart }) {
  const navigate = useNavigate();
  const { restaurantId } = useParams();
  const [foods, setFoods] = useState(defaultFoods);

  useEffect(() => {
    fetch(`${API_BASE_URL}/foods/getall`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((f, idx) => ({
            id: f.foodId || idx + 1,
            name: f.foodName,
            description: f.description || 'Delicious dish freshly made',
            price: f.price || 150,
            image: defaultFoods[idx % defaultFoods.length].image
          }));
          setFoods(mapped);
        }
      })
      .catch(() => {
        // Keep default foods on error
      });
  }, []);

  function addToCart(food) {
    const existingItem = cart.find((item) => item.id === food.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h1>Restaurant Menu</h1>
      <p style={{ color: '#666', textAlign: 'center' }}>Restaurant ID: #{restaurantId}</p>

      {/* Floating / Sticky Cart Banner */}
      {cart.length > 0 && (
        <div className="floating-cart" style={{
          position: 'sticky',
          top: '20px',
          zIndex: 10,
          background: '#ff6b35',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          margin: '20px 0'
        }}>
          <span style={{ fontWeight: 'bold' }}>
            🛒 {totalQuantity} Items | Total: ₹{totalPrice}
          </span>
          <button
            onClick={() => navigate('/cart')}
            style={{
              background: 'white',
              color: '#ff6b35',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Go to My Cart →
          </button>
        </div>
      )}

      {/* Food Items Grid */}
      <div className="food-container">
        {foods.map((food) => (
          <div className="food-card" key={food.id}>
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p style={{ fontWeight: 'bold', color: '#ff6b35' }}>Price: ₹{food.price}</p>

            <button onClick={() => addToCart(food)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
