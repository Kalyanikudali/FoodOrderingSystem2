
import { useParams, useNavigate } from 'react-router-dom';


function Menu({ cart, setCart }) {
const navigate = useNavigate();
  const { restaurantId } = useParams();
  const foods = [
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

 
function addToCart(food) {
  const existingItem = cart.find(
    (item) => item.id === food.id
  );

  if (existingItem) {
    setCart(
      cart.map((item) =>
        item.id === food.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, { ...food, quantity: 1 }]);
  }
}


  return (
    <div>
      <h1>Restaurant Menu</h1>

      <p>Restaurant ID: {restaurantId}</p>

      <h2>My Cart</h2>


{cart.map((item) => (
  <div className="cart-item" key={item.id}>
   
  <button onClick={() =>
  setCart(cart.filter((cartItem) => cartItem.id !== item.id))
}>
  Remove
</button>

    <p>{item.name} - ₹{item.price}</p>

    <button onClick={() => addToCart(item)}>
      +
    </button>

    <span> {item.quantity} </span>

    <button onClick={() => {
      if (item.quantity > 1) {
        setCart(cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ));
      } else {
        setCart(cart.filter((cartItem) => cartItem.id !== item.id));
      }
    }}>
      -
    </button>
    {cart.length > 0 && (
  <div className="floating-cart">
    <span>
      {cart.reduce((sum, item) => sum + item.quantity, 0)} Items |
      ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
    </span>

    <button onClick={() => navigate('/cart')}>
      Go to My Cart →
    </button>
  </div>
)}
  </div>
))}


<h3>

  Total: ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
</h3>


      <div className="food-container">
        {foods.map((food) => (
          <div className="food-card" key={food.id}>
            <img src={food.image} alt={food.name} />

            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p>Price: ₹{food.price}</p>

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
