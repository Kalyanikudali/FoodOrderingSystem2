
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>Foodies</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Restaurants</Link></li>
        <li><Link to="/cart">My Cart</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
