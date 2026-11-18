
import { useNavigate } from 'react-router-dom';

function RestaurantCard(props) {

  const navigate = useNavigate();

  return (
    <div className="restaurant-card">
      <img src={props.image} alt={props.name} />

      <h3>{props.name}</h3>
      <p>{props.cuisine}</p>
      <p>Starting from ₹{props.price}</p>

      <button onClick={() => navigate(`/menu/${props.id}`)}>
        View Menu
      </button>
    </div>
  );
}

export default RestaurantCard;
